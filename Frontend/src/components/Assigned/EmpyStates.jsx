import { ListChecks } from "lucide-react";

const EmptyStates = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full gap-4">
            <section className="flex items-center justify-cente border-2 border-zinc-600 p-2 rounded-2xl">
                <ListChecks className="h-10 w-10 text-zinc-600" />
            </section>
            <section className="flex flex-col items-center justify-center">
                <h1 className="">Are you up to date!!</h1>
                <p className="text-zinc-400">It appears you don't have any messages assigned.</p>
            </section>
        </div>
    );
};

export default EmptyStates;