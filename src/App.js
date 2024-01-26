import { useState } from "react";
import "./App.css";
import CreateTaskModal from "./components/CreateTodo";

function App() {
	const [toDoList, setToDoList] = useState([]);
	const [task, setTask] = useState({
		name: "",
		completed: false,
		priority: "",
	});

	const editListItem = (id) => {
		console.log(411, "in edit");
	};

	const deleteListItem = (id) => {
		const filteredList = toDoList.filter((curr) => curr.id !== id);
		setToDoList(filteredList);
	};

	const taskDone = (id) => {
		// remove edit, and delete icons, add check mark

		const updatedList = toDoList.map((currentToDolist) =>
			currentToDolist.id === id
				? { ...currentToDolist, completed: true }
				: currentToDolist
		);

		setToDoList(updatedList);
	};

	const renderList = toDoList.map((curr) => (
		<li key={curr.id}>
			{curr.name}-{curr.priority}
			<button onClick={() => editListItem(curr.id)}>Edit</button>
			<button onClick={() => deleteListItem(curr.id)}>X</button>
			<button onClick={() => taskDone(curr.id)}>Done</button>
		</li>
	));

	return (
		<>
			<div className="flex-center">
				<CreateTaskModal
					task={task}
					setTask={setTask}
					toDoList={toDoList}
					setToDoList={setToDoList}
				/>
			</div>

			<ul>{renderList}</ul>
		</>
	);
}

export default App;
