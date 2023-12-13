import { Dispatch, SetStateAction } from "react";

export interface CalProps {
	setModalVisible: Dispatch<SetStateAction<boolean>>;
	formData: {
		eventName?: unknown;
		startDate?: unknown;
		endDate?: unknown;
		location?: unknown;
		label?: unknown;
	}[];
}
