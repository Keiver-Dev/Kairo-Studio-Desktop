import { Link } from "react-router-dom";
import {
  Moon,
  TabletSmartphone,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useState, useRef } from "react";
import Logo from "@/assets/icons/Logo";
import Github from "@/assets/icons/Companies/Github";
import { NAV_LINKS } from "@/database/LandingPage/HeaderData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    // Limpiar cualquier timeout pendiente de cierre
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    // Agregar un pequeño retraso antes de cerrar para permitir moverse al dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0A0A0A]/80 backdrop-blur-md text-[#E5E5E5]">
      <div className="flex items-center justify-between p-4 px-4 sm:px-7">
        {/* Logo y navegación de escritorio */}
        <section className="flex items-center gap-1">
          <Link
            to="/"
            className="rounded-lg bg-transparent p-2 transition-all hover:bg-[#222222]"
          >
            <Logo className="h-5 w-5" />
          </Link>

          {/* Navegación de escritorio */}
          <nav className="hidden items-center md:flex">
            {NAV_LINKS.map((link, index) => (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => link.items && handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={link.to}>
                  <span
                    className={`flex gap-2 items-center rounded-lg bg-transparent p-1.5 px-3 text-sm transition-all hover:bg-[#222222] ${openDropdown === index ? "bg-[#222222]" : ""
                      }`}
                  >
                    {link.label}
                    {link.items && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${openDropdown === index ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </span>
                </Link>

                {/* Menú desplegable */}
                {link.items && (
                  <div
                    className={`absolute top-full left-0 mt-1 ${link.layout.width
                      } bg-[#171717] border border-[#222222] rounded-lg shadow-2xl transition-all duration-200 origin-top ${openDropdown === index
                        ? "opacity-100 visible scale-100"
                        : "opacity-0 invisible scale-95 pointer-events-none"
                      }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="p-3">
                      <div
                        className={`grid ${link.layout.gridCols} ${link.layout.gap}`}
                      >
                        {link.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to={item.href}
                            className="block p-3 rounded-md hover:bg-[#222222] transition-colors group"
                          >
                            <div className="flex gap-2">
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-row gap-2 items-center font-medium text-[#E5E5E5] text-sm mb-1 group-hover:text-white transition-colors">
                                  {item.title}
                                  {item.icon && (
                                    <span className="text-lg shrink-0">
                                      {item.icon}
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs text-[#E5E5E5]/60 leading-relaxed">
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </section>

        {/* Sección derecha - Escritorio */}
        <section className="hidden items-center gap-1 lg:flex">
          {/* Accesibilidad del usuario */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Keiver-Dev/Kairo-Studios-Frontend"
              className="flex cursor-pointer items-center rounded-lg bg-transparent p-2 text-sm transition-all hover:bg-[#222222]"
            >
              <Github className="h-5 w-5 text-[#E5E5E5]" />
            </a>
            <div className="h-6 w-0.5 bg-[#222222]/60" />
            <button className="flex cursor-pointer items-center rounded-lg bg-transparent p-2 text-sm transition-all hover:bg-[#222222]">
              <TabletSmartphone className="h-5 w-5 text-[#E5E5E5]" />
            </button>
            <div className="h-6 w-0.5 bg-[#222222]/60" />
            <button className="mr-1 flex cursor-pointer items-center rounded-lg bg-transparent p-2 text-sm transition-all hover:bg-[#222222]">
              <Moon className="h-5 w-5 text-[#E5E5E5]" />
            </button>
          </div>

          {/* Login y registro */}
          <div className="flex gap-2">
            <Link
              to="/login"
              className="flex items-center gap-4 rounded-md bg-[#222222]/80 border-2 border-[#E5E5E5] px-4 py-2 transition-colors hover:bg-[#222222]"
            >
              <span className="font-semibold">Login</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-4 rounded-md bg-[#E5E5E5] border-2 border-[#E5E5E5] px-4 py-2 transition-colors hover:bg-[#E5E5E5]/80"
            >
              <span className="font-semibold text-[#171717]">Sign Up</span>
            </Link>
          </div>
        </section>

        {/* Acciones compactas - Tablet */}
        <section className="hidden items-center gap-2 md:flex lg:hidden">
          <button className="flex cursor-pointer items-center rounded-lg bg-transparent p-2 transition-all hover:bg-[#222222]">
            <TabletSmartphone className="h-5 w-5" />
          </button>
          <button className="flex cursor-pointer items-center rounded-lg bg-transparent p-2 transition-all hover:bg-[#222222]">
            <Moon className="h-5 w-5" />
          </button>
          <Link
            to="/login"
            className="rounded-md bg-[#222222]/80 px-3 py-2 text-sm font-semibold transition-colors hover:bg-[#222222]"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-md bg-[#E5E5E5] px-3 py-2 text-sm font-semibold text-[#171717] transition-colors hover:bg-[#E5E5E5]/80"
          >
            Sign Up
          </Link>
        </section>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex cursor-pointer items-center rounded-lg bg-transparent p-2 transition-all hover:bg-[#222222] md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-[#222222]/60 bg-[#0A0A0A] md:hidden">
          <nav className="flex flex-col p-4">
            {NAV_LINKS.map(({ to, label, items }, index) => (
              <div key={to}>
                {items ? (
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === index ? null : index
                      )
                    }
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm transition-all hover:bg-[#222222]"
                  >
                    <span>{label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${openMobileDropdown === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={to}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-sm transition-all hover:bg-[#222222]"
                  >
                    <span>{label}</span>
                  </Link>
                )}

                {items && openMobileDropdown === index && (
                  <div className="ml-4 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenMobileDropdown(null);
                        }}
                        className="block rounded-lg px-4 py-2 text-xs transition-all hover:bg-[#222222]"
                      >
                        <div className="flex items-start gap-2">
                          {item.icon && (
                            <span className="text-base shrink-0">
                              {item.icon}
                            </span>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-[#E5E5E5]">
                              {item.title}
                            </div>
                            <div className="text-[#E5E5E5]/60 mt-0.5">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="my-2 h-px bg-[#222222]/60" />

            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm text-[#E5E5E5]/70">Accessibility</span>
              <div className="flex gap-2">
                <button className="flex cursor-pointer items-center rounded-lg bg-transparent p-2 transition-all hover:bg-[#222222]">
                  <Moon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="my-2 h-px bg-[#222222]/60" />

            <div className="flex flex-col gap-2 px-4 py-2">
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md bg-[#222222]/80 px-4 py-3 text-center font-semibold transition-colors hover:bg-[#222222]"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md bg-[#E5E5E5] px-4 py-3 text-center font-semibold text-[#171717] transition-colors hover:bg-[#E5E5E5]/80"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
