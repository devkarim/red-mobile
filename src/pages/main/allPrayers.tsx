import React from 'react';
import { ScrollView } from 'react-native';
import LoadingScreen from '../../components/screens/LoadingScreen';
import Txt from '../../components/ui/Txt';
import PrayerCard from '../../features/prayers/components/PrayerCard';
import usePresentPrayers from '../../features/prayers/hooks/usePresentPrayers';
import Container from '../../layout/Container';
import Content from '../../layout/Content';
import Space from '../../layout/Space';
import tw from '../../lib/tailwind';
import { useAppSelector } from '../../state/hooks';

const AllPrayerScreen = () => {
  const loc = useAppSelector((s) => s.localSlice.location);
  const { isLoading, prayers } = usePresentPrayers(loc);

  if (!prayers) return <LoadingScreen />;

  const nextPrayer = prayers.nextPrayer;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Content>
        <Txt style={tw`font-extrabold text-4xl`}>Up Next</Txt>
        <Space />
        <PrayerCard prayer={nextPrayer.name} timestamp={nextPrayer.timestamp} />
        <Space size="md" />
        <Txt style={tw`font-extrabold text-4xl`}>Later</Txt>
        <Space />

        {prayers.allNextPrayers.slice(1).map((p) => {
          return (
            <Container key={p.name}>
              <PrayerCard prayer={p.name} timestamp={p.timestamp} />
              <Space />
            </Container>
          );
        })}
      </Content>
    </ScrollView>
  );
};

export default AllPrayerScreen;
