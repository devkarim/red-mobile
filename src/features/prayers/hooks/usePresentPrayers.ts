import { useAppDispatch } from '@src/state/hooks';
import { LocationObject } from 'expo-location';
import { useEffect, useState } from 'react';
import { parseNextPrayers, Prayers } from '@src/helpers/parsers/prayer';
import { debug } from '@src/helpers/utils';
import { getPresentPrayer } from '@src/services/api/prayer';
import { useAppSelector } from '@src/state/hooks';
import { setPrayers } from '@src/state/reducers/cache';

const usePresentPrayers = (loc: LocationObject | null) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [prayers, setPresentPrayers] = useState<Prayers | null>(null);
  const dispatch = useAppDispatch();
  const prayersCache = useAppSelector((s) => s.cacheSlice.prayers);

  const fetchPrayers = async (location: LocationObject) => {
    const { latitude, longitude } = location.coords;
    const prayersRes = await getPresentPrayer(latitude, longitude);
    debug('PrayersRes', prayersRes);
    const prayers = parseNextPrayers(prayersRes);
    debug('Prayers', prayers);
    // setPrayers(prayers);
    return prayers;
  };

  const loadPrayers = async () => {
    setLoading(true);
    if (prayersCache) {
      setPresentPrayers(prayersCache);
      return setLoading(false);
    }
    if (!loc) return setLoading(false);
    const newPrayers = await fetchPrayers(loc);
    dispatch(setPrayers(newPrayers));
    setPresentPrayers(newPrayers);
    setLoading(false);
  };

  useEffect(() => {
    loadPrayers();
  }, [loc]);

  return { isLoading, prayers };
};

export default usePresentPrayers;
