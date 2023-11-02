import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
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