import { useState } from "react";

import {
  EmptyStateRecent,
  EmptyStateDocs,
  EmptyStateBookmarks,
  EmptyStateFolders,
  EmptyStateLists,
  EmptyStateProjects,
  EmptyStateResources
} from "@/components/workSpace/Overview/EmptyStates";

const Card = ({
  title,
  fullWidth,
  items = [],
  emptyState: EmptyStateComponent,
}) => {
  const hasItems = items && items.length > 0;

  return (
    <div
      className={`flex flex-col bg-[#111111] h-80 shrink-0 ${fullWidth ? "w-full" : "flex-1 min-w-0"
        } rounded-md p-2 border border-zinc-800 hover:border-zinc-600 transition-all`}
    >
      <header>
        <h1 className="text-zinc-200 font-semibold">{title}</h1>
      </header>
      <article className="flex flex-col w-full flex-1 overflow-y-auto mt-2">
        {hasItems ? (
          <div className="flex flex-col gap-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-3 rounded border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
              >
                <h3 className="text-zinc-200 font-medium">{item.name}</h3>
                {item.description && (
                  <p className="text-zinc-500 text-sm mt-1">
                    {item.description}
                  </p>
                )}
                {item.date && (
                  <span className="text-zinc-600 text-xs mt-1 block">
                    {item.date}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          EmptyStateComponent && <EmptyStateComponent />
        )}
      </article>
    </div>
  );
};

const Overview = () => {
  const [recentItems] = useState([
  ]);

  const [docs] = useState([
  ]);

  const [bookmarks] = useState([]);

  const [folders] = useState([
  ]);

  const [lists] = useState([
  ]);

  const [projects] = useState([]);

  return (
    <section className="flex flex-col w-full h-full p-2 gap-2 bg-[#090909] overflow-y-auto overflow-x-hidden">
      <article className="flex flex-row w-full h-80 gap-2">
        <Card
          title="Recent"
          items={recentItems}
          emptyState={EmptyStateRecent}
        />
        <Card title="Docs" items={docs} emptyState={EmptyStateDocs} />
        <Card
          title="Bookmarks"
          items={bookmarks}
          emptyState={EmptyStateBookmarks}
        />
      </article>
      <Card
        title="Folders"
        fullWidth
        items={folders}
        emptyState={EmptyStateFolders}
      />
      <Card
        title="Lists"
        fullWidth
        items={lists}
        emptyState={EmptyStateLists}
      />
      <article className="flex flex-row w-full h-80 gap-2">
        <Card
          title="Resources"
          items={projects}
          emptyState={EmptyStateResources}
        />
        <Card
          title="Workload by state"
          items={projects}
          emptyState={EmptyStateProjects}
        />
      </article>
    </section>
  );
};

export default Overview;
