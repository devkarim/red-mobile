import React from 'react';
import tw from '@src/lib/tailwind';
import Txt from './Txt';

const RedText = () => {
  return (
    <Txt style={tw`text-base tracking-widest text-primary font-extrabold`}>
      RED
    </Txt>
  );
};

export default RedText;
