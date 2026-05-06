export default function TaskItem({task, onDelete}) {
    return (
        <li style={{marginBottom: "10px"}}>
            {task.title}
            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </li>
    );
}