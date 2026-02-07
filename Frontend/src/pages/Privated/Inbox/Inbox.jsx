import { Link, Outlet, useLocation } from "react-router-dom";
import { MessageSquare, Sparkles, Clock, Trash2 } from "lucide-react";

const ViewTab = ({ to, label, icon: Icon, isActive }) => {
  return (
    <Link
      to={to}
      className={`
        relative flex items-center gap-2 flex-1 px-4 py-7 text-sm font-medium transition-all
        ${isActive
          ? "text-white"
          : "text-zinc-500 hover:text-zinc-300"
        }
      `}
    >
      <Icon size={16} className={isActive ? "text-white" : "text-zinc-500"} />
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
      )}
    </Link>
  );
};

const VIEW_TABS = [
  { to: "major", label: "Major", icon: MessageSquare },
  { to: "others", label: "Others", icon: Sparkles },
  { to: "later", label: "Later", icon: Clock },
  { to: "deleted", label: "Deleted", icon: Trash2 },
];

const Inbox = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/").filter(Boolean).pop() || "";

  return (
    <section className="flex flex-col h-full w-full bg-[#0a0a0a]">
      <header className="border-b border-zinc-800 h-20 justify-center items-center bg-[#111111]">
        <nav className="flex">
          {VIEW_TABS.map((tab) => {
            const isActive =
              tab.to === "major"
                ? currentPath === "major" || currentPath === "responses"
                : currentPath === tab.to;
            return (
              <ViewTab
                key={tab.to}
                {...tab}
                isActive={isActive}
              />
            );
          })}
        </nav>
      </header>
      <article className="flex-1 overflow-auto">
        <Outlet />
      </article>
    </section>
  );
};

export default Inbox;