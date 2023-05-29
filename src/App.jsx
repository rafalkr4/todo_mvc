import {useState} from "react";
import "./App.css";

function App() {
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);


    function getId() {
        if (!tasks.length) return 1;
        return Math.max(...tasks.map((task) => task.id)) + 1
    }

    function handleInput(event) {
        setValue(event.target.value);
    }

    function handleAddTask(event) {
        if (event.key === 'Enter') {
            setTasks([...tasks, {
                id: getId(),
                name: value,
                status: 'active'
            }]);
            setValue('');
        }

    }

    function handleDelete(taskToDelete) {
        return () => {
            const newTasks = tasks.filter((task) => task !== taskToDelete);
            setTasks(newTasks);
        }
    }

    function handleChangeStatus(task) {
        return function () {
            task.status = task.status === 'active' ? 'done' : 'active';
            setTasks([...tasks])
        }
    }

    function handleDeleteDoneTasks(){
        setTasks(tasks.filter((task) => task.status !== 'done'));
    }

    return (
        <>
            <h1>todos</h1>
            <input
                type="text"
                value={value}
                onChange={handleInput}
                onKeyUp={handleAddTask}
            />
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <button
                            onClick={handleChangeStatus(task)}
                            className={task.status === 'active' ? 'active' : 'done'}
                        >{task.status}</button>
                        <span>{task.name}</span>
                        <button
                            onClick={handleDelete(task)}
                        >delete
                        </button>
                    </li>
                ))}
            </ul>

            {tasks.some((task) => task.status === 'done') && (
                <button
                    onClick={handleDeleteDoneTasks}
                >Clear completed</button>
            )}
        </>
    )
}

export default App
