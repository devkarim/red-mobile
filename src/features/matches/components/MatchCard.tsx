import Card from '@src/components/ui/Card';
import tw from '@src/lib/tailwind';
import Txt from '../../../components/ui/Txt';
import Container from '../../../layout/Container';
import HSpace from '../../../layout/HSpace';
import Space from '../../../layout/Space';
import MatchTeam from './MatchTeam';

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  score: Score;
  league: string;
}

const MatchCard: React.FC<MatchCardProps> = ({
  homeTeam,
  awayTeam,
  score,
  league,
}) => {
  return (
    <Card style={tw`flex w-full items-center justify-center bg-primary-dark`}>
      <Txt style={tw`font-bold text-xs`}>0 Interested</Txt>
      <Txt style={tw`font-bold text-xs opacity-50`}>{league}</Txt>
      <Space size="sm" />
      <Container style={tw`flex-row`}>
        <MatchTeam
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"
          name="FC Bayern Munich"
        />
        <Container style={tw`items-center flex-grow`}>
          <Container style={tw`flex-row mb-2`}>
            <Txt style={tw`font-black text-4xl`}>3</Txt>
            <HSpace />
            <Txt style={tw`font-black text-4xl`}>1</Txt>
          </Container>
          <Txt style={tw`font-bold text-xs opacity-50`}>9:00 PM</Txt>
        </Container>
        <MatchTeam
          imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
          name="FC Barcelona"
        />
      </Container>
    </Card>
  );
};

export default MatchCard;
