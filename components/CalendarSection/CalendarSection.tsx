import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarSection = () => {
  const [value, onChange] = React.useState(new Date());

  return (
    <>
      <div className={"background-image-calendar"}>
        <div className={"calendar-texte"}>
          <h1>Prenez Rendez-vous</h1>
          <p>Choisissez un créneau de libre ci-dessous</p>
            <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </>
  );
};

export default CalendarSection;
