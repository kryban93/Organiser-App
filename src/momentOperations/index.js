import moment from 'moment';

export const getToday = () => moment().format('YYYYMMDD');

export const getFirstDayOfMonth = (year, month) =>
  moment(`${year}${month}`, 'YYYYMM').startOf('month').format('d');

export const getMonths = () => moment.months();

export const getCurrentMonth = () => moment().format('MMMM');

export const getCurrentYear = () => moment().format('YYYY');

export const getDay = (date) => moment(date, 'YYYYMMDD').date();

export const getYearRange = (year) => {
  const tempArray = [];
  for (let i = 0; i < 12; i++) {
    tempArray.push(year - 4 + i);
  }
  return tempArray;
};

export const getWeekdaysShort = () => moment.weekdaysShort();

export const getMonthLength = (selectedMonth) => moment().month(selectedMonth).daysInMonth();
