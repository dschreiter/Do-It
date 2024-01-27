import React, { useState } from "react";

import { Button, Select, FormField, Form } from "semantic-ui-react";

import ModalSemanticUI from "./Semantic-UI/ModalSemanticUI";

function CreateTodo({ todo, setTodo, toDoList, setToDoList }) {
	const [open, setOpen] = useState(false);

	const addTodo = () => {
		if (todo.name === "" || todo.priority === "") return;

		setToDoList([
			...toDoList,
			{
				id: Math.floor(Math.random() * 1000) + 1,
				...todo,
			},
		]);

		// Clear form
		setTodo({
			name: "",
			completed: false,
			priority: "",
		});

		//close Modal
		setOpen(false);
	};

	const cancelTodo = () => {
		// Clear form
		setTodo({
			name: "",
			completed: false,
			priority: "",
		});

		//close Modal
		setOpen(false);
	};

	const modalConfig = {
		size: "mini",
		modalTrigger: <Button circular icon="plus" color="green" size="big" />,
		title: "Create a Todo",
		body: (
			<Form>
				<FormField>
					<label>Todo</label>
					<input
						type="text"
						value={todo.name}
						onChange={(e) => setTodo({ ...todo, name: e.target.value })}
					/>
				</FormField>
				<FormField>
					<label>Priority</label>
					<Select
						options={[
							{ key: "1", value: "Low", text: "Low" },
							{ key: "2", value: "Medium", text: "Medium" },
							{ key: "3", value: "High", text: "High" },
						]}
						onChange={(event, data) =>
							setTodo({ ...todo, priority: data.value })
						}
					/>
				</FormField>
			</Form>
		),
		buttons: (
			<>
				<Button color="black" onClick={cancelTodo}>
					Cancel
				</Button>
				<Button
					content="Add Todo"
					labelPosition="right"
					icon="checkmark"
					onClick={addTodo}
					positive
				/>
			</>
		),
	};

	return (
		<ModalSemanticUI
			size={modalConfig.size}
			modalTrigger={modalConfig.modalTrigger}
			title={modalConfig.title}
			body={modalConfig.body}
			buttons={modalConfig.buttons}
			open={open}
			setOpen={setOpen}
		/>
	);
}

export default CreateTodo;
