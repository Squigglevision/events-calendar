export interface EventCardProps {
	eventName?: unknown;
	startDate?: unknown;
	endDate?: unknown;
	location?: unknown;
	label?: unknown;
	setEventCardVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
