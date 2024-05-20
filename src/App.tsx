// react
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// pages
import AppLayout from "./ui/AppLayout";
import HomePage from "./Pages/Home/HomePage";
import GalleryPage from "./Pages/Gallery/GalleryPage";
import AddFlowerPage from "./Pages/AddFlower/AddFlowerPage";
import LoginPage from "./Pages/Login/LoginPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/add-flower",
        element: <AddFlowerPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
