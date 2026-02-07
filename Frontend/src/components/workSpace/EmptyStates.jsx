import { List } from "lucide-react";


export const EmptyState = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <section className="flex flex-col justify-center items-center border-2 border-zinc-700 p-4 rounded-2xl">
        <List className="w-10 h-10" />
      </section>
      <h1 className="font-semibold text-zinc-400 mt-4">
        You don't have any space to store your tasks?
      </h1>
      <span className="font-semibold text-zinc-400">
        Create a space to organize your work.
      </span>
      <button className="flex p-2 px-4 bg-zinc-200 text-zinc-800 border border-transparent mt-4 rounded-lg hover:bg-zinc-800 hover:border-zinc-500 hover:text-zinc-100 transition-all">
        <span className="font-semibold">New Space</span>
      </button>
    </div>
  );
};
