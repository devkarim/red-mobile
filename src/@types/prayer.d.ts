interface Prayer {
  name: string;
  timestamp: number;
}

interface PrayerData {
  prayers: Prayer[];
  otherTimings: Prayer[];
}

interface PrayerResponse {
  prayersToday: PrayerData;
  prayersTomorrow: PrayerData;
}
