export interface Prayers {
  nextPrayer: Prayer;
  allNextPrayers: Prayer[];
  allPreviousPrayers: Prayer[];
  otherTimings: Prayer[];
}

export const parseNextPrayers = (prayersRes: PrayerResponse): Prayers => {
  const allPrayers = prayersRes.prayers;
  const allNextPrayers: Prayer[] = [];
  const allPreviousPrayers: Prayer[] = [];
  const timestampNow = Date.now();
  for (const p of allPrayers) {
    if (p.timestamp > timestampNow) {
      allNextPrayers.push(p);
    } else {
      allPreviousPrayers.push(p);
    }
  }
  return {
    nextPrayer: allNextPrayers[0],
    allNextPrayers,
    allPreviousPrayers,
    otherTimings: prayersRes.otherTimings,
  };
};
