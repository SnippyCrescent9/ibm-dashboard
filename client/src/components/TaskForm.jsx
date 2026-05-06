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
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a task!"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}