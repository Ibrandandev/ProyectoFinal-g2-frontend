import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import AdminScreen from "./pages/AdminScreen";
import ErrorScreen from "./pages/ErrorScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ContactScreen from "./pages/ContactScreen";
import PlanDetailsScreen from "./pages/PlanDetailsScreen";
import ServiceDetailsScreen from "./pages/ServiceDetailsScreen";

function App() {
  const [auth, setAuth] = useState(false);

  const logIn = () => {
    setAuth(true);
  };

  const logOut = () => {
    setAuth(false);
  };

  return (
    <BrowserRouter>
      <Navbar auth={auth} logIn={logIn} logOut={logOut} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/service-details" element={<ServiceDetailsScreen />} />
        <Route path="/plan-details" element={<PlanDetailsScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes auth={auth}>
              <AdminScreen />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
