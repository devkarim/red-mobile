import React, { useEffect, useState } from 'react';
import Txt from '../../../components/ui/Txt';
import { dateToTime, getReadableDate } from '../../../helpers/utils';
import Container from '../../../layout/Container';
import tw from '../../../lib/tailwind';
import { fetchLocationByCoords } from '../../../services/api/geo';
import { useAppSelector } from '../../../state/hooks';

interface BasicInfoProps {}

const BasicInfo: React.FC<BasicInfoProps> = ({}) => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [city, setCity] = useState('');
  const loc = useAppSelector((s) => s.localSlice.location);

  const loadLocation = async () => {
    if (!loc) return setCity('N/A');
    const { latitude, longitude } = loc.coords;
    const geoRes = await fetchLocationByCoords(latitude, longitude);
    const firstGeo = geoRes[0];
    if (!firstGeo) return setCity('N/A');
    setCity(firstGeo.name);
  };

  useEffect(() => {
    const date = new Date();

    const timer = setTimeout(() => {
      setCurrentTime(dateToTime(date));
      setCurrentDate(getReadableDate(date));
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    loadLocation();
  }, [loc]);

  return (
    <Container style={tw`flex-row justify-between items-center`}>
      <Txt style={tw`font-extrabold text-3xl`}>{city}</Txt>
      <Container>
        <Txt style={tw`font-bold text-xl`}>{currentTime}</Txt>
        <Txt style={tw`font-bold text-sm`}>{currentDate}</Txt>
      </Container>
    </Container>
  );
};

export default BasicInfo;
