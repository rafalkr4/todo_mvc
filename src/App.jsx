import {useState} from "react";

function App() {
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);


    function getId(){
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

    function handleDelete(event) {
        const id = parseInt(event.target.dataset.id);
        const newTasks = tasks.filter((task) => task.id !== id);

        setTasks(newTasks);
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
                        <span>{task.name}</span>
                        <button
                            onClick={handleDelete}
                            data-id={task.id}
                        >delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
