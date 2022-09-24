import { useEffect, useState } from 'react';
import { getPresentPrayer } from '@src/services/api/prayer';
import PrayerCard from './PrayerCard';
import { useAppSelector } from '../../../state/hooks';
import { debug } from '../../../helpers/utils';
import { parseNextPrayers } from '../../../helpers/parsers/prayer';

interface NextPrayerCardProps {}

const NextPrayerCard: React.FC<NextPrayerCardProps> = ({}) => {
  const [prayer, setPrayer] = useState('');
  const [timestamp, setTimestamp] = useState(0);
  const loc = useAppSelector((s) => s.localSlice.location);

  const loadPrayer = async () => {
    if (!loc) return;
    const { latitude, longitude } = loc.coords;
    const prayersRes = await getPresentPrayer(latitude, longitude);
    debug('PrayersRes', prayersRes);
    const prayers = parseNextPrayers(prayersRes);
    debug('Prayers', prayers);
    setPrayer(prayers.nextPrayer.name);
    setTimestamp(prayers.nextPrayer.timestamp);
  };

  useEffect(() => {
    loadPrayer();
  }, [loc]);

  return <PrayerCard prayer={prayer} timestamp={timestamp} />;
};

export default NextPrayerCard;
