import { useEffect, useState } from 'react';
import { getPresentPrayer } from '@src/services/api/prayer';
import PrayerCard from './PrayerCard';
import { useAppSelector } from '../../../state/hooks';
import { debug } from '../../../helpers/utils';
import { parseNextPrayers } from '../../../helpers/parsers/prayer';
import usePresentPrayers from '../hooks/usePresentPrayers';

interface NextPrayerCardProps {}

const NextPrayerCard: React.FC<NextPrayerCardProps> = ({}) => {
  const [timestamp, setTimestamp] = useState(0);
  const loc = useAppSelector((s) => s.localSlice.location);
  const { isLoading, prayers } = usePresentPrayers(loc);

  if (!prayers) return <></>;

  return <PrayerCard prayer={prayers.nextPrayer.name} timestamp={timestamp} />;
};

export default NextPrayerCard;
