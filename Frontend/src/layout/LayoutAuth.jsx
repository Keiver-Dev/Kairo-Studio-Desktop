import { Outlet, Link } from "react-router-dom";
import { X } from "lucide-react";

// Background
import Background from "@/assets/img/Background.jpg";

const LayoutAuth = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-10" style={{ backgroundImage: `url(${Background})` }} />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 text-white flex flex-row justify-between items-center p-4 md:p-6">
        <Link
          to="/"
          className="text-md font-medium text-zinc-400 hover:text-zinc-300 hover:-rotate-90 transition-all duration-300"
        >
          <X className="h-6 w-6" />
        </Link>
      </header>

      {/* Content */}
      <div className="relative z-10 h-full w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default LayoutAuth;
