import React from 'react';
import Logo from '@src/components/ui/Logo';
import Container from '../components/ui/Container';
import Txt from '../components/ui/Txt';
import tw from '../lib/tailwind';
import RedText from '../components/ui/RedText';
import useStackNavigation from '@src/helpers/hooks/useStackNavigation';
import { useEffect } from 'react';

const SplashScreen = () => {
  const { replaceTimeout } = useStackNavigation();

  useEffect(() => {
    replaceTimeout('/main', __DEV__ ? 1000 : 2000);
  }, []);

  return (
    <Container centerScreen>
      <Logo />
      <Txt style={tw`absolute bottom-0 p-12 opacity-40`}>
        By <RedText />
      </Txt>
    </Container>
  );
};

export default SplashScreen;
