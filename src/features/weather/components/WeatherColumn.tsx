import Txt from '../../../components/ui/Txt';
import Container from '../../../layout/Container';
import Space from '../../../layout/Space';
import tw from '../../../lib/tailwind';

interface WeatherColumnProps {
  time: string;
  degree: number;
}

const WeatherColumn: React.FC<WeatherColumnProps> = ({ time, degree }) => {
  return (
    <Container style={tw`items-center`}>
      <Txt>{time}</Txt>
      <Space />
      <Txt>{`${degree}°C`}</Txt>
    </Container>
  );
};

export default WeatherColumn;
