import { useState } from 'react';
import PrayerCard from './PrayerCard';
import { useAppSelector } from '../../../state/hooks';
import usePresentPrayers from '../hooks/usePresentPrayers';

interface NextPrayerCardProps {}

const NextPrayerCard: React.FC<NextPrayerCardProps> = ({}) => {
  const [timestamp, setTimestamp] = useState(0);
  const loc = useAppSelector((s) => s.localSlice.location);
  const { prayers } = usePresentPrayers(loc);

  if (!prayers) return <></>;

  return <PrayerCard prayer={prayers.nextPrayer.name} timestamp={timestamp} />;
};

export default NextPrayerCard;
