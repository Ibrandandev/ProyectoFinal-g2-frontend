
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarApp from "./components/NavbarApp";
import FooterApp from "./components/FooterApp";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
// import ProtectedRoutes from "./routes/ProtectedRoutes";
import ProtectedRoutesAdmin from "./routes/ProtectedRoutesAdmin";
import AdminScreen from "./pages/AdminScreen";
import ErrorScreen from "./pages/ErrorScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ContactScreen from "./pages/ContactScreen";
import PlanDetailsScreen from "./pages/PlanDetailsScreen";
import ServiceDetailsScreen from "./pages/ServiceDetailsScreen";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(false);

  const guardarUsuario = (datos) => {
    setUser(datos);
  };

  const iniciarSesion = () => {
    setLogin(true);
  };

  const cerrarSesion = () => {
    setLogin(false);
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
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/service-details" element={<ServiceDetailsScreen />} />
        <Route path="/plan-details" element={<PlanDetailsScreen />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutesAdmin user={user}>
              <AdminScreen />
            </ProtectedRoutesAdmin>
          }
        />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <FooterApp />
    </BrowserRouter>
  );
}

export default App;
