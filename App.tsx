import Root from './src';
import { I18nManager } from 'react-native';

/*
  Forces the application to be Left-To-Right (LTR).

  TODO: Remove when more languages are supported.
*/
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export default function App() {
  return <Root />;
}
