import Card from '@src/components/ui/Card';
import tw from '@src/lib/tailwind';
import Txt from '@src/components/ui/Txt';
import { dateToShortTime } from '@src/helpers/utils';
import Container from '@src/layout/Container';
import HSpace from '@src/layout/HSpace';
import Space from '@src/layout/Space';
import MatchTeam from './MatchTeam';
import { parseScore } from '../../../helpers/parsers/match';

interface MatchCardProps {
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  league: string;
  utcDate: string;
}

const MatchCard: React.FC<MatchCardProps> = ({
  homeTeam,
  awayTeam,
  score,
  league,
  utcDate,
}) => {
  const date = new Date(utcDate);
  const finalScore = parseScore(score);

  return (
    <Card style={tw`flex w-full items-center justify-center bg-primary-dark`}>
      <Txt style={tw`font-bold text-xs`}>0 Interested</Txt>
      <Txt style={tw`font-bold text-xs opacity-50`}>{league}</Txt>
      <Space size="sm" />
      <Container style={tw`flex-row`}>
        <MatchTeam
          imgUrl={`https://crests.football-data.org/${homeTeam.id}.png`}
          name={homeTeam.name}
        />
        <Container style={tw`items-center flex-grow`}>
          <Container style={tw`flex-row mb-2`}>
            <Txt style={tw`font-black text-4xl text-center`}>
              {finalScore.homeTeam}
            </Txt>
            <HSpace />
            <Txt style={tw`font-black text-4xl text-center`}>
              {finalScore.awayTeam}
            </Txt>
          </Container>
          <Txt style={tw`font-bold text-xs opacity-50`}>
            {dateToShortTime(date)}
          </Txt>
        </Container>
        <MatchTeam
          imgUrl={`https://crests.football-data.org/${awayTeam.id}.png`}
          name={awayTeam.name}
        />
      </Container>
    </Card>
  );
};

export default MatchCard;
