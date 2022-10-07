import { dateToISO } from './../utils';
export const parseTeamScore = (score: Score, k: ScoreTeamKey) => {
  let halfScore = score.halfTime && score.halfTime[k];
  let fullScore = score.fullTime && score.fullTime[k];
  let extraScore = score.extraTime && score.extraTime[k];
  // let penaltyScore = score.penalties && score.penalties[k]
  // if (penaltyScore != null) return penaltyScore;
  if (extraScore != null) return extraScore;
  if (fullScore != null) return fullScore;
  if (halfScore != null) return halfScore;
  return null;
};

export const parseScore = (score: Score) => {
  const homeTeam = parseTeamScore(score, 'home');
  const awayTeam = parseTeamScore(score, 'away');
  const winner = score.winner == 'AWAY_TEAM' ? 'awayTeam' : 'homeTeam';
  return { homeTeam, awayTeam, winner };
};

const parseMatchesRes = (leagueMatches: LeagueMatches[]) => {
  const allMatches: DateMatches = {};
  for (const l of leagueMatches) {
    if (!allMatches[l.date]) {
      allMatches[l.date] = [];
    }
    allMatches[l.date] = [...allMatches[l.date], ...l.matches];
  }
  return allMatches;
};

export default parseMatchesRes;
