export const ALL_READY = 0;
export const ALL_LOADING = 1;
export const ALL_COMPLETE = 2;

export const sendId = () => {
  const timeStamp = new Date().valueOf();
  const randId = (function (minNum, maxNum) {
    let random = 0;
    switch (arguments.length) {
      case 1:
        random = parseInt(`${Math.random() * minNum + 1}`, 10);
        break;
      case 2:
        random = parseInt(`${Math.random() * (maxNum - minNum + 1) + minNum}`, 10);
        break;
      default:
        break;
    }
    return random;
  })(100000, 999999);
  return `${timeStamp}-${randId}`;
};
export const getDate = (type, separator = '-', timeStr = new Date()) => {
  const date = new Date(timeStr);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`;
  const day = `${date.getDate()}`;
  const hour = `${date.getHours()}`;
  const minute = `${date.getMinutes()}`;
  const second = `${date.getSeconds()}`;
  if (type == 'year') {
    return year + separator + month.padStart(2, '0') + separator + day.padStart(2, '0');
  } else if (type == 'time') {
    return `${
      year + separator + month.padStart(2, '0') + separator + day.padStart(2, '0')
    } ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${second.padStart(2, '0')}`;
  } else if (type == 'timestamp') {
    return new Date().getTime();
  } else {
    return '';
  }
};
