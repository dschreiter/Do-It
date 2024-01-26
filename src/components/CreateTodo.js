import React, { useState } from "react";
import {
	ModalHeader,
	ModalDescription,
	ModalContent,
	ModalActions,
	Button,
	Modal,
	Select,
	FormField,
	Form,
} from "semantic-ui-react";

function CreateTodo({ task, setTask, toDoList, setToDoList }) {
	const [open, setOpen] = useState(false);

	const addTask = () => {
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

		setOpen(false);
	};

	const cancelTask = () => {
		setOpen(false);

		// Clear form
		setTask({
			name: "",
			completed: false,
			priority: "",
		});
	};

	const ModalElem = {
		openModalBtn: <Button circular icon="plus" color="green" size="big" />,
		title: "Create a Todo",
		body: (
			<Form>
				<FormField>
					<label>Todo</label>
					<input
						type="text"
						value={task.name}
						onChange={(e) => setTask({ ...task, name: e.target.value })}
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
							setTask({ ...task, priority: data.value })
						}
					/>
				</FormField>
			</Form>
		),
		buttons: (
			<>
				<Button color="black" onClick={cancelTask}>
					Cancel
				</Button>
				<Button
					content="Add Todo"
					labelPosition="right"
					icon="checkmark"
					onClick={addTask}
					positive
				/>
			</>
		),
	};

	return (
		<Modal
			size="mini"
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={ModalElem.openModalBtn}
		>
			<ModalHeader>{ModalElem.title}</ModalHeader>
			<ModalContent>
				<ModalDescription>{ModalElem.body}</ModalDescription>
			</ModalContent>
			<ModalActions>{ModalElem.buttons}</ModalActions>
		</Modal>
	);
}

export default CreateTodo;
