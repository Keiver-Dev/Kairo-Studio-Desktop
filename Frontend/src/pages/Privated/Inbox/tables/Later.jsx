import EmptyStates from "@/components/Inbox/EmpyStates";

const Later = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <EmptyStates title="You don't have any snoozed notifications" subtitle="Learn how to snooze notifications in your inbox." />
        </div>
    );
};

export default Later;