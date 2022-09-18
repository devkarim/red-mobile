interface Prayer {
  name: string;
  timestamp: number;
}

interface PrayerResponse {
  prayers: Prayer[];
  otherTimings: Prayer[];
}
