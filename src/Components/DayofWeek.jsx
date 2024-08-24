import React from "react";

const DayOfWeek = ({ date }) => {
  const dateObj = new Date(date);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayIndex = dateObj.getDay();

  const dayName = daysOfWeek[dayIndex];

  return (
    <div>
      <p>
        The day of the week for {date} is {dayName}.
      </p>
    </div>
  );
};

export default DayOfWeek;