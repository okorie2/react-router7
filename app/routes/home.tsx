import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import BookGenreUI from "./bookFinder";
import Navbar from "~/components/topbar";
import Sidenav from "~/components/sideNav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidenav onNavigate={() => {}} />
      <BookGenreUI />;
    </>
  );
}
