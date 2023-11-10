import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlanDetailsPage from "./pages/PlanDetailsPage";
const router = createBrowserRouter([
  {
    path: "/plan-details/:id",
    element: <PlanDetailsPage />,
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
