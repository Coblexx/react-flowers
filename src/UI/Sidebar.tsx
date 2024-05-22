import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

type NavItemType = {
  to?: string;
  children: ReactNode;
};

export default function Sidebar() {
  return (
    <aside className="bg-slate-300 md:flex md:flex-col hidden min-w-60 text-2xl">
      <nav>
        <Logo />
        <ul className="gap-6">
          <NavItem to="/home">Home</NavItem>
          <NavItem to="/gallery">Gallery</NavItem>
          <NavItem to="/add-flower">Add Flower</NavItem>
          <NavItem to="/login">Log In</NavItem>
        </ul>
      </nav>
    </aside>
  );
}

function NavItem({ to = "/", children }: NavItemType) {
  return (
    <li className="p-2 hover:bg-slate-400 pointer">
      <NavLink className={"w-full block"} to={to}>
        {children}
      </NavLink>
    </li>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex justify-center py-6 text-2xl">
      🌸ReactFlowers🌸
    </Link>
  );
}
