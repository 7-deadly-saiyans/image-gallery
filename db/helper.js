const { DAYS } = require('./constants.js');

const splitDateInfo = (date) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return {
    day: DAYS[date.getDay()],
    hour: (hour % 12) || 12,
    minutes: minutes ? `:${minutes}` : '',
    period: hour > 11 ? 'PM' : 'AM',
  };
};

const formatOpenTime = (startDate, endDate) => {
  if (!startDate || !endDate) return '';
  const { day, hour, minutes } = splitDateInfo(startDate);
  const openHours = `${day},${hour}${minutes}`;
  const { hour: hourEnd, minutes: minutesEnd, period } = splitDateInfo(endDate);
  return `${openHours}-${hourEnd}${minutesEnd}${period}`;
};

const images = [
  'IS3jfj0ak22xem0000000000.jpg',
  'ISjr41rpfv5abo0000000000.jpg',
  'ISbxffzz9ewajc1000000000.jpg',
  'ISb957jpzvdv5l1000000000.jpg',
  'IS7euugyjekp6n0000000000.jpg',
  'ISjvnu1mztu9e30000000000.jpg',
  'ISrtvtfm369njd1000000000.jpg',
  'IS7218mopkhizq0000000000.jpg',
  'ISqdbzxee17ptk1000000000.jpg',
  'ISjjqo96yzhnit1000000000.jpg',
  'ISnmre2qdbxpzs1000000000.jpg',
  'IS3r51e3jbdaaw0000000000.jpg',
  'ISjvbla1apr6o50000000000.jpg',
  'IS76gibg7367ae0000000000.jpg',
  'ISvkr3zv3tkr421000000000.jpg',
  'ISfkkph2d4cdoj0000000000.jpg',
  'IS7eid3rzku28n1000000000.jpg',
  'ISjfz4xwnvucc60000000000.jpg',
  'ISbtsugknheaim1000000000.jpg',
  'ISni0rai7m2sd70000000000.jpg',
  'ISbxbsamrh0kr21000000000.jpg',
]

module.exports = { formatOpenTime, images } ;
