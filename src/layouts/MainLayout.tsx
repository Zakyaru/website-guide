import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col text-main bg-white">
      <Navbar />
      <main className="flex-1 page-width container-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
