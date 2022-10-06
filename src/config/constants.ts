export const APP_NAME = 'Red Mobile';
export const APP_VERSION = '1.0.0';

export const __dev__ = __DEV__;
// export const __dev__ = false;

export const API_URL = __dev__
  ? 'http://192.168.1.102:4000/api'
  : 'https://red.karimwael.com/api';
