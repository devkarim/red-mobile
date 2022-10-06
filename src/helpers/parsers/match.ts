export const parseTeamScore = (score: Score, k: TeamKey) => {
  let halfScore = score.halfTime[k];
  let fullScore = score.fullTime[k];
  let extraScore = score.extraTime[k];
  // let penaltyScore = score.penalties[k]
  // if (penaltyScore != null) return penaltyScore;
  if (extraScore != null) return extraScore;
  if (fullScore != null) return fullScore;
  if (halfScore != null) return halfScore;
};

export const parseScore = (score: Score) => {
  const homeTeam = parseTeamScore(score, 'homeTeam');
  const awayTeam = parseTeamScore(score, 'awayTeam');
  const winner = score.winner == 'AWAY_TEAM' ? 'awayTeam' : 'homeTeam';
  return { homeTeam, awayTeam, winner };
};
