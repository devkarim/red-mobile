import PrayerCard from './PrayerCard';

interface NextPrayerCardProps {}

const NextPrayerCard: React.FC<NextPrayerCardProps> = ({}) => {
  // TODO: Replace with actual next prayer
  return <PrayerCard prayer="Al-Asr" timestamp={Date.now()} />;
};

export default NextPrayerCard;
