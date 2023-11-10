import "./App.css";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/service-details/:id",
    element: <ServiceDetailsPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
