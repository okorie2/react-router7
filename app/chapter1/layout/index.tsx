import React from "react";
import Sidenav from "./sidenav";
import Navbar from "./topbar";
import { Outlet } from "react-router";
import { useCustomNavigation } from "~/hooks/useNavigation";

export default function BookFinderLayout() {
  const { prevPath, nextPath } = useCustomNavigation();

  return (
    <>
      <Navbar prevPath={prevPath} nextPath={nextPath} />
      <aside>
        <Sidenav onNavigate={() => {}} />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}
