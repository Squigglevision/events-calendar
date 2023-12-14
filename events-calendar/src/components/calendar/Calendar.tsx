import React, { useEffect, useState } from "react";
import {
	DAYS,
	DAYS_LEAP,
	DAYS_OF_THE_WEEK,
	MONTHS,
	getStartDayOfMonth,
	isLeapYear,
} from "./calservice";
import styles from "./Calendar.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CalProps } from "../../interfaces/CalProps";
import EventCard from "../eventCard/EventCard";

const Calendar: React.FC<CalProps> = ({ setModalVisible, formData }) => {
	const today = new Date();
	const [date, setDate] = useState(today);
	const [day, setDay] = useState(date.getDate());
	const [month, setMonth] = useState(date.getMonth());
	const [year, setYear] = useState(date.getFullYear());
	const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

	const [eventCardVisible, setEventCardVisible] = useState(false);

	const [eventName, setEventName] = useState<string>("");
	const [startDate, setStartDate] = useState<Date>();
	const [endDate, setEndDate] = useState<Date>();
	const [location, setLocation] = useState<string>("");
	const [label, setLabel] = useState<string>("");

	useEffect(() => {
		setDay(date.getDate());
		setMonth(date.getMonth());
		setYear(date.getFullYear());
		setStartDay(getStartDayOfMonth(date));
	}, [date]);

	const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

	const showModal = () => {
		setModalVisible(true);
	};

	const setEventCard = (
		eventName: string,
		startDate: Date,
		endDate: Date,
		location: string,
		label: string
	) => {
		setEventCardVisible(true);
		setEventName(eventName);
		setStartDate(startDate);
		setEndDate(endDate);
		setLocation(location);
		setLabel(label);
	};

	return (
		<div className={styles.calendar}>
			{eventCardVisible && (
				<EventCard
					eventName={eventName}
					startDate={startDate}
					endDate={endDate}
					location={location}
					label={label}
					setEventCardVisible={setEventCardVisible}
				/>
			)}
			<div className={styles.month}>
				<IoIosArrowBack
					onClick={() => setDate(new Date(year, month - 1, day))}
					className={styles.prevmonth}
					size={25}
				/>

				<h1>
					{MONTHS[month]} {year}
				</h1>
				<IoIosArrowForward
					onClick={() => setDate(new Date(year, month + 1, day))}
					className={styles.nextmonth}
					size={25}
				/>
			</div>
			<div className={styles.calendarbody}>
				<div className={styles.weekdays}>
					{DAYS_OF_THE_WEEK.map((day) => (
						<div key={day}>
							<strong>{day}</strong>
						</div>
					))}
				</div>
				<div className={styles.daysinmonth}>
					{Array(days[month] + startDay)
						.fill(null)
						.map((_, index) => {
							const day = index - (startDay - 1);
							return (
								<div
									key={index}
									{...((day === today.getDate()) == true &&
									month === today.getMonth() &&
									year === today.getFullYear()
										? { className: styles.active }
										: null)}
									onClick={() =>
										day > 0 ? showModal() : null
									}
									{...(day <= 0
										? { className: styles.empty }
										: null)}
								>
									<h4>{day > 0 ? day : 0}</h4>

									{formData.length > 0 &&
										formData.map((data, index) =>
											data.startDate.getMonth() ===
												month &&
											data.startDate.getDate() === day &&
											data.startDate.getFullYear() ===
												year ? (
												<section
													onClick={() =>
														setEventCard(
															data.eventName,
															data.startDate,
															data.endDate,
															data.location,
															data.label
														)
													}
													key={index}
												>
													{data.eventName}
												</section>
											) : null
										)}
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Calendar;
