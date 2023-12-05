export const DAYS: string[] = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export const MONTHS: string[] = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export const parseISOString = (s) => {
	const b = s.split(/\D+/);
	return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};

export const range = (end: number) => {
	const { result } = Array.from({ length: end }).reduce(
		({ result, current }) => ({
			result: [...result, current],
			current: current + 1,
		}),
		{ result: [], current: 1 }
	);
	return result;
};

export const getDays = (month, year) => {
	return new Date(year, month + 1, 0).getDate();
};

export const getSortedDays = (month, year) => {
	const dayIndex = new Date(year, month, 1).getDay();
	return [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)];
};

export const getDateObj = (day, month, year) => {
	return new Date(year, month, day);
};

export const areDatesTheSame = (first, second) => {
	return (
		first.getFullYear() === second.getFullYear() &&
		first.getMonth() === second.getMonth() &&
		first.getDate() === second.getDate()
	);
};
