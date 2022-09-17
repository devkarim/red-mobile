import React from 'react';
import Logo from '@src/components/ui/Logo';
import SafeArea from '../layout/SafeArea';
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
    <SafeArea centerScreen>
      <Logo />
      <Txt style={tw`absolute bottom-0 p-12 opacity-40`}>
        By <RedText />
      </Txt>
    </SafeArea>
  );
};

export default SplashScreen;
