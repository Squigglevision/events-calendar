import React from "react";
import styles from "./EventCard.module.scss";
import { EventCardProps } from "../../interfaces/EventCardProps";
import { TimeValues } from "../../interfaces/TimeValues";

const EventCard = ({
	eventName,
	startDate,
	endDate,
	location,
	label,
	setEventCardVisible,
}: EventCardProps) => {
	const closeModal = () => {
		setEventCardVisible(false);
	};
	const startDateString = startDate.toString();
	const endDateString = endDate.toString();

	const todayTime = new Date().getTime();
	const eventTime = startDate.getTime();

	const generateTime = (): TimeValues => {
		const rightJustNow = new Date().getTime();
		const runway = eventTime - rightJustNow;
		const stateObj = {
			days: Math.floor(runway / (1000 * 60 * 60 * 24)),
			hours: Math.floor(
				(runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			),
			minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)),
			seconds: Math.floor((runway % (1000 * 60)) / 1000),
		};
		return stateObj;
	};

	const [timeDisplay, setTimeDisplay] =
		React.useState<TimeValues>(generateTime);

	React.useEffect(() => {
		setInterval(() => setTimeDisplay(generateTime), 1000);
	}, []);

	return (
		<div>
			<dialog className={styles.card} open>
				<button onClick={closeModal}>Close</button>
				<h2>{eventName}</h2>
				<p>Start Date: {startDateString}</p>
				<p>End Date: {endDateString}</p>
				<p>Location: {location}</p>
				<p>
					Countdown: {timeDisplay.days} days : {timeDisplay.hours}{" "}
					hours : {timeDisplay.minutes} minutes :{" "}
					{timeDisplay.seconds} seconds
				</p>
			</dialog>
		</div>
	);
};

export default EventCard;
