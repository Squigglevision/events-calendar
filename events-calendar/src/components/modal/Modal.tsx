import { ModalProps } from "../../interfaces/ModalProps";
import ModalForm from "./ModalForm";

const Modal = ({ setModalVisible, formData, setFormData }: ModalProps) => {
	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<div className="modal-container">
			<dialog className="modal" open>
				<ModalForm formData={formData} setFormData={setFormData} />
				<button onClick={closeModal}>Close</button>
			</dialog>
		</div>
	);
};

export default Modal;
