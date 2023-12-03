import { range } from "./calservice";
import { DAYS } from "./calservice";

const CalBody = () => {
	return (
		<div>
			{DAYS.map((day: string) => {
				{
					return <div key={day}>{day}</div>;
				}
			})}
			{range(31).map((day: string) => {
				return <div>{day}</div>;
			})}
		</div>
	);
};

export default CalBody;
