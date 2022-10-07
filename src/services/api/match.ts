import { dateToISO } from './../../helpers/utils';
import client from '../client';

export const getMatchesNow = async () => {
  const date = dateToISO(new Date());
  const res = await client.get('/match/now', { params: { date } });
  return res.data as LeagueMatches[];
};
