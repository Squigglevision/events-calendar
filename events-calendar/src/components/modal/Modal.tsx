import { ModalProps } from "../../interfaces/ModalProps";

const Modal = ({ children, setModalVisible }: ModalProps) => {
	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<div className="modal-container">
			<dialog className="modal" open>
				<button onClick={closeModal}>Close</button>
				{children}
			</dialog>
		</div>
	);
};

export default Modal;
