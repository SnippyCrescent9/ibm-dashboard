import {useState} from "react";

export default function TaskForm ({onAdd}) {
    const [input, setInput] = useState("");
    const handleSubmit = () => {
        if (!input.trim()) return;
        onAdd(input);
        setInput("");
    };

    return (
        <div style={{marginBottom: "20px"}}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleSubmit();
                }}
                placeholder="Enter a task!"
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
}