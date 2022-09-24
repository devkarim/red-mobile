import React from 'react';
import Logo from '@src/components/ui/Logo';
import SafeArea from '../layout/SafeArea';
import Txt from '../components/ui/Txt';
import tw from '../lib/tailwind';
import RedText from '../components/ui/RedText';
import useStackNavigation from '@src/helpers/hooks/useStackNavigation';
import { useEffect } from 'react';
import { debug } from '../helpers/utils';
import { useAppDispatch } from '../state/hooks';
import { saveLocation } from '../state/reducers/local';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LAST_UPDATED_STORAGE_KEY, LOC_STORAGE_KEY } from '../config/storage';

const SplashScreen = () => {
  const { replaceTimeout } = useStackNavigation();

  const dispatch = useAppDispatch();

  const checkLastUpdate = async () => {
    const [loc, lastUpdated] = await AsyncStorage.multiGet([
      LOC_STORAGE_KEY,
      LAST_UPDATED_STORAGE_KEY,
    ]);
    const timestampNow = Date.now();
    const lastUpdatedAt = parseInt(lastUpdated[1] || '0');

    debug('Get loc from storage', loc);
    debug('Get lastUpdated from storage', lastUpdated);

    // Check if last updated was 1d ago
    if (loc && loc[1] && timestampNow - lastUpdatedAt < 24 * 60 * 60 * 1000) {
      debug(
        'Last updated was less than 1d, using local data instead...',
        lastUpdated
      );
      await dispatch(saveLocation(JSON.parse(loc[1]), lastUpdatedAt));
      return false;
    }
    return true;
  };

  const fetchLocation = async () => {
    const canUpdate = await checkLastUpdate();
    if (!canUpdate) return;

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;

    let location = await Location.getCurrentPositionAsync({});
    debug('Set new location', location);
    await dispatch(saveLocation(location));
  };

  const load = async () => {
    await fetchLocation();
    replaceTimeout('/main', __DEV__ ? 1000 : 2000);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <SafeArea centerScreen>
      <Logo />
      <Txt style={tw`absolute bottom-0 p-12 opacity-40`}>
        By <RedText />
      </Txt>
    </SafeArea>
  );
};

export default SplashScreen;
