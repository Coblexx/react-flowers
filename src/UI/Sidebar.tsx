import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-slate-300 md:flex md:flex-col hidden min-w-60 text-2xl">
      <nav>
        <ul className="gap-4">
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
  );
}