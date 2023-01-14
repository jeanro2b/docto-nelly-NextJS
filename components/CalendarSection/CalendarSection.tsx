import React, { useDebugValue } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import axios from "../../lib/axios";
import { useRouter } from "next/router";

const CalendarSection = () => {
  const router = useRouter();

  const [dateDay, onChange] = React.useState(new Date());
  const [showDay, setShowDay] = React.useState(false);
  const [dateSelected, setDateSelected] = React.useState(new Date());
  const [slotsAvailable, setSlotsAvailable] = React.useState([]);
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
    backgroundClass = "background-image-calendar-open";
  } else {
    backgroundClass = "background-image-calendar";
  }

  const showCalendarDay = async (value: any) => {
    if (new Date(value).getTime() === new Date(dateSelected).getTime()) {
      setShowDay((prevState) => !prevState);
    } else {
      setShowDay(true);
    }
    setDateSelected(value);
    // const date =
    //   value.getUTCFullYear() +
    //   "-" +
    //   ("00" + (value.getUTCMonth() + 1)).slice(-2) +
    //   "-" +
    //   ("00" + value.getUTCDate()).slice(-2) +
    //   " " +
    //   ("00" + value.getUTCHours()).slice(-2) +
    //   ":" +
    //   ("00" + value.getUTCMinutes()).slice(-2) +
    //   ":" +
    //   ("00" + value.getUTCSeconds()).slice(-2);

    const daySelected = value.getDay();
    const daySelectedSQLFormat = format(value, "yyyy-MM-dd");

    const slots = (await axios.get(`api/calendar/slots/${daySelected}`))
      .data[0];
    
    if(!slots) {
      setSlotsAvailable([])
      return 
    }

    const reservations = (
      await axios.get(`/api/calendar/${daySelectedSQLFormat}`)
    ).data;

    let slotsArray = Object.values(slots);
    slotsArray = slotsArray.map((slot) => slot.split(":")[0]);

    const slotsArrayFiltered = slotsArray.filter((slot) => slot != "00");

    const slotsArrayDouble = [];

    for (let i = 0; i < slotsArrayFiltered.length; i++){
      if (i%2==1) {
        slotsArrayDouble.push([slotsArrayFiltered[i-1].toString(), slotsArrayFiltered[i]].toString());
      }
    }

    const reservationArrayDouble = reservations.map(reservation => {
      let object = Object.values(reservation);
      return object.map((date) => date.split(' ')[1].split(':')[0]).toString();
    })
    console.log(reservationArrayDouble);


    for (let reservation of reservationArrayDouble) {
      if (slotsArrayDouble.includes(reservation)) {
        slotsArrayDouble.splice(slotsArrayDouble.indexOf(reservation), 1);
      }
    }

    setSlotsAvailable(slotsArrayDouble);
    console.log(slotsArrayDouble);

  };

  const postSlot = (slots) => {
    const day = format(dateSelected, 'yyyy-MM-dd')
    const start = `${format(dateSelected, 'yyyy-MM-dd')} ${slots[0]}:00:00`
    const end = `${format(dateSelected, 'yyyy-MM-dd')} ${slots[1]}:00:00`
    const slot_id = dateSelected.getDay();

    const request = {
      start: start,
      end: end,
      day: day,
      slot_id: slot_id,
    }

    axios.post('/api/reservation', request)
    .then(res => {
      if (res.data.id) {
        router.push('/slot-success')
      }
    });
  }

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
              {slotsAvailable.map(slot => {
                const slots = slot.split(',');
                return <button onClick={() => postSlot(slots)}>{`${slots[0]}H - ${slots[1]}H`}</button>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarSection;
