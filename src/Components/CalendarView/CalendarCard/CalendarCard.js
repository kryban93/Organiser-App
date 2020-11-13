import React, { useState, useEffect } from 'react';
import style from './CalendarCard.module.scss';
import {
  getFirstDayOfMonth,
  getMonths,
  getCurrentMonth,
  getCurrentYear,
  getDay,
  getYearRange,
  getWeekdaysShort,
  getMonthLength,
} from '../../../momentOperations';

const CalendarCard = ({ currentlySelectedDay, handleCalendarCardItemOnClick }) => {
  const [calendarTable, setCalendarTable] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const [selectedYear, setSelectedYear] = useState(getCurrentYear());
  const [isMonthsOpen, setMonthsOpenState] = useState(false);
  const [yearsRangeArray, setYearsRangeArray] = useState(getYearRange(selectedYear));
  const [isYearsOpen, setYearsOpenState] = useState(false);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(
    getMonths().indexOf(selectedMonth) + 1
  );

  const weekdaysShort = getWeekdaysShort();

  useEffect(() => {
    const prepareDataToDisplay = () => {
      let tempCalendarArray = [],
        tableCells = [],
        tableRows = [];

      console.log(getFirstDayOfMonth(selectedYear, selectedMonthIndex));
      for (let i = 0; i < getFirstDayOfMonth(selectedYear, selectedMonthIndex); i++) {
        tempCalendarArray.push(' ');
      }

      for (let day = 1; day <= getMonthLength(selectedMonth); day++) {
        tempCalendarArray.push(day);
      }

      tempCalendarArray.forEach((day, i) => {
        if (i % 7 !== 0) {
          tableCells.push(day);
        } else {
          tableRows.push(tableCells);
          tableCells = [];
          tableCells.push(day);
        }
        if (i === tempCalendarArray.length - 1) {
          tableRows.push(tableCells);
        }
      });

      setCalendarTable([...tableRows]);
    };
    prepareDataToDisplay();
  }, [selectedMonth, selectedYear, selectedMonthIndex]);

  const handleClickOnYear = (year) => {
    setSelectedYear(year);
    setYearsRangeArray(getYearRange(year));
  };

  const handleClickOnMonth = (month) => {
    setSelectedMonth(month);
    setSelectedMonthIndex(getMonths().indexOf(month) + 1);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.header__title}>
          <p onClick={() => setMonthsOpenState(!isMonthsOpen)}>{selectedMonth}</p>
          <p onClick={() => setYearsOpenState(!isYearsOpen)}>{selectedYear}</p>
        </div>
        {isYearsOpen && (
          <div className={style.header__years}>
            {yearsRangeArray.map((year) => (
              <p key={year} onClick={() => handleClickOnYear(year)}>
                {year}
              </p>
            ))}
          </div>
        )}
        {isMonthsOpen && (
          <div className={style.header__months}>
            {getMonths().map((month) => (
              <p key={month} onClick={() => handleClickOnMonth(month)}>
                {month}
              </p>
            ))}
          </div>
        )}
      </div>
      <table className={style.table}>
        <thead className={style.table__head}>
          <tr>
            {weekdaysShort.map((day) => (
              <th key={day} className={`${style.table__item} ${style['table__item--head']}`}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={style.table__body}>
          {calendarTable.map((row, i) => (
            <tr key={`row${i}`}>
              {row.map((day, i) =>
                getDay(currentlySelectedDay) === day ? (
                  <td
                    data-id={`${selectedYear}${
                      selectedMonthIndex < 10 ? `0${selectedMonthIndex}` : selectedMonthIndex
                    }${day < 10 ? `0${day}` : day}`}
                    key={`${day}_${i}`}
                    className={`${style.table__item} ${style['table__item--body']} ${style['table__item--active']}`}
                    onClick={handleCalendarCardItemOnClick}
                  >
                    {day}
                  </td>
                ) : (
                  <td
                    data-id={`${selectedYear}${
                      selectedMonthIndex < 10 ? `0${selectedMonthIndex}` : selectedMonthIndex
                    }${day < 10 ? `0${day}` : day}`}
                    key={`${day}_${i}`}
                    className={`${style.table__item} ${style['table__item--body']}`}
                    onClick={handleCalendarCardItemOnClick}
                  >
                    {day}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarCard;
