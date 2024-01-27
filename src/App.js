import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";

function App() {
	const [toDoList, setToDoList] = useState([]);
	const [todo, setTodo] = useState({
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

	const todoDone = (id) => {
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
			<button onClick={() => todoDone(curr.id)}>Done</button>
		</li>
	));

	return (
		<>
			<div className="flex-center">
				<CreateTodo
					todo={todo}
					setTodo={setTodo}
					toDoList={toDoList}
					setToDoList={setToDoList}
				/>

				<ul>{renderList}</ul>
			</div>
		</>
	);
}

export default App;
