import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from './pages/AdminPage';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route
          path="/admin"
          element={<AdminPage/>}
        />
  
      </Routes>
    </BrowserRouter>
  )
}
export default App
