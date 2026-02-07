import { Link, Outlet, useLocation } from "react-router-dom";
import { Mail, MailOpen } from "lucide-react";

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
  { to: "unread", label: "Unread", icon: Mail },
  { to: "read", label: "Read", icon: MailOpen },
];

const Responses = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/").filter(Boolean).pop() || "";

  return (
    <section className="flex flex-col h-full w-full bg-[#0a0a0a]">
      <header className="border-b border-zinc-800 h-20 justify-center items-center bg-[#111111]">
        <nav className="flex">
          {VIEW_TABS.map((tab) => {
            const isActive =
              tab.to === "unread"
                ? currentPath === "unread" || currentPath === "responses"
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

export default Responses;