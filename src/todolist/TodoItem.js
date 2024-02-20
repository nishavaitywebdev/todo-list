const ToDo = ({ task, toggleCompleted, deleteTask }) => {
    const handleChange = () => {
        toggleCompleted(task.id);
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <span>{task.completed}</span>
            <span className={task.completed ? "checked": ""}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>
                X
            </button>
        </div>
    );
}

export default ToDo;