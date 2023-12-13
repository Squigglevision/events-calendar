import React, { useState } from "react";
import "./App.css";
import Calendar from "./components/calendar/Calendar";
import Modal from "./components/modal/Modal";

const App: React.FC = () => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<div>
			{modalVisible && (
				<Modal setModalVisible={setModalVisible}>
					This is an empty modal
				</Modal>
			)}
			<Calendar setModalVisible={setModalVisible} />
		</div>
	);
};

export default App;
