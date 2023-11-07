import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PlanDetailPage from './pages/PlanDetailPage';
const router = createBrowserRouter([
  {
    path: "/planDetail",
    element:<PlanDetailPage></PlanDetailPage>,
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
