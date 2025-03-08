import React from "react";
import Sidenav from "./sidenav";
import Navbar from "./topbar";
import { Outlet } from "react-router";

export default function BookFinderLayout() {
  return (
    <>
      <Navbar />
      <aside>
        <Sidenav onNavigate={() => {}} />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}
