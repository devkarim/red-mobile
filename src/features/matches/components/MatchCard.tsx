import Card from '@src/components/ui/Card';
import tw from '@src/lib/tailwind';
import Txt from '@src/components/ui/Txt';
import { dateToShortTime } from '@src/helpers/utils';
import Container from '@src/layout/Container';
import HSpace from '@src/layout/HSpace';
import Space from '@src/layout/Space';
import MatchTeam from './MatchTeam';
import { parseScore } from '../../../helpers/parsers/parseMatches';

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
  const finalLeagueName = league == 'Primera Division' ? 'LaLiga' : league;

  return (
    <Card style={tw`flex w-full items-center justify-center bg-match-dark`}>
      <Txt style={tw`font-bold text-xs text-white`}>0 Interested</Txt>
      <Txt style={tw`font-bold text-xs opacity-50 text-white`}>
        {finalLeagueName}
      </Txt>
      <Space size="sm" />
      <Container style={tw`flex-row`}>
        <MatchTeam imgUrl={homeTeam.crest} name={homeTeam.name} />
        <Container style={tw`items-center flex-grow`}>
          <Container style={tw`flex-row mb-2`}>
            <Txt style={tw`font-black text-4xl text-center text-white`}>
              {finalScore.homeTeam ?? '-'}
            </Txt>
            <HSpace />
            <Txt style={tw`font-black text-4xl text-center text-white`}>
              {finalScore.awayTeam ?? '-'}
            </Txt>
          </Container>
          <Txt style={tw`font-bold text-xs opacity-50 text-white`}>
            {dateToShortTime(date)}
          </Txt>
        </Container>
        <MatchTeam imgUrl={awayTeam.crest} name={awayTeam.name} />
      </Container>
    </Card>
  );
};

export default MatchCard;
