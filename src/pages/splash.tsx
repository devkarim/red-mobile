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
import { setLocation } from '../state/reducers/local';
import * as Location from 'expo-location';

const SplashScreen = () => {
  const { replaceTimeout } = useStackNavigation();

  const dispatch = useAppDispatch();

  const fetchLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;

    let location = await Location.getCurrentPositionAsync({});
    debug('Set location', location);
    dispatch(setLocation(location));
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
