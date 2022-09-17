import { Ionicons } from '@expo/vector-icons';
import Card from '../../../components/ui/Card';
import Container from '../../../layout/Container';
import HSpace from '../../../layout/HSpace';
import Space from '../../../layout/Space';
import tw from '../../../lib/tailwind';
import WeatherColumn from './WeatherColumn';

interface WeatherCardProps {
  weather: Weather;
  day: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather, day }) => {
  return (
    <Card style={tw`flex-row items-center justify-between bg-primary-dark`}>
      <Ionicons
        name={day ? 'sunny' : 'moon'}
        size={52}
        color={day ? '#FFD600' : '#fff'}
      />
      <Container style={tw`flex-row`}>
        {weather.schedule.map((w) => {
          const date = new Date(w.timestamp);
          const time = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            hour12: true,
          });

          return (
            <Container key={w.timestamp}>
              <WeatherColumn time={w.now ? 'Now' : time} degree={w.degree} />
              <HSpace size={7} />
            </Container>
          );
        })}
      </Container>
    </Card>
  );
};

export default WeatherCard;
