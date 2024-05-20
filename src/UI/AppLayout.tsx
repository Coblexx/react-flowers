import { Outlet } from "react-router-dom";

// components
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div>
      <h1>APP LAYOUT</h1>
      <aside>
        <nav></nav>
      </aside>
      <Outlet />
      <Footer />
    </div>
  );
}
