import { useState, useEffect } from "react";
import { getBookingsByUser } from "../helpers/bookingsApi";

const BookingsScreen = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    traerReservas();
  }, [bookings]);

  const traerReservas = async () => {
    const { bookings } = await getBookingsByUser();
    setBookings(bookings);
  };

  return (
    <main className="container">
      <h1>Reservas</h1>
    </main>
  );
};

export default BookingsScreen;
