import { Outlet } from "react-router-dom";

// components
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";

export default function AppLayout() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col grow">
          <Searchbar />
          <main className="w-full h-full">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
