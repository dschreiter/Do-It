import { useState } from "react";
import "./App.css";
import { Button } from "semantic-ui-react";

function App() {
	//prehook test
	const [toDoList, setToDoList] = useState([]);
	const [modal, setModal] = useState(false);
	const [task, setTask] = useState({
		name: "",
		completed: false,
		priority: "",
	});

	const formSubmitHandler = (e) => {
		e.preventDefault();
		if (task.name === "" || task.priority === "") return;

		setToDoList([
			...toDoList,
			{
				id: Math.floor(Math.random() * 1000) + 1,
				...task,
			},
		]);

		// Clear form
		setTask({
			name: "",
			completed: false,
			priority: "",
		});
	};

	const editListItem = (id) => {
		setModal((prevState) => !prevState);
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
			<form onSubmit={formSubmitHandler}>
				<input
					type="text"
					value={task.name}
					onChange={(e) => setTask({ ...task, name: e.target.value })}
				/>

				<select
					value={task.priority}
					onChange={(e) => setTask({ ...task, priority: e.target.value })}
				>
					<option value="">Select Priority</option>
					<option value="High">High</option>
					<option value="Medium">Medium</option>
					<option value="Low">Low</option>
				</select>
				<button type="submit">Add Todo</button>
			</form>
			{modal && "show modal"}
			<ul>{renderList}</ul>

			<Button content="Primary" primary />
		</>
	);
}

export default App;
