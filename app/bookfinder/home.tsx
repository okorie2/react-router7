import { Welcome } from "../welcome/welcome";
import BookFinder from "./bookFinder";
import Navbar from "~/components/topbar";
import Sidenav from "~/components/sidenav";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bookfinder App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <BookFinder />;
    </>
  );
}
