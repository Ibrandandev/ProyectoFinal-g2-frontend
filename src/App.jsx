import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginScreen from './pages/LoginScreen.jsx'
import RegisterScreen from './pages/RegisterScreen.jsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginScreen />
  },
  {
    path: "/register",
    element: <RegisterScreen />
  },
]);

function App() {
  

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;