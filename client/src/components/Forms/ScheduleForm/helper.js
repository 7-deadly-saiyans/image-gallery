import { MONTHS, DAYS } from '../../../../../db/constants';

const getDateInfo = (date) => ({
  day: DAYS[date.getDay()],
  date: date.getDate(),
  month: MONTHS[date.getMonth()],
});

const getNext7Days = () => {
  const nextWeek = [];
  const offset = 1000 * 60 * 60 * 24;
  const today = (new Date()).getTime();
  for (let i = 0; i < 7; i += 1) {
    nextWeek.push(getDateInfo(new Date(today + i * offset)));
  }
  return nextWeek;
};

export default getNext7Days;
