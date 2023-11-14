import { useState, useEffect } from "react";
import { deleteBooking, getBookingsByUser } from "../helpers/bookingsApi";

const BookingsScreen = ({ user }) => {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    traerReservas();
  }, [bookings]);

  const traerReservas = async () => {
    const { bookings } = await getBookingsByUser(user._id);
    setBookings(bookings);
  };

  const eliminarReserva = async (id) => {
    const resp = await deleteBooking(id);
    console.log(resp);
  };

  return (
    <main className="bg-our-black min-vh-100">
      <div className="container py-4">
        <h1 className="text-orange text-center">Mis Reservas</h1>
        <div className="row justify-content-evenly gap-3">
          {bookings ? (
            bookings.map((booking) => (
              <div className="col-10 col-lg-5 card bg-blue" key={booking._id}>
                <div className="row g-0">
                  <div className="col">
                    <div className="card-body">
                      <h5 className=" text-orange fs-3">
                        {booking.servicio.nombre}
                      </h5>
                      <div className="d-flex flex-column flex-md-row gap-2 my-3">
                        <span className="text-our-white fs-5 text-title text-decoration-underline">
                          {booking.servicio.horario}
                        </span>
                        {booking.servicio.dias &&
                          booking.servicio.dias.map((dia) => (
                            <span
                              key={crypto.randomUUID()}
                              className="text-our-white fs-5 text-title"
                            >
                              {dia}
                            </span>
                          ))}
                      </div>
                      <button
                        className="btn fw-bold"
                        onClick={() => eliminarReserva(booking._id)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No tiene reservas aun...</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default BookingsScreen;
