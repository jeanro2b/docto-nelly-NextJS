import React, { useDebugValue } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format, isAfter, isBefore, isWeekend } from "date-fns";
import axios from "../../lib/axios";
import { useRouter } from "next/router";
import { regroupAndDeleteSlots, regroupReservations, deleteReservationsOfSlots } from '../../lib/shared_functions'

const CalendarSection = () => {
  const router = useRouter();

  const [dateDay, onChange] = React.useState(new Date());
  const [showDay, setShowDay] = React.useState(false);
  const [dateSelected, setDateSelected] = React.useState(new Date());
  const [slotsAvailable, setSlotsAvailable] = React.useState([]);
  const [isHoliday, setIsHoliday] = React.useState(false);
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


    if (isWeekend(value) === true) {
      setIsHoliday(true);
    } else {
      setIsHoliday(false);
    }

    // On regarde grâce à la méthode isWeekend de la libraire fns si le jour selectionné fait partie d'un weekend

    const holidays = (await axios.get("/api/conges")).data;
    for (const holiday of holidays) {
      console.log(holiday);
      const start = new Date(
        holiday.start.split(" ")[0].split("-")[0],
        holiday.start.split(" ")[0].split("-")[1] - 1,
        holiday.start.split(" ")[0].split("-")[2]
      );
      const end = new Date(
        holiday.end.split(" ")[0].split("-")[0],
        holiday.end.split(" ")[0].split("-")[1] - 1,
        holiday.end.split(" ")[0].split("-")[2]
      );

      console.log(start);
      console.log(end);

      if (isAfter(value, start) && isBefore(value, end)) {
        setIsHoliday(true);
      }

      // Utilisation de la librairie date-fns : 2 méthodes, isAfter et isBefore.
      // On fait une boucle for sur toutes les vacances get, puis on regarde pour chacune d'entre elles si la date sélectionnée est après le début d'un congé, et avant la fin de celui-ci. Si oui, isHoliday passe a true.
    }

    const daySelected = value.getDay();
    const daySelectedSQLFormat = format(value, "yyyy-MM-dd");
    // On formate les date grâce à la libraire fns au format SQL

    const slots = (await axios.get(`api/calendar/slots/${daySelected}`))
      .data[0];

    // On récupère les créneaux d'ouverture de la journée 

    if (!slots) {
      setSlotsAvailable([]);
      return;
    }

    const reservations = (
      await axios.get(`/api/calendar/${daySelectedSQLFormat}`)
    ).data;

    // on récupère les réservations de la journée

    const slotsArrayDouble = regroupAndDeleteSlots(slots);
    const reservationArrayDouble = regroupReservations(reservations);
    deleteReservationsOfSlots(reservationArrayDouble, slotsArrayDouble);
    setSlotsAvailable(slotsArrayDouble);

    // On travaille la donnée pour supprimer les reservations existantes du jour des créneaux disponibles
  };

  const postSlot = (slots) => {
    const day = format(dateSelected, "yyyy-MM-dd");
    const start = `${format(dateSelected, "yyyy-MM-dd")} ${slots[0]}:00:00`;
    const end = `${format(dateSelected, "yyyy-MM-dd")} ${slots[1]}:00:00`;
    const slot_id = dateSelected.getDay();

    const request = {
      start: start,
      end: end,
      day: day,
      slot_id: slot_id,
    };

    //axios permet de dialoguer avec le back et simplifier les appels ajax et ajouter des fonctionnalités

    axios
      .post("/api/reservation", request)
      .then((res) => {
        if (res.data.id) {
          router.push("/slot-success");
        }
      })
      .catch((error) => {
        if (error) {
          router.push("/login");
        }
      });
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
              {!isHoliday &&
                slotsAvailable.map((slot) => {
                  const slots = slot.split(",");
                  return (
                    <button
                      onClick={() => postSlot(slots)}
                    >{`${slots[0]}h - ${slots[1]}h`}</button>
                  );
                })}
              {isHoliday && <p>Jour non travaillé</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarSection;
