import Header from "../components/Header/Header";
import axios from "../lib/axios";
import React from "react";
import Router, { useRouter } from "next/router";
import Footer from "../components/Footer/Footer";
import { useAuth } from "../hooks/auth";
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useAuth({ middleware: "admin" });
  const userId = user?.id;
  if (user?.role === "user") {
    router.push("/");
  }

  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  const [firstStartMorningMo, setFirstStartMorningMo] = React.useState("");
  const [firstEndMorningMo, setFirstEndMorningMo] = React.useState("");
  const [secondStartMorningMo, setSecondStartMorningMo] = React.useState("");
  const [secondEndMorningMo, setSecondEndMorningMo] = React.useState("");
  const [thirdStartMorningMo, setThirdStartMorningMo] = React.useState("");
  const [thirdEndMorningMo, setThirdEndMorningMo] = React.useState("");
  const [firstStartEveningMo, setFirstStartEveningMo] = React.useState("");
  const [firstEndEveningMo, setFirstEndEveningMo] = React.useState("");
  const [secondStartEveningMo, setSecondStartEveningMo] = React.useState("");
  const [secondEndEveningMo, setSecondEndEveningMo] = React.useState("");
  const [thirdStartEveningMo, setThirdStartEveningMo] = React.useState("");
  const [thirdEndEveningMo, setThirdEndEveningMo] = React.useState("");

  const [firstStartMorningTu, setFirstStartMorningTu] = React.useState("");
  const [firstEndMorningTu, setFirstEndMorningTu] = React.useState("");
  const [secondStartMorningTu, setSecondStartMorningTu] = React.useState("");
  const [secondEndMorningTu, setSecondEndMorningTu] = React.useState("");
  const [thirdStartMorningTu, setThirdStartMorningTu] = React.useState("");
  const [thirdEndMorningTu, setThirdEndMorningTu] = React.useState("");
  const [firstStartEveningTu, setFirstStartEveningTu] = React.useState("");
  const [firstEndEveningTu, setFirstEndEveningTu] = React.useState("");
  const [secondStartEveningTu, setSecondStartEveningTu] = React.useState("");
  const [secondEndEveningTu, setSecondEndEveningTu] = React.useState("");
  const [thirdStartEveningTu, setThirdStartEveningTu] = React.useState("");
  const [thirdEndEveningTu, setThirdEndEveningTu] = React.useState("");

  const [firstStartMorningWe, setFirstStartMorningWe] = React.useState("");
  const [firstEndMorningWe, setFirstEndMorningWe] = React.useState("");
  const [secondStartMorningWe, setSecondStartMorningWe] = React.useState("");
  const [secondEndMorningWe, setSecondEndMorningWe] = React.useState("");
  const [thirdStartMorningWe, setThirdStartMorningWe] = React.useState("");
  const [thirdEndMorningWe, setThirdEndMorningWe] = React.useState("");
  const [firstStartEveningWe, setFirstStartEveningWe] = React.useState("");
  const [firstEndEveningWe, setFirstEndEveningWe] = React.useState("");
  const [secondStartEveningWe, setSecondStartEveningWe] = React.useState("");
  const [secondEndEveningWe, setSecondEndEveningWe] = React.useState("");
  const [thirdStartEveningWe, setThirdStartEveningWe] = React.useState("");
  const [thirdEndEveningWe, setThirdEndEveningWe] = React.useState("");

  const [firstStartMorningTh, setFirstStartMorningTh] = React.useState("");
  const [firstEndMorningTh, setFirstEndMorningTh] = React.useState("");
  const [secondStartMorningTh, setSecondStartMorningTh] = React.useState("");
  const [secondEndMorningTh, setSecondEndMorningTh] = React.useState("");
  const [thirdStartMorningTh, setThirdStartMorningTh] = React.useState("");
  const [thirdEndMorningTh, setThirdEndMorningTh] = React.useState("");
  const [firstStartEveningTh, setFirstStartEveningTh] = React.useState("");
  const [firstEndEveningTh, setFirstEndEveningTh] = React.useState("");
  const [secondStartEveningTh, setSecondStartEveningTh] = React.useState("");
  const [secondEndEveningTh, setSecondEndEveningTh] = React.useState("");
  const [thirdStartEveningTh, setThirdStartEveningTh] = React.useState("");
  const [thirdEndEveningTh, setThirdEndEveningTh] = React.useState("");

  const [firstStartMorningFr, setFirstStartMorningFr] = React.useState("");
  const [firstEndMorningFr, setFirstEndMorningFr] = React.useState("");
  const [secondStartMorningFr, setSecondStartMorningFr] = React.useState("");
  const [secondEndMorningFr, setSecondEndMorningFr] = React.useState("");
  const [thirdStartMorningFr, setThirdStartMorningFr] = React.useState("");
  const [thirdEndMorningFr, setThirdEndMorningFr] = React.useState("");
  const [firstStartEveningFr, setFirstStartEveningFr] = React.useState("");
  const [firstEndEveningFr, setFirstEndEveningFr] = React.useState("");
  const [secondStartEveningFr, setSecondStartEveningFr] = React.useState("");
  const [secondEndEveningFr, setSecondEndEveningFr] = React.useState("");
  const [thirdStartEveningFr, setThirdStartEveningFr] = React.useState("");
  const [thirdEndEveningFr, setThirdEndEveningFr] = React.useState("");

  const submitHoliday = (event) => {
    event.preventDefault();
    const data = {
      start: start,
      end: end,
    };

    axios
      .post("/api/define-holidays", data)
      .then((res) => {
        window.alert("Congés postés !");
      })
      .catch((err) => {
        if (err) {
          router.push("/dashboard");
        }
      });
  };

  const submitMoonday = (e) => {
    e.preventDefault();
    const data = {
      id: 1,
      firstStartMorning: firstStartMorningMo,
      firstEndMorning: firstEndMorningMo,
      secondStartMorning: secondStartMorningMo,
      secondEndMorning: secondEndMorningMo,
      thirdStartMorning: thirdStartMorningMo,
      thirdEndMorning: thirdEndMorningMo,
      firstStartEvening: firstStartEveningMo,
      firstEndEvening: firstEndEveningMo,
      secondStartEvening: secondStartEveningMo,
      secondEndEvening: secondEndEveningMo,
      thirdStartEvening: thirdStartEveningMo,
      thirdEndEvening: thirdEndEveningMo,
    };

    axios
      .post("/api/define-slots", data)
      .then((res) => {
        window.alert("Horaires postés !");
      })
      .catch((err) => {
        if (err) {
          router.push("/dashboard");
        }
      });
  };

  const submitTuesday = (e) => {
    e.preventDefault();
    const data = {
      id: 2,
      firstStartMorning: firstStartMorningTu,
      firstEndMorning: firstEndMorningTu,
      secondStartMorning: secondStartMorningTu,
      secondEndMorning: secondEndMorningTu,
      thirdStartMorning: thirdStartMorningTu,
      thirdEndMorning: thirdEndMorningTu,
      firstStartEvening: firstStartEveningTu,
      firstEndEvening: firstEndEveningTu,
      secondStartEvening: secondStartEveningTu,
      secondEndEvening: secondEndEveningTu,
      thirdStartEvening: thirdStartEveningTu,
      thirdEndEvening: thirdEndEveningTu,
    };

    axios
      .post("/api/define-slots", data)
      .then((res) => {
        window.alert("Horaires postés !");
      })
      .catch((err) => {
        if (err) {
          router.push("/dashboard");
        }
      });
  };

  const submitWednesday = (e) => {
    e.preventDefault();
    const data = {
      id: 3,
      firstStartMorning: firstStartMorningWe,
      firstEndMorning: firstEndMorningWe,
      secondStartMorning: secondStartMorningWe,
      secondEndMorning: secondEndMorningWe,
      thirdStartMorning: thirdStartMorningWe,
      thirdEndMorning: thirdEndMorningWe,
      firstStartEvening: firstStartEveningWe,
      firstEndEvening: firstEndEveningWe,
      secondStartEvening: secondStartEveningWe,
      secondEndEvening: secondEndEveningWe,
      thirdStartEvening: thirdStartEveningWe,
      thirdEndEvening: thirdEndEveningWe,
    };

    axios
      .post("/api/define-slots", data)
      .then((res) => {
        window.alert("Horaires postés !");
      })
      .catch((err) => {
        if (err) {
          router.push("/dashboard");
        }
      });
  };

  const submitThursday = (e) => {
    e.preventDefault();
    const data = {
      id: 4,
      firstStartMorning: firstStartMorningTh,
      firstEndMorning: firstEndMorningTh,
      secondStartMorning: secondStartMorningTh,
      secondEndMorning: secondEndMorningTh,
      thirdStartMorning: thirdStartMorningTh,
      thirdEndMorning: thirdEndMorningTh,
      firstStartEvening: firstStartEveningTh,
      firstEndEvening: firstEndEveningTh,
      secondStartEvening: secondStartEveningTh,
      secondEndEvening: secondEndEveningTh,
      thirdStartEvening: thirdStartEveningTh,
      thirdEndEvening: thirdEndEveningTh,
    };

    axios
      .post("/api/define-slots", data)
      .then((res) => {
        window.alert("Horaires postés !");
      })
      .catch((err) => {
        if (err) {
          router.push("/dashboard");
        }
      });
  };

  const submitFriday = (e) => {
    e.preventDefault();
    const data = {
      id: 5,
      firstStartMorning: firstStartMorningFr,
      firstEndMorning: firstEndMorningFr,
      secondStartMorning: secondStartMorningFr,
      secondEndMorning: secondEndMorningFr,
      thirdStartMorning: thirdStartMorningFr,
      thirdEndMorning: thirdEndMorningFr,
      firstStartEvening: firstStartEveningFr,
      firstEndEvening: firstEndEveningFr,
      secondStartEvening: secondStartEveningFr,
      secondEndEvening: secondEndEveningFr,
      thirdStartEvening: thirdStartEveningFr,
      thirdEndEvening: thirdEndEveningFr,
    };

    axios
      .post("/api/define-slots", data)
      .then((res) => {
        window.alert("Horaires postés !");
      })
      .catch((err) => {
        if (err) {
          router.push("/dashboard");
        }
      });
  };

  return (
    <div className={"dashboard"}>
      <Header />

      <div className="py-[10rem]">
        <div className="max-w-7xl mx-auto sm:px-3 lg:px-1">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200 text-cyan-700">
              <Link href="/dashboard-reservations">
                RÉSERVATIONS DES PATIENTS : CLIQUER ICI
              </Link>
            </div>
            <div className="p-6 bg-white border-b border-gray-100 inline-block">
              Postez vos congés :
            </div>
            <form
              onSubmit={submitHoliday}
              className="p-4 bg-white border-b border-gray-100 inline-block"
            >
              <label className="mr-3" for="start">
                Date de début
              </label>
              <input
                className="mr-3"
                type="date"
                id="start"
                name="holiday-start"
                min="2023-01-01"
                max="2025-01-01"
                onChange={(event) => setStart(event.target.value)}
                value={start}
              ></input>
              <label className="mr-3" for="end">
                Date de fin
              </label>
              <input
                className="mr-3"
                type="date"
                id="end"
                name="holiday-end"
                min="2023-01-01"
                max="2025-01-01"
                onChange={(event) => setEnd(event.target.value)}
                value={end}
              ></input>
              <button
                type="submit"
                className={`inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-7`}
              >
                Poster
              </button>
            </form>
          </div>
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-100 inline-block">
              Horaires Lundi (1ère ligne matin, 2ème ligne après-midi) :
            </div>
            <form
              onSubmit={submitMoonday}
              className="p-4 bg-white border-b border-gray-100 inline-block"
            >
              <select
                className="m-3"
                name="firstStartMorning"
                id="firstStartMorning"
                onChange={(event) => setFirstStartMorningMo(event.target.value)}
                value={firstStartMorningMo}
              >
                <option value="">Début 1e horaire</option>
                <option value="8:00:00">8h</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstEndMorning"
                id="firstEndMorning"
                onChange={(event) => setFirstEndMorningMo(event.target.value)}
                value={firstEndMorningMo}
              >
                <option value="">Fin 1er horaire</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondStartMorning"
                id="secondStartMorning"
                onChange={(event) =>
                  setSecondStartMorningMo(event.target.value)
                }
                value={secondStartMorningMo}
              >
                <option value="">Début 2è horaire</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondEndMorning"
                id="secondEndMorning"
                onChange={(event) => setSecondEndMorningMo(event.target.value)}
                value={secondEndMorningMo}
              >
                <option value="">Fin 2è horaire</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdStartMorning"
                id="thirdStartMorning"
                onChange={(event) => setThirdStartMorningMo(event.target.value)}
                value={thirdStartMorningMo}
              >
                <option value="">Début 3è horaire</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdEndMorning"
                id="thirdEndMorning"
                onChange={(event) => setThirdEndMorningMo(event.target.value)}
                value={thirdEndMorningMo}
              >
                <option value="">Fin 3è horaire</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstStartEvening"
                id="firstStartEvening"
                onChange={(event) => setFirstStartEveningMo(event.target.value)}
                value={firstStartEveningMo}
              >
                <option value="">Début 1e horaire</option>
                <option value="14:00:00">14h</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstEndEvening"
                id="firstEndEvening"
                onChange={(event) => setFirstEndEveningMo(event.target.value)}
                value={firstEndEveningMo}
              >
                <option value="">Fin 1er horaire</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondStartEvening"
                id="secondStartEvening"
                onChange={(event) =>
                  setSecondStartEveningMo(event.target.value)
                }
                value={secondStartEveningMo}
              >
                <option value="">Début 2è horaire</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondEndEvening"
                id="secondEndEvening"
                onChange={(event) => setSecondEndEveningMo(event.target.value)}
                value={secondEndEveningMo}
              >
                <option value="">Fin 2è horaire</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdStartEvening"
                id="thirdStartEvening"
                onChange={(event) => setThirdStartEveningMo(event.target.value)}
                value={thirdStartEveningMo}
              >
                <option value="">Début 3è horaire</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdEndEvening"
                id="thirdEndEvening"
                onChange={(event) => setThirdEndEveningMo(event.target.value)}
                value={thirdEndEveningMo}
              >
                <option value="">Fin 3è horaire</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>

              <button
                type="submit"
                className={`inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-7`}
              >
                Poster
              </button>
            </form>
          </div>
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-100 inline-block">
              Horaires Mardi (1ère ligne matin, 2ème ligne après-midi) :
            </div>
            <form
              onSubmit={submitTuesday}
              className="p-4 bg-white border-b border-gray-100 inline-block"
            >
              <select
                className="m-3"
                name="firstStartMorning"
                id="firstStartMorning"
                onChange={(event) => setFirstStartMorningTu(event.target.value)}
                value={firstStartMorningTu}
              >
                <option value="">Début 1e horaire</option>
                <option value="8:00:00">8h</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstEndMorning"
                id="firstEndMorning"
                onChange={(event) => setFirstEndMorningTu(event.target.value)}
                value={firstEndMorningTu}
              >
                <option value="">Fin 1er horaire</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondStartMorning"
                id="secondStartMorning"
                onChange={(event) =>
                  setSecondStartMorningTu(event.target.value)
                }
                value={secondStartMorningTu}
              >
                <option value="">Début 2è horaire</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondEndMorning"
                id="secondEndMorning"
                onChange={(event) => setSecondEndMorningTu(event.target.value)}
                value={secondEndMorningTu}
              >
                <option value="">Fin 2è horaire</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdStartMorning"
                id="thirdStartMorning"
                onChange={(event) => setThirdStartMorningTu(event.target.value)}
                value={thirdStartMorningTu}
              >
                <option value="">Début 3è horaire</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdEndMorning"
                id="thirdEndMorning"
                onChange={(event) => setThirdEndMorningTu(event.target.value)}
                value={thirdEndMorningTu}
              >
                <option value="">Fin 3è horaire</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstStartEvening"
                id="firstStartEvening"
                onChange={(event) => setFirstStartEveningTu(event.target.value)}
                value={firstStartEveningTu}
              >
                <option value="">Début 1e horaire</option>
                <option value="14:00:00">14h</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstEndEvening"
                id="firstEndEvening"
                onChange={(event) => setFirstEndEveningTu(event.target.value)}
                value={firstEndEveningTu}
              >
                <option value="">Fin 1er horaire</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondStartEvening"
                id="secondStartEvening"
                onChange={(event) =>
                  setSecondStartEveningTu(event.target.value)
                }
                value={secondStartEveningTu}
              >
                <option value="">Début 2è horaire</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondEndEvening"
                id="secondEndEvening"
                onChange={(event) => setSecondEndEveningTu(event.target.value)}
                value={secondEndEveningTu}
              >
                <option value="">Fin 2è horaire</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdStartEvening"
                id="thirdStartEvening"
                onChange={(event) => setThirdStartEveningTu(event.target.value)}
                value={thirdStartEveningTu}
              >
                <option value="">Début 3è horaire</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdEndEvening"
                id="thirdEndEvening"
                onChange={(event) => setThirdEndEveningTu(event.target.value)}
                value={thirdEndEveningTu}
              >
                <option value="">Fin 3è horaire</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>

              <button
                type="submit"
                className={`inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-7`}
              >
                Poster
              </button>
            </form>
          </div>
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-100 inline-block">
              Horaires Mercredi (1ère ligne matin, 2ème ligne après-midi) :
            </div>
            <form
              onSubmit={submitWednesday}
              className="p-4 bg-white border-b border-gray-100 inline-block"
            >
              <select
                className="m-3"
                name="firstStartMorning"
                id="firstStartMorning"
                onChange={(event) => setFirstStartMorningWe(event.target.value)}
                value={firstStartMorningWe}
              >
                <option value="">Début 1e horaire</option>
                <option value="8:00:00">8h</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstEndMorning"
                id="firstEndMorning"
                onChange={(event) => setFirstEndMorningWe(event.target.value)}
                value={firstEndMorningWe}
              >
                <option value="">Fin 1er horaire</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondStartMorning"
                id="secondStartMorning"
                onChange={(event) =>
                  setSecondStartMorningWe(event.target.value)
                }
                value={secondStartMorningWe}
              >
                <option value="">Début 2è horaire</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondEndMorning"
                id="secondEndMorning"
                onChange={(event) => setSecondEndMorningWe(event.target.value)}
                value={secondEndMorningWe}
              >
                <option value="">Fin 2è horaire</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdStartMorning"
                id="thirdStartMorning"
                onChange={(event) => setThirdStartMorningWe(event.target.value)}
                value={thirdStartMorningWe}
              >
                <option value="">Début 3è horaire</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdEndMorning"
                id="thirdEndMorning"
                onChange={(event) => setThirdEndMorningWe(event.target.value)}
                value={thirdEndMorningWe}
              >
                <option value="">Fin 3è horaire</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstStartEvening"
                id="firstStartEvening"
                onChange={(event) => setFirstStartEveningWe(event.target.value)}
                value={firstStartEveningWe}
              >
                <option value="">Début 1e horaire</option>
                <option value="14:00:00">14h</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstEndEvening"
                id="firstEndEvening"
                onChange={(event) => setFirstEndEveningWe(event.target.value)}
                value={firstEndEveningWe}
              >
                <option value="">Fin 1er horaire</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondStartEvening"
                id="secondStartEvening"
                onChange={(event) =>
                  setSecondStartEveningWe(event.target.value)
                }
                value={secondStartEveningWe}
              >
                <option value="">Début 2è horaire</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondEndEvening"
                id="secondEndEvening"
                onChange={(event) => setSecondEndEveningWe(event.target.value)}
                value={secondEndEveningWe}
              >
                <option value="">Fin 2è horaire</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdStartEvening"
                id="thirdStartEvening"
                onChange={(event) => setThirdStartEveningWe(event.target.value)}
                value={thirdStartEveningWe}
              >
                <option value="">Début 3è horaire</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdEndEvening"
                id="thirdEndEvening"
                onChange={(event) => setThirdEndEveningWe(event.target.value)}
                value={thirdEndEveningWe}
              >
                <option value="">Fin 3è horaire</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>

              <button
                type="submit"
                className={`inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-7`}
              >
                Poster
              </button>
            </form>
          </div>
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-100 inline-block">
              Horaires Jeudi (1ère ligne matin, 2ème ligne après-midi) :
            </div>
            <form
              onSubmit={submitThursday}
              className="p-4 bg-white border-b border-gray-100 inline-block"
            >
              <select
                className="m-3"
                name="firstStartMorning"
                id="firstStartMorning"
                onChange={(event) => setFirstStartMorningTh(event.target.value)}
                value={firstStartMorningTh}
              >
                <option value="">Début 1e horaire</option>
                <option value="8:00:00">8h</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstEndMorning"
                id="firstEndMorning"
                onChange={(event) => setFirstEndMorningTh(event.target.value)}
                value={firstEndMorningTh}
              >
                <option value="">Fin 1er horaire</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondStartMorning"
                id="secondStartMorning"
                onChange={(event) =>
                  setSecondStartMorningTh(event.target.value)
                }
                value={secondStartMorningTh}
              >
                <option value="">Début 2è horaire</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondEndMorning"
                id="secondEndMorning"
                onChange={(event) => setSecondEndMorningTh(event.target.value)}
                value={secondEndMorningTh}
              >
                <option value="">Fin 2è horaire</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdStartMorning"
                id="thirdStartMorning"
                onChange={(event) => setThirdStartMorningTh(event.target.value)}
                value={thirdStartMorningTh}
              >
                <option value="">Début 3è horaire</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdEndMorning"
                id="thirdEndMorning"
                onChange={(event) => setThirdEndMorningTh(event.target.value)}
                value={thirdEndMorningTh}
              >
                <option value="">Fin 3è horaire</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstStartEvening"
                id="firstStartEvening"
                onChange={(event) => setFirstStartEveningTh(event.target.value)}
                value={firstStartEveningTh}
              >
                <option value="">Début 1e horaire</option>
                <option value="14:00:00">14h</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstEndEvening"
                id="firstEndEvening"
                onChange={(event) => setFirstEndEveningTh(event.target.value)}
                value={firstEndEveningTh}
              >
                <option value="">Fin 1er horaire</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondStartEvening"
                id="secondStartEvening"
                onChange={(event) =>
                  setSecondStartEveningTh(event.target.value)
                }
                value={secondStartEveningTh}
              >
                <option value="">Début 2è horaire</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondEndEvening"
                id="secondEndEvening"
                onChange={(event) => setSecondEndEveningTh(event.target.value)}
                value={secondEndEveningTh}
              >
                <option value="">Fin 2è horaire</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdStartEvening"
                id="thirdStartEvening"
                onChange={(event) => setThirdStartEveningTh(event.target.value)}
                value={thirdStartEveningTh}
              >
                <option value="">Début 3è horaire</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdEndEvening"
                id="thirdEndEvening"
                onChange={(event) => setThirdEndEveningTh(event.target.value)}
                value={thirdEndEveningTh}
              >
                <option value="">Fin 3è horaire</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>

              <button
                type="submit"
                className={`inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-7`}
              >
                Poster
              </button>
            </form>
          </div>
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-100 inline-block">
              Horaires Vendredi (1ère ligne matin, 2ème ligne après-midi) :
            </div>
            <form
              onSubmit={submitFriday}
              className="p-4 bg-white border-b border-gray-100 inline-block"
            >
              <select
                className="m-3"
                name="firstStartMorning"
                id="firstStartMorning"
                onChange={(event) => setFirstStartMorningFr(event.target.value)}
                value={firstStartMorningFr}
              >
                <option value="">Début 1e horaire</option>
                <option value="8:00:00">8h</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstEndMorning"
                id="firstEndMorning"
                onChange={(event) => setFirstEndMorningFr(event.target.value)}
                value={firstEndMorningFr}
              >
                <option value="">Fin 1er horaire</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondStartMorning"
                id="secondStartMorning"
                onChange={(event) =>
                  setSecondStartMorningFr(event.target.value)
                }
                value={secondStartMorningFr}
              >
                <option value="">Début 2è horaire</option>
                <option value="9:00:00">9h</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondEndMorning"
                id="secondEndMorning"
                onChange={(event) => setSecondEndMorningFr(event.target.value)}
                value={secondEndMorningFr}
              >
                <option value="">Fin 2è horaire</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdStartMorning"
                id="thirdStartMorning"
                onChange={(event) => setThirdStartMorningFr(event.target.value)}
                value={thirdStartMorningFr}
              >
                <option value="">Début 3è horaire</option>
                <option value="10:00:00">10h</option>
                <option value="11:00:00">11h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdEndMorning"
                id="thirdEndMorning"
                onChange={(event) => setThirdEndMorningFr(event.target.value)}
                value={thirdEndMorningFr}
              >
                <option value="">Fin 3è horaire</option>
                <option value="11:00:00">11h</option>
                <option value="12:00:00">12h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstStartEvening"
                id="firstStartEvening"
                onChange={(event) => setFirstStartEveningFr(event.target.value)}
                value={firstStartEveningFr}
              >
                <option value="">Début 1e horaire</option>
                <option value="14:00:00">14h</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="firstEndEvening"
                id="firstEndEvening"
                onChange={(event) => setFirstEndEveningFr(event.target.value)}
                value={firstEndEveningFr}
              >
                <option value="">Fin 1er horaire</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondStartEvening"
                id="secondStartEvening"
                onChange={(event) =>
                  setSecondStartEveningFr(event.target.value)
                }
                value={secondStartEveningFr}
              >
                <option value="">Début 2è horaire</option>
                <option value="15:00:00">15h</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="secondEndEvening"
                id="secondEndEvening"
                onChange={(event) => setSecondEndEveningFr(event.target.value)}
                value={secondEndEveningFr}
              >
                <option value="">Fin 2è horaire</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdStartEvening"
                id="thirdStartEvening"
                onChange={(event) => setThirdStartEveningFr(event.target.value)}
                value={thirdStartEveningFr}
              >
                <option value="">Début 3è horaire</option>
                <option value="16:00:00">16h</option>
                <option value="17:00:00">17h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>
              <select
                className="m-3"
                name="thirdEndEvening"
                id="thirdEndEvening"
                onChange={(event) => setThirdEndEveningFr(event.target.value)}
                value={thirdEndEveningFr}
              >
                <option value="">Fin 3è horaire</option>
                <option value="17:00:00">17h</option>
                <option value="18:00:00">18h</option>
                <option value="00:00:00">Horaire vide</option>
              </select>

              <button
                type="submit"
                className={`inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-7`}
              >
                Poster
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
