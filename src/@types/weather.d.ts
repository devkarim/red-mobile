interface WeatherTime {
  timestamp: number;
  degree: number;
  now?: boolean;
}

interface Weather {
  schedule: WeatherTime[];
}
