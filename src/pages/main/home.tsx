import React from 'react';
import SafeArea from '@src/layout/SafeArea';
import Content from '@src/layout/Content';
import BasicInfo from '@src/features/misc/components/BasicInfo';
import HorizontalLine from '@src/components/ui/HorizontalLine';
import NextPrayerCard from '@src/features/prayers/components/NextPrayerCard';
import tw from '../../lib/tailwind';
import Txt from '../../components/ui/Txt';
import Space from '../../layout/Space';

const HomeScreen = () => {
  return (
    <SafeArea>
      <Content>
        <BasicInfo />
        <Space />
        <NextPrayerCard />
        <HorizontalLine style={tw`w-full my-8`} />
        <Txt style={tw`font-extrabold text-5xl`}>Up Next</Txt>
      </Content>
    </SafeArea>
  );
};

export default HomeScreen;
