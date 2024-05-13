// react
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import HomePage from "./Pages/Home/HomePage";
import GalleryPage from "./Pages/Gallery/GalleryPage";
import AddFlowerPage from "./Pages/AddFlower/AddFlowerPage";

const router = createBrowserRouter([
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
