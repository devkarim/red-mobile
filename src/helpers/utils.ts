export const dateToTime = (date: Date) => {
  return date.toLocaleTimeString('en-US', { hour12: true });
};

export const getReadableDate = (date: Date) => {
  const month = date.toLocaleDateString('default', {
    month: 'short',
  });
  return `${month} ${date.getDay()}, ${date.getFullYear()}`;
};
