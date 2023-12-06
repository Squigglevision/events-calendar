import { Dispatch, SetStateAction } from "react";

export interface CalProps {
	daysInMonth: number;
	currentMonth: number;
	setCurrentMonth: Dispatch<SetStateAction<number>>;
	currentYear: number;
	setCurrentYear: Dispatch<SetStateAction<number>>;
	setModalVisible: Dispatch<SetStateAction<boolean>>;
}
