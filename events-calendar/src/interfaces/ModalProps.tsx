import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ModalProps {
	children: ReactNode;
	setModalVisible: Dispatch<SetStateAction<boolean>>;
	onOutsideClick?: () => void;
}
