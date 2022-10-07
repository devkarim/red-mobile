export interface Prayers {
  nextPrayer: Prayer;
  allNextPrayers: Prayer[];
  allPreviousPrayers: Prayer[];
  otherTimings: Prayer[];
}

export const parsePrayers = (prayers: Prayer[]) => {
  const nextPrayers: Prayer[] = [];
  const previousPrayers: Prayer[] = [];
  const timestampNow = Date.now();
  for (const p of prayers) {
    if (p.timestamp > timestampNow) {
      nextPrayers.push(p);
    } else {
      previousPrayers.push(p);
    }
  }
  return { nextPrayers, previousPrayers };
};

export const parseNextPrayers = (prayersRes: PrayerResponse): Prayers => {
  const prayersToday = prayersRes.prayersToday;
  const prayersTomorrow = prayersRes.prayersTomorrow;
  // const allPrayers = prayersToday.prayers;
  const allPrayers = {
    today: parsePrayers(prayersToday.prayers),
    tomorrow: parsePrayers(prayersTomorrow.prayers),
  };
  const nextPrayersToday = allPrayers.today.nextPrayers;
  const nextPrayersTomorrow = allPrayers.tomorrow.nextPrayers;
  const nextPrayers =
    nextPrayersToday.length > 1 ? nextPrayersToday : nextPrayersTomorrow;
  const allPreviousPrayers = allPrayers.today.previousPrayers;
  return {
    nextPrayer: nextPrayers[0],
    allNextPrayers: nextPrayers,
    allPreviousPrayers,
    otherTimings: [
      ...prayersToday.otherTimings,
      ...prayersTomorrow.otherTimings,
    ],
  };
};
