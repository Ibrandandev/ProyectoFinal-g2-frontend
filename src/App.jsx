import './App.css';
import ClassDetailpage from './pages/classDetailpage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/classDetail",
    element:<ClassDetailpage></ClassDetailpage>,
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
