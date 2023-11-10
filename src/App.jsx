import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanDetailsPage from "./pages/PlanDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hola</h1>} />
          <Route path="/plan-details/:id" element={<PlanDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
