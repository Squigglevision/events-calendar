import { CalProps } from "../../interfaces/CalProps";
import CalBody from "./CalBody";

import React from "react";

const Calendar: React.FC<CalProps> = ({ ...props }) => {
	return (
		<div>
			<CalBody {...props} />
		</div>
	);
};

export default Calendar;
