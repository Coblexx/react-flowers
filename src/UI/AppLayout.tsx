import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <h1>APP LAYOUT</h1>
      <Outlet />
    </div>
  );
}
