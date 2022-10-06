import client from '../client';

export const getMatchesNow = async () => {
  const res = await client.get('/match/now');
  return res.data as LeagueMatchesToday[];
};
