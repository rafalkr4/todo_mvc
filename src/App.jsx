import {useState} from "react";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([])


    function getId() {
      if (!tasks.length) return 1;

      return Math.max (...tasks.map((task) => task.id)) + 1

    }
  function handleInput(event) {
    setValue(event.target.value);
  }

  function handleAddTask(event){
    if (event.key === "Enter") {
      setTasks([...tasks, {
          id: getId(),
          name: value,
          status: "active"
      }]);
      setValue("");
    }

  }

  function handeDelete(event) {

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
                >delete
                </button>
            </li>
        ))}
      </ul>

    </>
  )
}

export default App
