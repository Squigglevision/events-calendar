import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ModalProps {
	children: ReactNode;
	setModalVisible: Dispatch<SetStateAction<boolean>>;
	onOutsideClick?: () => void;
	formData: {
		eventName?: unknown;
		startDate?: unknown;
		endDate?: unknown;
		location?: unknown;
		label?: unknown;
	}[];
	setFormData: Dispatch<
		SetStateAction<
			{
				eventName?: unknown;
				startDate?: unknown;
				endDate?: unknown;
				location?: unknown;
				label?: unknown;
			}[]
		>
	>;
}
