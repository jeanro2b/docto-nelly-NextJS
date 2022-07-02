import React, { useDebugValue } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarSection = () => {
  const [dateDay, onChange] = React.useState(new Date());
  const [showDay, setShowDay] = React.useState(false);
  const [dateSelected, setDateSelected] = React.useState(new Date());
  const mois = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  let dayClass = "day-container";
  let backgroundClass = "background-image-calendar";

  if (showDay) {
    backgroundClass = "background-image-calendar-open"
  } else {
    backgroundClass = "background-image-calendar"
  }

  const showCalendarDay = (value: any) => {
    if (new Date(value).getTime() === new Date(dateSelected).getTime()) {
      setShowDay((prevState) => !prevState);
    } else {
      setShowDay(true);
    }
    setDateSelected(value);
  };

  if (showDay) {
    dayClass = "day-container-show";
  } else {
    dayClass = "day-container";
  }

  return (
    <>
      <div className={backgroundClass}>
        <div className={"calendar-texte"}>
          <h1>Prenez Rendez-vous</h1>
          <p>Choisissez un créneau de libre ci-dessous</p>
          <Calendar
            onChange={onChange}
            value={dateDay}
            onClickDay={(value) => {
              showCalendarDay(value);
            }}
          />
          <div className={dayClass}>
            <div className={"day-section"}>
              <h2>
                Créneaux disponibles le {dateSelected.getDate()}/
                {mois[dateSelected.getMonth()]} :
              </h2>
              <button>14h - 15h</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarSection;
