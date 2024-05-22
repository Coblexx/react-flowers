import { Outlet } from "react-router-dom";

// components
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex flex-col grow">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
