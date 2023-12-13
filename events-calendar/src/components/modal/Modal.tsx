import { ModalProps } from "../../interfaces/ModalProps";
import ModalForm from "./ModalForm";

const Modal = ({ setModalVisible }: ModalProps) => {
	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<div className="modal-container">
			<dialog className="modal" open>
				<ModalForm />
				<button onClick={closeModal}>Close</button>
			</dialog>
		</div>
	);
};

export default Modal;
