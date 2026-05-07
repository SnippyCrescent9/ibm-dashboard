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
                style={{marginRight: "10px"}} 
                type="checkbox"
                checked={task.completed}
                onChange={()=> onToggle(task.id)}
            />
            {task.title}
            <button 
                style={{marginLeft: "10px"}}
                onClick={() => onDelete(task.id)}
            >
                Delete
            </button>
        </li>
    );
}