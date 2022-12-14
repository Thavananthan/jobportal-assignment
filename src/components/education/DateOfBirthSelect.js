import { useMediaQuery } from "react-responsive";
import React from "react";

export default function DateOfBirthSelect({
  bDay,
  name,
  bMonth,
  bYear,
  days,
  months,
  yea,
  mon,
  years,
  handleRegisterChange,
  dateError,
}) {
  const view1 = useMediaQuery({
    query: "(min-width: 539px)",
  });
  const view2 = useMediaQuery({
    query: "(min-width: 850px)",
  });
  const view3 = useMediaQuery({
    query: "(min-width: 1170px)",
  });
  return (
    <div
      className="reg_grid"
      style={{
        marginBottom: `${dateError && !view3 ? "80px" : "0"}`,
      }}
    >
      {/* <select name="bDay" value={bDay} onChange={handleRegisterChange}>
        {days.map((day, i) => (
          <option value={day} key={i}>
            {day}
          </option>
        ))}
      </select> */}
      {mon && (
        <select
          name={name}
          value={bMonth}
          onChange={handleRegisterChange}
          style={{ width: 200 }}
        >
          {months.map((month, i) => (
            <option value={month} key={i}>
              {month}
            </option>
          ))}
        </select>
      )}
      {yea && (
        <select
          name={name}
          value={bYear}
          onChange={handleRegisterChange}
          style={{ width: 200 }}
        >
          {years.map((year, i) => (
            <option value={year} key={i}>
              {year}
            </option>
          ))}
        </select>
      )}
      {dateError && (
        <div
          className={
            !view3 ? "input_error" : "input_error input_error_select_large"
          }
        >
          <div
            className={!view3 ? "error_arrow_bottom" : "error_arrow_left"}
          ></div>
          {dateError}
        </div>
      )}
    </div>
  );
}
