// react
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import AppLayout from "./UI/AppLayout";
import HomePage from "./Pages/Home/HomePage";
import GalleryPage from "./Pages/Gallery/GalleryPage";
import AddFlowerPage from "./Pages/AddFlower/AddFlowerPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-flower",
        element: <AddFlowerPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
