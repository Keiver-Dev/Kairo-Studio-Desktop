import EmptyStates from "@/components/Inbox/EmpyStates";

const Delete = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <EmptyStates title="You don't have any cleared notifications" subtitle="Aprende a borrar notificaciones en la bandeja de entrada." />
        </div>
    );
};

export default Delete;