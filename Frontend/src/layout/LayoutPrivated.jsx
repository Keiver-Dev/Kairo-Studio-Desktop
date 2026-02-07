import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "@/assets/icons/Logo";
import {
  House,
  Calendar,
  UsersRound,
  Grip,
  CircleFadingArrowUp,
  UserPlus,
  ChevronDown,
  Video,
  Search,
} from "lucide-react";
import { useWorkspace } from "@/hooks/useWorkspace";
import { getDisplayIcon } from "@/utils/displayHelpers";
import { useState } from "react";

const NAV_ITEMS = [
  { to: "/home", icon: House, label: "Home" },
  { to: "/planning", icon: Calendar, label: "Planning" },
  { to: "/team", icon: UsersRound, label: "Usuarios" },
  { to: "/more", icon: Grip, label: "Menú" },
];

const BOTTOM_ITEMS = [
  { to: "/plan", icon: CircleFadingArrowUp, label: "Plan" },
  { to: "/invite", icon: UserPlus, label: "Invitar" },
];

const NavLink = ({ to, icon, label, isActive }) => {
  const Icon = icon;

  return (
    <Link
      to={to}
      className={`transition-colors ${isActive ? "text-white" : "text-zinc-500 hover:text-white"
        }`}
      aria-label={label}
    >
      <Icon className="w-7 h-7 p-1" />
    </Link>
  );
};

const LayoutPrivated = () => {
  const location = useLocation();
  const { workspaces, currentWorkspace, switchWorkspace, loading } = useWorkspace();
  const [isWorkspaceMenuOpen, setIsWorkspaceMenuOpen] = useState(false);

  // Show full-screen loading while workspaces are being fetched
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#111111] text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
        <p className="text-zinc-400 animate-pulse">Loading your workspace...</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col h-screen w-screen bg-[#111111] p-2 pt-0">
      {/* Header */}
      <header className="flex items-center h-[5%] w-full justify-between">
        {/* Workspace Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsWorkspaceMenuOpen(!isWorkspaceMenuOpen)}
            className="flex items-center gap-2 bg-[#222222] hover:bg-zinc-700/50 transition-colors rounded-lg px-2 py-1.5"
          >
            {/* Inicial circular */}
            <div className="flex items-center justify-center bg-zinc-700 text-white font-semibold w-6 h-6 rounded-md">
              {getDisplayIcon(currentWorkspace)}
            </div>

            {/* Texto del workspace */}
            <span className="text-sm text-white font-medium whitespace-nowrap">
              {currentWorkspace?.name || "Workspace"}
            </span>

            <ChevronDown className={`h-4 w-4 text-white transition-transform ${isWorkspaceMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isWorkspaceMenuOpen && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-[#1a1a1a] border border-zinc-700 rounded-lg shadow-lg z-50">
              <div className="p-2">
                <div className="text-xs text-zinc-400 px-2 py-1 mb-1">Switch Workspace</div>
                {workspaces.map((workspace) => (
                  <button
                    key={workspace.id}
                    onClick={() => {
                      switchWorkspace(workspace.id);
                      setIsWorkspaceMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-2 py-2 rounded-md transition-colors ${currentWorkspace?.id === workspace.id
                      ? 'bg-zinc-700/50 text-white'
                      : 'text-zinc-300 hover:bg-zinc-800/50 hover:text-white'
                      }`}
                  >
                    <div className="flex items-center justify-center bg-zinc-700 text-white font-semibold w-6 h-6 rounded-md text-xs">
                      {getDisplayIcon(workspace)}
                    </div>
                    <span className="text-sm">{workspace.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative w-1/5 flex items-center">
          <Search className="absolute left-3 text-zinc-500 h-4 w-4 pointer-events-none" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-4 py-2 rounded-full bg-[#1e1e1e] text-zinc-300 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all"
          />
        </div>
        <section className="flex flex-row gap-2 items-center">
          <Link
            to="/cam"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Video className="h-5 w-5" />
          </Link>
          <button
            to="/Account"
            className="flex flex-row items-center hover:bg-zinc-800 p-1 rounded-full transition-all"
          >
            <div className="w-6 h-6 bg-zinc-700 rounded-full flex items-center justify-center text-white text-xs font-semibold">
              K
            </div>
            <ChevronDown className="w-4 h-4" />
          </button>
        </section>
      </header>

      {/* Contenedor principal */}
      <div className="flex flex-row flex-1 w-full gap-2 min-h-0">
        {/* Sidebar */}
        <aside className="flex flex-col justify-between items-center bg-[#191919] rounded-md p-3 w-80px">
          {/* Logo */}
          <div className="flex bg-zinc-800 h-8 w-8 items-center justify-center rounded-lg border border-zinc-700">
            <Logo className="text-white w-6 h-6" />
          </div>

          {/* Separador */}
          <div className="h-0.5 w-full bg-zinc-700 my-3" />

          {/* Main navigation */}
          <nav className="flex flex-col items-center space-y-4 flex-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                {...item}
                isActive={location.pathname.startsWith(item.to)}
              />
            ))}
          </nav>

          {/* Bottom navigation */}
          <nav className="flex flex-col items-center space-y-3">
            {BOTTOM_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                {...item}
                isActive={location.pathname.startsWith(item.to)}
              />
            ))}
          </nav>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 h-full bg-[#121212] rounded-lg border border-zinc-800">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default LayoutPrivated;