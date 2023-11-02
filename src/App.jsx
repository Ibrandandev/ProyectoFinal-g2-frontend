import './App.css';
import ContactoScreen from './pages/ContactoScreen';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/contact",
    element: <ContactoScreen/>
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
