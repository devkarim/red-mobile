import client from '../client';

export const fetchLocationByCoords = async (lat: number, lon: number) => {
  const res = await client.get('/geo', { params: { lat, lon } });
  return res.data as GeoResponse;
};
