import { Dispatch, SetStateAction } from "react";

export interface Props {
	daysInMonth: number;
	currentMonth: number;
	setCurrentMonth: Dispatch<SetStateAction<number>>;
	currentYear: number;
	setCurrentYear: Dispatch<SetStateAction<number>>;
}
