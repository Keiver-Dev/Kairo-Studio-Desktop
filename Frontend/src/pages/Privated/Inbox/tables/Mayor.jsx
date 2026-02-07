import EmptyStates from "@/components/Inbox/EmpyStates";

const Mayor = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <EmptyStates title="Empty inbox" subtitle="Congratulations! You no longer have any important notifications. 🎉" />
        </div>
    );
};

export default Mayor;