import React, { useState } from 'react';
import SafeArea from '@src/layout/SafeArea';
import Content from '@src/layout/Content';
import BasicInfo from '@src/features/misc/components/BasicInfo';
import HorizontalLine from '@src/components/ui/HorizontalLine';
import NextPrayerCard from '@src/features/prayers/components/NextPrayerCard';
import tw from '../../lib/tailwind';
import Txt from '../../components/ui/Txt';
import Space from '../../layout/Space';
import Button from '../../components/ui/Button';
import Palette from '../../config/palette';
import * as Location from 'expo-location';
import { debug } from '../../helpers/utils';
import { saveLocation } from '../../state/reducers/local';
import { useAppDispatch } from '../../state/hooks';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState('Hi');

  // this function is for debugging on android device
  const updateLoc = async () => {
    setStatus('updating loc...');
    let { status } = await Location.requestForegroundPermissionsAsync();
    setStatus(
      `got status ${JSON.stringify(
        status
      )}. if granted, please wait until it updates...`
    );
    if (status !== 'granted') return;

    let location = await Location.getCurrentPositionAsync({});
    setStatus(`got loc ${JSON.stringify(location)}`);
    debug('Set new location', location);
    await dispatch(saveLocation(location));
  };

  return (
    <SafeArea>
      <Content>
        <BasicInfo />
        <Space />
        <NextPrayerCard />
        <HorizontalLine style={tw`w-full my-8`} />
        <Txt style={tw`font-extrabold text-5xl`}>Up Next</Txt>
        <Space />
        <Button
          title="Update Location"
          bgColor={Palette.PRIMARY}
          onPress={updateLoc}
        />
        <Space />
        <Txt>{status}</Txt>
      </Content>
    </SafeArea>
  );
};

export default HomeScreen;
