import { __dev__ } from './../config/constants';
export const dateToShortTime = (date: Date) => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

export const dateToTime = (date: Date) => {
  return date.toLocaleTimeString('en-US', {
    hour12: true,
  });
};

export const getReadableDate = (date: Date) => {
  const month = date
    .toLocaleDateString('default', {
      month: 'long',
    })
    .slice(0, 3);
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
  return `${hours ? hours + 'h, ' : ''}${minutes ? minutes + 'm' : ''}`;
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
