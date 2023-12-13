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

const Calendar: React.FC<CalProps> = ({ setModalVisible }) => {
	const today = new Date();
	const [date, setDate] = useState(today);
	const [day, setDay] = useState(date.getDate());
	const [month, setMonth] = useState(date.getMonth());
	const [year, setYear] = useState(date.getFullYear());
	const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

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

	return (
		<div className={styles.calendar}>
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
								>
									{day > 0 && day}

									{day == 13 &&
									month == 11 &&
									year == 2023 ? (
										<h2> Event1 day 13 </h2>
									) : null}
									{day == 15 &&
									month == 11 &&
									year == 2023 ? (
										<h2> Event2 day 15 </h2>
									) : null}
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Calendar;
