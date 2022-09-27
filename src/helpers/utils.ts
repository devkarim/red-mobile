import { __dev__ } from './../config/constants';

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Thanks to https://stackoverflow.com/a/8888498/9746922
 */
export const format12h = (date: Date, showSeconds: boolean = false) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  let hoursStr = hours < 10 ? '0' + hours : hours;
  let minutesStr = minutes < 10 ? '0' + minutes : minutes;
  let secondsStr = seconds < 10 ? '0' + seconds : seconds;
  let strTime = `${hoursStr}:${minutesStr}${
    showSeconds ? ':' + secondsStr : ''
  } ${ampm}`;
  return strTime;
};

export const dateToShortTime = (date: Date) => {
  return format12h(date);
};

export const dateToTime = (date: Date) => {
  return format12h(date, true);
};

export const getReadableDate = (date: Date) => {
  const month = monthNames[date.getMonth()].slice(0, 3);
  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};

/**
 * Thanks to https://stackoverflow.com/a/13904120/9746922
 */
export const getRemainingTime = (dateFuture: number, dateNow: number) => {
  let delta = Math.abs(dateFuture - dateNow) / 1000;
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  // const seconds = Math.floor(delta % 60);
  return `${hours ? hours + 'h' : ''}${minutes ? ', ' + minutes + 'm' : ''}`;
};

export const log = (
  msgs: any | any[],
  tag: string = 'DEBUG',
  tagColor: string = '\x1b[32m'
) => {
  if (!__DEV__) return;
  const allMsgs = Array.isArray(msgs) ? msgs : [msgs];
  const msgsStr = allMsgs.map((m) =>
    typeof m == 'string' ? m : JSON.stringify(m)
  );
  console.log(`${tagColor}[${tag}] \x1b[0m${msgsStr.join(' ')}`);
};

export const debug = (...args: any[]) => {
  return log([...args]);
};

export const logError = (...args: any[]) => {
  return log([...args], 'ERROR', '\x1b[31m');
};
