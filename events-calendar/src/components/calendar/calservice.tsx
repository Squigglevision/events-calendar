export const DAYS: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

export const range = (end: number): number[] => {
	const { result } = Array.from({ length: end }).reduce(
		({ result, current }) => ({
			result: [...result, current],
			current: current + 1,
		}),
		{ result: [], current: 1 }
	);
	return result;
};

export const getDays = (month: number, year: number): number => {
	return new Date(year, month + 1, 0).getDate();
};

export const getSortedDays = (month: number, year: number): string[] => {
	const dayIndex = new Date(year, month, 1).getDay();
	return [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)];
};

export const getDateObj = (day: number, month: number, year: number): Date => {
	return new Date(year, month, day);
};

export const areDatesTheSame = (first: Date, second: Date): boolean => {
	return (
		first.getFullYear() === second.getFullYear() &&
		first.getMonth() === second.getMonth() &&
		first.getDate() === second.getDate()
	);
};
