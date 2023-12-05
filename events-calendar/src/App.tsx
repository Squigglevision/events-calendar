import React, { useState } from "react";
import "./App.css";
import Calendar from "./components/calendar/Calendar";
import { getDays } from "./components/calendar/calservice";
import { Props } from "./interfaces/Props";

const MyComponent: React.FC<Props> = ({
	daysInMonth,
	currentMonth,
	currentYear,
	setCurrentMonth,
	setCurrentYear,
}) => {
	return (
		<div>
			<Calendar
				daysInMonth={daysInMonth}
				currentMonth={currentMonth}
				currentYear={currentYear}
				setCurrentMonth={setCurrentMonth}
				setCurrentYear={setCurrentYear}
			/>
		</div>
	);
};

const App: React.FC = () => {
	const startDate = new Date();
	const [currentMonth, setCurrentMonth] = useState(startDate.getMonth());
	const [currentYear, setCurrentYear] = useState(startDate.getFullYear());
	const daysInMonth = getDays(currentMonth, currentYear);

	return (
		<div>
			<MyComponent
				daysInMonth={daysInMonth}
				currentMonth={currentMonth}
				currentYear={currentYear}
				setCurrentMonth={setCurrentMonth}
				setCurrentYear={setCurrentYear}
			/>
		</div>
	);
};

export default App;
