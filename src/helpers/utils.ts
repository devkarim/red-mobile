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
  const month = date.toLocaleDateString('default', {
    month: 'short',
  });
  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
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
