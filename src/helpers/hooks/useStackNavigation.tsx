import { StackActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const useStackNavigation = () => {
  let timeout: NodeJS.Timeout;
  const navigation = useNavigation();

  const push = (pageName: string, params?: any) =>
    navigation.dispatch(StackActions.push(pageName, params));

  const replace = (pageName: string, params?: any) =>
    navigation.dispatch(StackActions.replace(pageName, params));

  const pushTimeout = (pageName: string, ms: number, params?: any) => {
    timeout = setTimeout(() => {
      push(pageName, params);
    }, ms);
  };

  const replaceTimeout = (pageName: string, ms: number, params?: any) => {
    timeout = setTimeout(() => {
      replace(pageName, params);
    }, ms);
  };

  useEffect(() => () => clearTimeout(timeout), []);

  return { push, replace, pushTimeout, replaceTimeout };
};

export default useStackNavigation;
