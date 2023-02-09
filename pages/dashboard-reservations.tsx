import Header from "../components/Header/Header";
import axios from "../lib/axios";
import React from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer/Footer";
import { useAuth } from "../hooks/auth";
import Button from "../components/Breeze/Button";
import { format } from "date-fns";
import fr from "date-fns/esm/locale/fr/index.js";

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

  // A l'affichage de la page, useEffect pour get toutes les reservations

  const deleteReservation = (reservationId) => {
    axios
      .delete(`/api/delete-reservation/${reservationId}`)
      .then((res) => {
        window.alert("Reservation supprimée !");
        window.location.reload();
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  };

  const result = format(new Date(2014, 6, 2), "'Le' EEEE dd MMMM yyyy", {
    locale: fr,
  });
  console.log(result);

  // Fonction pour appeler la méthode "delete" d'une reservation, en fonction de son ID

  return (
    <div className={"dashboard"}>
      <Header />

      <div className="py-[10rem]">
        <div className="w-fit mx-auto sm:px-3 lg:px-1">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              Réservations des patients :
            </div>
            {/* On mappe sur toutes les reservations pour les afficher ligne par ligne */}
            {allReservations.map((reservation) => {
              return (
                <div className="bg-white border-b border-gray-300">
                  <div className="p-4 bg-white border-b border-gray-200 inline-block">
                    {`Date : ${reservation.day
                      // new Date(
                      //   reservation.day.split("-")[0],
                      //   reservation.day.split("-")[1],
                      //   reservation.day.split("-")[2]
                      // ),
                      // "'Le' EEEE dd MMMM yyyy",
                      // {
                      //   locale: fr,
                      // }
                    } , de ${
                      reservation.start.split(" ")[1].split(":")[0]
                    }h à ${reservation.end.split(" ")[1].split(":")[0]}h`}
                  </div>
                  <div className="p-4 bg-white border-b border-gray-200 inline-block">
                    {`Nom du patient : ${reservation.name}`}
                  </div>
                  <div className="p-4 bg-white border-b border-gray-200 inline-block">
                    {`Téléphone du patient : ${reservation.phone}`}
                  </div>
                  <div className="p-4 bg-white border-b border-gray-200 inline-block">
                    {`Mail du patient : ${reservation.email}`}
                  </div>
                  <Button
                    onClick={() => deleteReservation(reservation.id)}
                    // On passe l'id de la réservation au bouton pour l'envoyer à la méthodé delete et supprimer la bonne réservation
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
