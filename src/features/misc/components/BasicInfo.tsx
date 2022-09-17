import React from 'react';
import Txt from '../../../components/ui/Txt';
import { dateToTime, getReadableDate } from '../../../helpers/utils';
import Container from '../../../layout/Container';
import tw from '../../../lib/tailwind';

interface BasicInfoProps {}

const BasicInfo: React.FC<BasicInfoProps> = ({}) => {
  const date = new Date();

  return (
    <Container style={tw`flex-row justify-between items-center`}>
      <Txt style={tw`font-extrabold text-4xl`}>Cairo</Txt>
      <Container>
        <Txt style={tw`font-bold text-2xl`}>{dateToTime(date)}</Txt>
        <Txt style={tw`font-bold text-sm`}>{getReadableDate(date)}</Txt>
      </Container>
    </Container>
  );
};

export default BasicInfo;
