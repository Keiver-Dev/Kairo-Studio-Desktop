import { useOutletContext } from "react-router-dom";
import { Circle, CheckCircle2 } from "lucide-react";
import EmptyStates from "@/components/Assigned/EmpyStates";

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
};

const CommentRow = ({ comment, onToggle, index }) => {
    const isResolved = comment.resolved;
    const colors = ["#F7C86A", "#FFB175", "#FF7A6A"];
    const accentColor = colors[index % 3];

    return (
        <div
            className={`group grid grid-cols-[auto_1fr_120px_100px] items-center gap-4 px-4 py-2 border-b border-zinc-800/50 hover:bg-zinc-800/30 cursor-pointer transition-colors ${isResolved ? "opacity-40" : ""}`}
            style={{
                borderLeft: isResolved ? "none" : `2px solid ${accentColor}`,
            }}
        >
            <button
                onClick={() => onToggle(comment.id)}
                className="hover:scale-110 transition-transform"
                style={{ color: isResolved ? "#71717a" : accentColor }}
            >
                {isResolved ? <CheckCircle2 size={18} /> : <Circle size={18} />}
            </button>
            <span
                className={`truncate text-sm ${isResolved ? "line-through text-zinc-500" : "text-zinc-100"}`}
            >
                {comment.content}
            </span>
            <span className="text-xs text-zinc-500 truncate">
                {comment.author || "—"}
            </span>
            <span className="text-xs text-zinc-500 text-right">
                {comment.createdAt ? formatDate(comment.createdAt) : "—"}
            </span>
        </div>
    );
};

const AssignedToMe = () => {
    const { comments, setComments } = useOutletContext();
    const myComments = comments.filter((c) => c.assignedToMe);

    const toggleComment = (id) => {
        setComments(
            comments.map((c) =>
                c.id === id ? { ...c, resolved: !c.resolved } : c
            )
        );
    };

    const pendingComments = myComments.filter((c) => !c.resolved);
    const resolvedComments = myComments.filter((c) => c.resolved);

    if (myComments.length === 0) {
        return (
            <div className="flex flex-col h-full w-full">
                <EmptyStates />
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full w-full overflow-auto">
            {/* Header con gradiente sutil */}
            <div
                className="grid grid-cols-[auto_1fr_120px_100px] gap-4 px-4 py-2 text-xs border-b border-zinc-800"
            >
                <span className="w-[18px]" />
                <span >Comment</span>
                <span >From</span>
                <span className="text-right">Date</span>
            </div>

            <div>
                {pendingComments.map((comment, idx) => (
                    <CommentRow
                        key={comment.id}
                        comment={comment}
                        onToggle={toggleComment}
                        index={idx}
                    />
                ))}
                {resolvedComments.map((comment, idx) => (
                    <CommentRow
                        key={comment.id}
                        comment={comment}
                        onToggle={toggleComment}
                        index={pendingComments.length + idx}
                    />
                ))}
            </div>

            {/* Footer con estadísticas */}
            <div className="px-4 py-2 text-xs flex items-center gap-2">
                <span style={{ color: "#FFB175" }}>{myComments.length} comments</span>
                <span className="text-zinc-600">·</span>
                <span style={{ color: "#F7C86A" }}>{resolvedComments.length} resolved</span>
            </div>
        </div>
    );
};

export default AssignedToMe;