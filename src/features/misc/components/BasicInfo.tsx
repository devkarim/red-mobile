import React, { useEffect, useState } from 'react';
import Txt from '../../../components/ui/Txt';
import { dateToTime, getReadableDate } from '../../../helpers/utils';
import Container from '../../../layout/Container';
import tw from '../../../lib/tailwind';

interface BasicInfoProps {}

const BasicInfo: React.FC<BasicInfoProps> = ({}) => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();

    const timer = setTimeout(() => {
      setCurrentTime(dateToTime(date));
      setCurrentDate(getReadableDate(date));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Container style={tw`flex-row justify-between items-center`}>
      <Txt style={tw`font-extrabold text-4xl`}>Cairo</Txt>
      <Container>
        <Txt style={tw`font-bold text-2xl`}>{currentTime}</Txt>
        <Txt style={tw`font-bold text-sm`}>{currentDate}</Txt>
      </Container>
    </Container>
  );
};

export default BasicInfo;
