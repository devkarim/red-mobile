import { useEffect, useState } from 'react';
import Card from '../../../components/ui/Card';
import Txt from '../../../components/ui/Txt';
import { dateToShortTime, getRemainingTime } from '../../../helpers/utils';
import Container from '../../../layout/Container';
import tw from '../../../lib/tailwind';

interface PrayerCardProps {
  prayer: string;
  timestamp: number;
}

const PrayerCard: React.FC<PrayerCardProps> = ({ prayer, timestamp }) => {
  const date = new Date(timestamp);
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const timestampNow = Date.now();

    const timer = setTimeout(() => {
      setRemainingTime(getRemainingTime(timestamp, timestampNow));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Card
      style={tw`flex-row w-full items-center justify-between bg-primary-dark`}
    >
      <Txt style={tw`font-bold text-2xl w-[60%] text-white`}>Al-{prayer}</Txt>
      <Container style={tw`w-[40%]`}>
        <Txt style={tw`font-medium text-xl text-white`}>
          {dateToShortTime(date)}
        </Txt>
        <Txt style={tw`font-light text-xs text-inactive-light text-white`}>
          {remainingTime} remaining
        </Txt>
      </Container>
    </Card>
  );
};

export default PrayerCard;
