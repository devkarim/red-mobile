import WeatherCard from './WeatherCard';

interface TodayWeatherCardProps {}

const TodayWeatherCard: React.FC<TodayWeatherCardProps> = ({}) => {
  const nextHour = new Date(2022, 9, 6, 4, 0, 0);
  const nextHour2 = new Date(2022, 9, 6, 5, 0, 0);
  const nextHour3 = new Date(2022, 9, 6, 6, 0, 0);

  const weather: Weather = {
    schedule: [
      { degree: 26, timestamp: Date.now(), now: true },
      { degree: 25, timestamp: nextHour.getTime() },
      { degree: 24, timestamp: nextHour2.getTime() },
      { degree: 23, timestamp: nextHour3.getTime() },
    ],
  };

  const weatherNow = weather.schedule.find((w) => w.now);
  const hours = new Date(weatherNow?.timestamp || 0).getHours();
  const isDay = hours > 6 && hours < 20;

  // TODO: Replace with actual weather today
  return <WeatherCard day={isDay} weather={weather} />;
};

export default TodayWeatherCard;
