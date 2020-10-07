import React from "react";

const LocalDate = ({ weather }) => {
  const today = new Date();
  const localOffset = weather.timezone + today.getTimezoneOffset() * 60;
  const localDate = new Date(today.setUTCSeconds(localOffset));

  const optionsDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const optionsTime = { hour: "numeric", minute: "numeric" };

  const date = localDate.toLocaleDateString(undefined, optionsDate);
  const time = localDate.toLocaleTimeString(undefined, optionsTime);

  return (
    <div className="date-box">
      <p className="date">{date}</p>
      <p className="time">{time}</p>
    </div>
  );
};

export default LocalDate;
