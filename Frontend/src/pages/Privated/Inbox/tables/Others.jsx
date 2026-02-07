import EmptyStates from "@/components/Inbox/EmpyStates";

const Others = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <EmptyStates title="Empty inbox" subtitle="Congratulations! You no longer have any other notifications. 🎉" />
        </div>
    );
};

export default Others;