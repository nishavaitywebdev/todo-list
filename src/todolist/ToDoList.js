import ToDo from "./TodoItem";
import { useEffect, useState } from 'react';

function ToDoList() {

    const storedItems = JSON.parse(localStorage.getItem('todos'));
    const [data, setData] = useState([...storedItems]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(data));
        const completedCount = data.filter(task => task.completed).length;
        setCompletedCount(completedCount);
    }, [data]);

    const [text, setText] = useState('');
    const [completedCount, setCompletedCount] = useState(0);

    const toggleCompleted = (id) => {
        data.map((task) => {
            if (task.id === id) {
                task.completed = !task.completed;
                return task;
            } else {
                return task;
            }
        });
        setData([...data]);
    }

    const deleteTask = (id) => {
        setData(data.filter((task) => task.id !== id));
    }

    const addToDo = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        }

        setData([...data, newTask]);
        setText("");
    }

    return (
        <div className="todo-container">
            <div className="todo-item create-task"><input className="flex-item-left" type="text" value={text} onChange={e => setText(e.target.value)} />
                <button className="flex-item-right" onClick={() => addToDo(text)}>Add</button>
            </div>
            <div>Completed {completedCount}</div>
            {data.filter(a => !a.completed).map((i) => <ToDo key={i.id} id={i.id} task={i} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />)}
            {data.filter(a => a.completed).map((i) => <ToDo key={i.id} id={i.id} task={i} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />)}
        </div>
    );
}

export default ToDoList;