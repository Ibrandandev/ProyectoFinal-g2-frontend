import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/LoginScreen.jsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginScreen />
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