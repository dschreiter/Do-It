import {
	ModalHeader,
	ModalDescription,
	ModalContent,
	ModalActions,
	Modal,
} from "semantic-ui-react";

const ModalSemanticUI = ({
	size,
	modalTrigger,
	title,
	body,
	buttons,
	open, // parent passes state: const [open, setOpen] = useState(false);
	setOpen,
	...rest
}) => {
	return (
		<Modal
			size={size}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={modalTrigger}
			{...rest}
		>
			<ModalHeader>{title}</ModalHeader>
			<ModalContent>
				<ModalDescription>{body}</ModalDescription>
			</ModalContent>
			<ModalActions>{buttons}</ModalActions>
		</Modal>
	);
};

export default ModalSemanticUI;
