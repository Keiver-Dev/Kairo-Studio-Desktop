import Logo from "@/assets/icons/Logo";
import {
  FileText,
  Bookmark,
  Folder,
  List,
  Briefcase,
  Box,
  PencilRuler
} from "lucide-react";

export const EmptyStateRecent = () => (
  <div className="flex flex-col w-full h-full justify-center items-center gap-3">
    <div className="flex flex-col bg-[#191919] p-2 border border-zinc-600 rounded-2xl">
      <Logo className="w-12 h-12 text-zinc-500" />
    </div>
    <span className="text-zinc-500">No recent activity</span>
  </div>
);

export const EmptyStateDocs = () => (
  <div className="flex flex-col w-full h-full justify-center items-center gap-3">
    <div className="flex flex-col bg-[#191919] p-2 border border-zinc-600 rounded-2xl">
      <FileText className="w-12 h-12 text-zinc-500" />
    </div>
    <span className="text-zinc-500">No documents yet</span>
  </div>
);

export const EmptyStateBookmarks = () => (
  <div className="flex flex-col w-full h-full justify-center items-center gap-3">
    <div className="flex flex-col bg-[#191919] p-2 border border-zinc-600 rounded-2xl">
      <Bookmark className="w-12 h-12 text-zinc-500" />
    </div>
    <span className="text-zinc-500">No bookmarks saved</span>
  </div>
);

export const EmptyStateFolders = () => (
  <div className="flex flex-col w-full h-full justify-center items-center gap-3">
    <div className="flex flex-col bg-[#191919] p-2 border border-zinc-600 rounded-2xl">
      <Folder className="w-12 h-12 text-zinc-500" />
    </div>
    <span className="text-zinc-500">No folders created</span>
  </div>
);

export const EmptyStateLists = () => (
  <div className="flex flex-col w-full h-full justify-center items-center gap-3">
    <div className="flex flex-col bg-[#191919] p-2 border border-zinc-600 rounded-2xl">
      <List className="w-12 h-12 text-zinc-500" />
    </div>
    <span className="text-zinc-500">No lists available</span>
  </div>
);

export const EmptyStateProjects = () => (
  <div className="flex flex-col w-full h-full justify-center items-center gap-3">
    <div className="flex flex-col bg-[#191919] p-2 border border-zinc-600 rounded-2xl">
      <PencilRuler className="w-12 h-12 text-zinc-500" />
    </div>
    <span className="text-zinc-500">No projects started</span>
  </div>
);

export const EmptyStateResources = () => (
  <div className="flex flex-col w-full h-full justify-center items-center gap-3">
    <div className="flex flex-col bg-[#191919] p-2 border border-zinc-600 rounded-2xl">
      <Box className="w-12 h-12 text-zinc-500" />
    </div>
    <span className="text-zinc-500">No resources available</span>
  </div>
);
