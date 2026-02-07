import NotFound from "@/assets/icons/Responses/NotFound";

const EmptyStates = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full gap-4">
            <NotFound className="h-40 w-40 text-zinc-600" />
            <section className="flex flex-col items-center justify-center">
                <h1 className="">Are you up to date!!</h1>
                <p className="text-zinc-400">It seems you don't have any unread answers.</p>
            </section>
        </div>
    );
};

export default EmptyStates;