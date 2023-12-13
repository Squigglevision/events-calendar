import React, { useState } from "react";
import "./App.css";
import Calendar from "./components/calendar/Calendar";
import Modal from "./components/modal/Modal";
import EventCard from "./components/eventCard/EventCard";

const App: React.FC = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [formData, setFormData] = useState<
		{
			eventName?: unknown;
			startDate?: unknown;
			endDate?: unknown;
			location?: unknown;
			label?: unknown;
		}[]
	>([]);

	return (
		<div>
			{modalVisible && (
				<Modal
					setModalVisible={setModalVisible}
					formData={formData}
					setFormData={setFormData}
				>
					This is an empty modal
				</Modal>
			)}
			<Calendar setModalVisible={setModalVisible} formData={formData} />
		</div>
	);
};

export default App;
