import { Hash, List, Table2, Calendar, View } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSpace } from "@/hooks/useSpace";

const VIEW_TABS = [
  { to: "overview", icon: View, label: "Overview", color: "bg-zinc-700" },
  { to: "channel", icon: Hash, label: "Channels", color: "bg-[#F7C86A]/50" },
  { to: "list", icon: List, label: "List", color: "bg-[#FFB175]/50" },
  { to: "table", icon: Table2, label: "Table", color: "bg-[#FF7A6A]/50" },
  {
    to: "calendar",
    icon: Calendar,
    label: "Calendar",
    color: "bg-[#93B8B1]/50",
  },
];

const ViewTab = ({ to, icon, label, color, isFirst }) => {
  const Icon = icon;
  const { pathname } = useLocation();
  const currentPath = pathname.split("/").filter(Boolean).pop() || "";

  // If we're at /home/workspace (without specific view), activate "overview"
  const isActive =
    to === "overview"
      ? currentPath === "overview" || currentPath === "workspace"
      : currentPath === to;

  return (
    <>
      {!isFirst && <div className="h-full w-px bg-zinc-600" />}
      <Link
        to={to}
        className={`flex items-center gap-1 shrink-0 whitespace-nowrap ${!isFirst ? "pl-1" : ""} ${isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
          } transition-opacity`}
      >
        <Icon className={`h-4 w-4 ${color} p-0.5 rounded-sm`} />
        <span
          className={`text-sm font-semibold ${isActive ? "text-white" : "text-zinc-300"
            }`}
        >
          {label}
        </span>
      </Link>
    </>
  );
};

// Loading Screen Component
const LoadingScreen = () => (
  <section className="flex flex-col items-center justify-center w-full h-full bg-[#090909]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-zinc-700 border-t-zinc-400 rounded-full animate-spin"></div>
      <p className="text-zinc-400 text-sm font-medium">Loading workspace...</p>
    </div>
  </section>
);

// No Space Available Component
const NoSpaceAvailable = () => (
  <section className="flex flex-col items-center justify-center w-full h-full bg-[#090909]">
    <div className="flex flex-col items-center gap-4 max-w-md text-center p-6">
      <h2 className="text-zinc-200 text-xl font-semibold">No Space Available</h2>
      <p className="text-zinc-500 text-sm">
        This workspace doesn't have any spaces yet. Create a space to get started.
      </p>
    </div>
  </section>
);

const Workspace = () => {
  const { currentSpace, loading, error } = useSpace();

  // Get first letter of space name - NOW SHOWS INITIALS INSTEAD OF EMOJIS
  const initial = currentSpace?.name?.charAt(0).toUpperCase() || "";

  // CRITICAL: Show loading screen while data is being fetched
  if (loading) {
    return <LoadingScreen />;
  }

  // CRITICAL: Show error/empty state if no space is available after loading
  if (!loading && !currentSpace) {
    return <NoSpaceAvailable />;
  }

  // ONLY render workspace content when currentSpace is loaded
  return (
    <section className="flex flex-col w-full h-full">
      <header className="flex flex-col h-20 bg-[#111111] gap-2 justify-between p-2 pb-1 shrink-0 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 flex items-center justify-center rounded-md text-sm font-semibold"
            style={{ backgroundColor: currentSpace.color, color: '#ffffff' }}
          >
            {initial}
          </div>
          <h1 className="font-semibold text-sm mb-1">
            {currentSpace.name}
          </h1>
        </div>
        <nav className="flex items-center gap-2 overflow-x-auto flex-nowrap scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          {VIEW_TABS.map((tab, idx) => (
            <ViewTab key={tab.to || "add"} {...tab} isFirst={idx === 0} />
          ))}
        </nav>
      </header>
      <section className="flex flex-col w-full flex-1 min-h-0">
        <Outlet />
      </section>
    </section>
  );
};

export default Workspace;
