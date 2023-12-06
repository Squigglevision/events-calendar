import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MONTHS, getSortedDays, range } from "./calservice";
import { Props } from "../../interfaces/Props";
import styles from "./CalBody.module.scss";

const CalBody: React.FC<Props> = ({
	daysInMonth,
	currentMonth,
	currentYear,
	setCurrentMonth,
	setCurrentYear,
}) => {
	const nextMonth = () => {
		if (currentMonth < 11) {
			setCurrentMonth((prev) => prev + 1);
		} else {
			setCurrentMonth(0);
			setCurrentYear((prev) => prev + 1);
		}
	};

	const prevMonth = () => {
		if (currentMonth > 0) {
			setCurrentMonth((next) => next - 1);
		} else {
			setCurrentMonth(11);
			setCurrentYear((next) => next - 1);
		}
	};

	return (
		<div className={styles.calendar}>
			<div className={styles.month}>
				<IoIosArrowBack
					onClick={prevMonth}
					className={styles.prevmonth}
					size={25}
				/>
				<h1>
					{MONTHS[currentMonth]} {currentYear}
				</h1>
				<IoIosArrowForward
					onClick={nextMonth}
					className={styles.nextmonth}
					size={25}
				/>
			</div>
			<div className={styles.calendarbody}>
				<div className={styles.weekdays}>
					{getSortedDays(currentMonth, currentYear).map(
						(day: string) => {
							{
								return <div key={day}>{day}</div>;
							}
						}
					)}
				</div>
				<div className={styles.daysinmonth}>
					{range(daysInMonth).map((day: number) => {
						return <div key={day}>{day}</div>;
					})}
				</div>
			</div>
		</div>
	);
};

export default CalBody;
