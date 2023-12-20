import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarApp from "./components/NavbarApp";
import FooterApp from "./components/Footer/";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
// import ProtectedRoutes from "./routes/ProtectedRoutes";
import ProtectedRoutesAdmin from "./routes/ProtectedRoutesAdmin";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import AdminScreen from "./pages/AdminScreen";
import ErrorScreen from "./pages/ErrorScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ContactScreen from "./pages/ContactScreen";
import PlanDetailsScreen from "./pages/PlanDetailsScreen";
import ServicesScreen from "./pages/ServicesScreen";
import ServiceDetailsScreen from "./pages/ServiceDetailsScreen";
import BookingsScreen from "./pages/BookingsScreen";
import CategoryScreen from "./pages/CategoryScreen";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const guardarUsuario = (datos) => {
    setUser(datos);
  };

  const iniciarSesion = () => {
    setLogin(true);
  };

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    setLogin(false);
    setUser(null);
  };

  return (
    <BrowserRouter>
      <NavbarApp user={user} login={login} cerrarSesion={cerrarSesion} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/login"
          element={
            <LoginScreen
              iniciarSesion={iniciarSesion}
              guardarUsuario={guardarUsuario}
            />
          }
        />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/contact" element={<ContactScreen user={user} />} />
        <Route path="/categories/:id" element={<CategoryScreen />} />
        <Route path="/service-details/:id" element={<ServiceDetailsScreen />} />
        <Route
          path="/plan-details/:id"
          element={<PlanDetailsScreen user={user} />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoutesAdmin user={user}>
              <AdminScreen />
            </ProtectedRoutesAdmin>
          }
        />
        <Route
          path="/bookings"
          element={
            <ProtectedRoutes login={login}>
              <BookingsScreen user={user} />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <FooterApp />
    </BrowserRouter>
  );
}

export default App;
