import NotFound from "@/assets/icons/Responses/NotFound";

const EmptyStates = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full gap-4">
            <NotFound className="h-40 w-40 text-zinc-600" />
            <section className="flex flex-col items-center justify-center">
                <h1 className="">{title}</h1>
                <p className="text-zinc-400">{subtitle}</p>
            </section>
        </div>
    );
};

export default EmptyStates;