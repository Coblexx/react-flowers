// react
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// pages
import AppLayout from "./ui/AppLayout";
import HomePage from "./Pages/Home/HomePage";
import GalleryPage from "./Pages/Gallery/GalleryPage";
import AddFlowerPage from "./Pages/AddFlower/AddFlowerPage";
import LoginPage from "./Pages/Login/LoginPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {},
});

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
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
