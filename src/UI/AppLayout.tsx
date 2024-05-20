import { NavLink, Outlet } from "react-router-dom";

// components
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div>
      <h1>APP LAYOUT</h1>
      <aside>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/add-flower">Add Flower</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <Outlet />
      <Footer />
    </div>
  );
}
