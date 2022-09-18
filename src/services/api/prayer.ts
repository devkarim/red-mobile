import client from '../client';

export const getPresentPrayer = async (lat: number, lon: number) => {
  const day = new Date().getDate();
  const res = await client.get('/prayer/now', { params: { lat, lon, day } });
  return res.data as Prayer[];
};
