export const regroupAndDeleteSlots = (slots) => {
  let slotsArray = Object.values(slots);
  slotsArray = slotsArray.map((slot: any) => slot.split(":")[0]);

  const slotsArrayFiltered = slotsArray.filter((slot) => slot != "00");

  const slotsArrayDouble = [];
  for (let i = 0; i < slotsArrayFiltered.length; i++) {
    if (i % 2 == 1) {
      slotsArrayDouble.push(
        [slotsArrayFiltered[i - 1].toString(), slotsArrayFiltered[i]].toString()
      );
    }
  }

  return slotsArrayDouble;
};

export const regroupReservations = (reservations) => {
  const reservationArrayDouble = reservations.map((reservation) => {
    let object = Object.values(reservation);
    return object
      .map((date: any) => date.split(" ")[1].split(":")[0])
      .toString();
  });

  return reservationArrayDouble;
};

export const deleteReservationsOfSlots = (
  reservationArrayDouble,
  slotsArrayDouble
) => {
  for (let reservation of reservationArrayDouble) {
    if (slotsArrayDouble.includes(reservation)) {
      slotsArrayDouble.splice(slotsArrayDouble.indexOf(reservation), 1);
    }
  }
};
