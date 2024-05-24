import { ReactNode } from "react";
import { GoHome, GoImage, GoStar, GoUpload } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import Footer from "./Footer";

type NavItemType = {
  to?: string;
  children: ReactNode;
};

export default function Sidebar() {
  return (
    <aside className="border-solid border-r-[1px] border-slate-200 md:flex md:flex-col flex-shrink-0 flex-grow-0 h-full hidden min-w-60 text-2xl">
      <nav className="h-full">
        <Logo />
        <ul className="gap-6">
          <NavItem to="/home">
            <GoHome />
            Home
          </NavItem>
          <NavItem to="/gallery">
            <GoImage />
            Gallery
          </NavItem>
          <NavItem to="/favorite">
            <GoStar />
            Favorite
          </NavItem>
          <NavItem to="/add-flower">
            <GoUpload />
            Add Flower
          </NavItem>
        </ul>
      </nav>
      <Footer />
    </aside>
  );
}

function NavItem({ to = "/", children }: NavItemType) {
  return (
    <li className="p-2 hover:bg-slate-200 pointer">
      <NavLink className="w-full block" to={to}>
        <span className="flex items-center gap-2">{children}</span>
      </NavLink>
    </li>
  );
}

function Logo() {
  return (
    <Link
      to="/"
      className="bg-slate-300 items-center flex justify-center h-16 text-2xl"
    >
      🌸ReactFlowers🌸
    </Link>
  );
}
