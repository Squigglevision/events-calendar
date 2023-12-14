import { ModalProps } from "../../interfaces/ModalProps";
import ModalForm from "./ModalForm";
import styles from "./Modal.module.scss";

const Modal = ({ setModalVisible, formData, setFormData }: ModalProps) => {
	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<div className={styles.modalContainer}>
			<dialog className={styles.modal} open>
				<ModalForm
					formData={formData}
					setFormData={setFormData}
					setModalVisible={setModalVisible}
				/>
				<button className={styles.btn} onClick={closeModal}>
					Close
				</button>
			</dialog>
		</div>
	);
};

export default Modal;
