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
                    style={{marginRight: "5px"}}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a task!"
                />
                <button style={{marginLeft: "5px"}} type="submit">Add</button>
            </form>
        </div>
    );
}