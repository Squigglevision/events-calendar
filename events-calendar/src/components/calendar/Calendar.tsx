import { Props } from "../../interfaces/Props";
import CalBody from "./CalBody";

import React from "react";

const Calendar: React.FC<Props> = ({
	daysInMonth,
	currentMonth,
	currentYear,
	setCurrentMonth,
	setCurrentYear,
}) => {
	return (
		<div>
			<CalBody
				daysInMonth={daysInMonth}
				currentMonth={currentMonth}
				currentYear={currentYear}
				setCurrentMonth={setCurrentMonth}
				setCurrentYear={setCurrentYear}
			/>
		</div>
	);
};

export default Calendar;
