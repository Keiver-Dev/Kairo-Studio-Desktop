// Icons
import {
  Inbox,
  Reply,
  MessageSquareLock,
  UserRoundCheck,
  Badge,
  Plus,
  Hash,
  X,
} from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSpace } from "@/hooks/useSpace";
import { getDisplayIcon } from "@/utils/displayHelpers";
import { useState } from "react";

// Main navigation data
const mainNavItems = [
  { to: "/home/inbox", icon: Inbox, label: "Inbox" },
  { to: "/home/responses", icon: Reply, label: "Responses" },
  { to: "/home/assigned", icon: MessageSquareLock, label: "Assigned comments" },
  { to: "/home/workspace", icon: UserRoundCheck, label: "My tasks" },
];

// Secundary navigation data
const SecundaryNavItems = [{ to: "/home/channel", icon: Hash, label: "Geral Channel" }];

// Reusable component for navigation links
const NavLink = ({ to, icon, label }) => {
  const Icon = icon;
  const { pathname } = useLocation();
  const isActive = pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={`flex items-center gap-2 transition-colors ${isActive ? "text-white" : "text-zinc-400 hover:text-white"
        }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
};

// Component for space items - NOW SHOWS INITIALS INSTEAD OF EMOJIS
const SpaceItem = ({ space, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between rounded-lg p-1 hover:bg-[#2a2a2a]/70 transition-colors w-full ${isActive ? "bg-[#2a2a2a]/50" : ""
        }`}
    >
      <div className="flex items-center gap-2">
        <div
          className="w-5 h-5 flex items-center justify-center rounded-md text-xs font-semibold"
          style={{ backgroundColor: space.color, color: '#ffffff' }}
        >
          {space.name.charAt(0).toUpperCase()}
        </div>
        <span
          className={`text-sm ${isActive ? "text-white" : "text-zinc-300"}`}
        >
          {space.name}
        </span>
      </div>
    </button>
  );
};

// Modal for creating new space
const CreateSpaceModal = ({ isOpen, onClose, onCreate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#F7C86A");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, description, color, isPrivate });
    // Reset form
    setName("");
    setDescription("");
    setColor("#F7C86A");
    setIsPrivate(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] rounded-lg p-6 w-full max-w-md border border-zinc-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Create New Space</h2>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              Space Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g., Frontend Projects"
              className="w-full px-3 py-2 bg-[#111111] border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional description"
              rows={3}
              className="w-full px-3 py-2 bg-[#111111] border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              Color
            </label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full h-10 bg-[#111111] border border-zinc-700 rounded-lg cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isPrivate"
              checked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
              className="w-4 h-4 rounded border-zinc-700 bg-[#111111] text-zinc-600 focus:ring-2 focus:ring-zinc-600"
            />
            <label htmlFor="isPrivate" className="text-sm text-zinc-300">
              Private space (only visible to you)
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-zinc-200 hover:bg-white text-zinc-900 font-medium rounded-lg transition-colors"
            >
              Create Space
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Component for direct messages
const DirectMessage = () => (
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 bg-zinc-700 rounded-full flex items-center justify-center text-white text-xs font-semibold">
      K
    </div>
    <span className="text-zinc-300 text-sm">Keiver Luna — You</span>
  </div>
);

const Home = () => {
  const { spaces, currentSpace, switchSpace, createSpace, loading } = useSpace();
  const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateSpace = async (spaceData) => {
    try {
      await createSpace(spaceData);
    } catch (error) {
      console.error("Error creating space:", error);
    }
  };

  return (
    <main className="flex h-full w-full">
      {/* Secondary sidebar */}
      <aside className="flex flex-col w-1/6 h-full bg-[#191919]/90 text-zinc-300 p-4 border-r border-zinc-800">
        <h1 className="text-white font-semibold text-md mb-4">Home</h1>

        {/* Main navigation */}
        <nav className="flex flex-col gap-3 text-sm">
          {mainNavItems.map((item) => (
            <NavLink key={item.to} {...item} />
          ))}
        </nav>

        {/* Separator */}
        <hr className="my-4 border-zinc-700" />

        {/* Spaces */}
        <section className="flex flex-col gap-1">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-zinc-200 text-xs mb-1">Spaces</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-zinc-300 hover:text-white transition-all px-1 rounded hover:bg-zinc-800"
              aria-label="Add space"
            >
              ＋
            </button>
          </div>
          <section className="flex flex-col w-full h-full gap-1">
            {loading ? (
              <div className="text-zinc-500 text-sm p-2">Loading spaces...</div>
            ) : spaces.length === 0 ? (
              <div className="text-zinc-500 text-sm p-2">No spaces yet</div>
            ) : (
              spaces.map((space) => (
                <SpaceItem
                  key={space.id}
                  space={space}
                  isActive={currentSpace?.id === space.id}
                  onClick={() => switchSpace(space.id)}
                />
              ))
            )}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-between rounded-lg p-1 hover:bg-[#2a2a2a]/70 transition-colors w-full"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <Plus className="h-4 w-4 text-zinc-300" />
                </div>
                <span className="text-zinc-300 text-sm">New space</span>
              </div>
            </button>
          </section>
        </section>

        {/* Channels */}
        <section className="flex flex-col gap-2 mt-4">
          <h2 className="text-zinc-200 text-xs">Channels</h2>
          {/* Secundary navigation */}
          <nav className="flex flex-col gap-3 text-sm">
            {SecundaryNavItems.map((item) => (
              <NavLink key={item.to} {...item} />
            ))}
          </nav>
          <button className="text-zinc-400 hover:text-white text-left">
            ＋ Add channel
          </button>
        </section>

        {/* Direct messages */}
        <section className="flex flex-col gap-2 mt-4">
          <h2 className="text-zinc-200 text-xs">Direct messages</h2>
          <DirectMessage />
          <button className="text-zinc-400 hover:text-white text-left">
            ＋ New message
          </button>
        </section>
      </aside>

      {/* Main content area */}
      <section className="flex flex-col h-full flex-1 bg-[#111111]">
        {/* Content */}
        <article className="flex flex-col flex-1 overflow-scroll">
          <Outlet />
        </article>
      </section>

      {/* Create Space Modal */}
      <CreateSpaceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateSpace}
      />
    </main>
  );
};

export default Home;
