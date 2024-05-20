import { Outlet } from "react-router-dom";

// components
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div>
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
