import { useEffect, useState } from 'react';
import { getPresentPrayer } from '@src/services/api/prayer';
import PrayerCard from './PrayerCard';
import { useAppSelector } from '../../../state/hooks';
import { dateToShortTime, debug } from '../../../helpers/utils';

interface NextPrayerCardProps {}

const NextPrayerCard: React.FC<NextPrayerCardProps> = ({}) => {
  const [prayer, setPrayer] = useState('');
  const [time, setTime] = useState(new Date());
  const loc = useAppSelector((s) => s.localSlice.location);

  const loadPrayer = async () => {
    if (!loc) return;
    const { latitude, longitude } = loc.coords;
    const prayers = await getPresentPrayer(latitude, longitude);
    debug('Prayers', prayers);
    setPrayer('Al-Asr');
    setTime(new Date());
  };

  useEffect(() => {
    loadPrayer();
  }, []);

  return <PrayerCard prayer={prayer} time={dateToShortTime(time)} />;
};

export default NextPrayerCard;
