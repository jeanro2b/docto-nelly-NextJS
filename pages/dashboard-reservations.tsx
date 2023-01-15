import Header from "../components/Header/Header";
import axios from "../lib/axios";
import React from "react";
import Router, { useRouter } from "next/router";
import Footer from "../components/Footer/Footer";
import { useAuth } from "../hooks/auth";
import Link from "next/link";
import Button from "../components/Breeze/Button";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useAuth({ middleware: "admin" });
  const userId = user?.id;

  if (user?.role === "user") {
    router.push("/");
  }

  const [allReservations, setAllReservations] = React.useState([]);

  React.useEffect(() => {
    if (!userId) return;
    axios
      .get(`/api/calendar-all`)
      .then((res) => {
        setAllReservations(res.data);
      })
      .catch((error) => {
        if (error.response.status !== 409) throw error;
        router.push("/");
      });
  }, [userId]);

  const deleteReservation = (reservationId) => {
    axios
      .delete(`/api/delete-reservation/${reservationId}`)
      .then((res) => {
        window.alert('Reservation supprimée !')
        window.location.reload();
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  };

  return (
    <div className={"dashboard"}>
      <Header />

      <div className="py-[10rem]">
        <div className="max-w-7xl mx-auto sm:px-3 lg:px-1">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              Réservations des patients :
            </div>
            {allReservations.map((reservation) => {
              return (
                <div className="bg-white border-b border-gray-200">
                  <div className="p-6 bg-white border-b border-gray-200 inline-block">
                    {`Date : ${reservation.day} , de ${
                      reservation.start.split(" ")[1].split(":")[0]
                    }h à ${reservation.end.split(" ")[1].split(":")[0]}h`}
                  </div>
                  <div className="p-6 bg-white border-b border-gray-200 inline-block">
                    {`Nom du patient : ${reservation.name}`}
                  </div>
                  <div className="p-6 bg-white border-b border-gray-200 inline-block">
                    {`Mail du patient : ${reservation.email}`}
                  </div>
                  <Button
                    onClick={() => deleteReservation(reservation.id)}
                    className={""}
                  >
                    Supprimer le RDV
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
