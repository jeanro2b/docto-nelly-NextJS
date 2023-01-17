import { useAuth } from "../hooks/auth";
import axios from "../lib/axios";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Breeze/Button";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const Dashboard = () => {
  const { user } = useAuth({ middleware: "auth" });
  const userId = user?.id;

  const router = useRouter();

  const [userSlots, setUsersSlots] = React.useState([]);

  React.useEffect(() => {
    if (!userId) return;
    axios
      .get(`/api/calendar/user/${userId}`)
      .then((res) => {
        setUsersSlots(res.data);
      })
      .catch((error) => {
        if (error.response.status !== 409) throw error;
        router.push("/slot-success");
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
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              Créneau(x) bien reservé(s) !
            </div>
            <div className="p-6 bg-white border-b border-gray-200">
              Créneaux reservés ci-dessous :
            </div>
            {userSlots.map((slot) => {
              return (
                <div>
                  <div className="p-6 bg-white border-b border-gray-200">
                    {`Date : ${format(
                      new Date(
                        slot.day.split("-")[0],
                        slot.day.split("-")[1],
                        slot.day.split("-")[2]
                      ),
                      "'Le' EEEE dd MMMM yyyy",
                      {
                        locale: fr,
                      }
                    )} , de ${
                      slot.start.split(" ")[1].split(":")[0]
                    }h à ${slot.end.split(" ")[1].split(":")[0]}h`}
                  </div>
                  <Button onClick={() => deleteReservation(slot.id)} className={"supprimer"}>Supprimer mon RDV</Button>
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
