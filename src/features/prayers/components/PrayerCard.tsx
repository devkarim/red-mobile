import Card from '../../../components/ui/Card';
import Txt from '../../../components/ui/Txt';
import { dateToTime } from '../../../helpers/utils';
import Container from '../../../layout/Container';
import tw from '../../../lib/tailwind';

interface PrayerCardProps {
  prayer: string;
  timestamp: number;
}

const PrayerCard: React.FC<PrayerCardProps> = ({ prayer, timestamp }) => {
  const date = new Date(timestamp);

  return (
    <Card style={tw`flex-row items-center justify-between bg-primary-dark`}>
      <Txt style={tw`font-bold text-2xl`}>{prayer}</Txt>
      <Container>
        <Txt style={tw`font-medium text-xl`}>{dateToTime(date)}</Txt>
        <Txt style={tw`font-light text-xs text-inactive-light`}>
          1h, 2m remaining {/* TODO: Replace with actual remaining value */}
        </Txt>
      </Container>
    </Card>
  );
};

export default PrayerCard;
