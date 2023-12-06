import React, { useState } from "react";
import "./App.css";
import Calendar from "./components/calendar/Calendar";
import { getDays } from "./components/calendar/calservice";
import Modal from "./components/modal/Modal";

const App: React.FC = () => {
	const startDate = new Date();
	const [currentMonth, setCurrentMonth] = useState(startDate.getMonth());
	const [currentYear, setCurrentYear] = useState(startDate.getFullYear());
	const daysInMonth = getDays(currentMonth, currentYear);

	const [modalVisible, setModalVisible] = useState(false);

	return (
		<div>
			{modalVisible && (
				<Modal setModalVisible={setModalVisible}>
					This is an empty modal
				</Modal>
			)}
			<Calendar
				daysInMonth={daysInMonth}
				currentMonth={currentMonth}
				currentYear={currentYear}
				setCurrentMonth={setCurrentMonth}
				setCurrentYear={setCurrentYear}
				setModalVisible={setModalVisible}
			/>
		</div>
	);
};

export default App;
