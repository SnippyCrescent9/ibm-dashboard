export default function TaskItem({task, onDelete, onToggle}) {
    return (
        <li 
            style={{
                marginBottom: "10px",
                textDecoration: task.completed
                    ? "line-through"
                    : "none"
            }}
        >
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={()=> onToggle(task.id)}
            />
            {task.title}
            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </li>
    );
}