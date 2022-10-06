import { useState } from 'react';
import PrayerCard from './PrayerCard';
import { useAppSelector } from '../../../state/hooks';
import usePresentPrayers from '../hooks/usePresentPrayers';

interface NextPrayerCardProps {}

const NextPrayerCard: React.FC<NextPrayerCardProps> = ({}) => {
  const loc = useAppSelector((s) => s.localSlice.location);
  const { prayers } = usePresentPrayers(loc);

  if (!prayers) return <></>;

  const { nextPrayer } = prayers;

  return (
    <PrayerCard prayer={nextPrayer.name} timestamp={nextPrayer.timestamp} />
  );
};

export default NextPrayerCard;
