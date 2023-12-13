import React, { useEffect, useRef } from "react";
import { ModalProps } from "../../interfaces/ModalProps";
import { getStartDayOfMonth } from "../calendar/calservice";

const ModalForm = ({ formData, setFormData }: ModalProps) => {
	const nameRef = useRef(null);
	const startRef = useRef(null);
	const endRef = useRef(null);
	const locationRef = useRef(null);
	const labelRef = useRef(null);

	function handleSubmit(event) {
		event.preventDefault();
		console.log(typeof startRef.current.value, " << typeof startRef");
		if (
			nameRef.current.value.length > 0 &&
			startRef.current.value.length > 0 &&
			endRef.current.value.length > 0 &&
			locationRef.current.value.length > 0 &&
			labelRef.current.value.length > 0
		) {
			setFormData([
				...formData,
				{
					eventName: nameRef.current.value,
					startDate: new Date(startRef.current.value),
					endDate: new Date(endRef.current.value),
					location: locationRef.current.value,
					label: labelRef.current.value,
				},
			]);
		}
	}

	// console.log(formData, " <<-- formData");

	return (
		<div>
			{/* Form with:
            Event Name, Start Date, End Date, Location, Label
            
            Event date should have validation - start date cannot be in past
            Make sure to validate data coming from the user

            For this project, can store the events in an array on the frontend
            */}
			<form onSubmit={handleSubmit}>
				<label htmlFor="eventName">Event Name:</label>
				<input
					id="eventName"
					name="eventName"
					ref={nameRef}
					type="text"
				/>

				<label htmlFor="startDate">Start Date:</label>
				<input
					id="startDate"
					name="startDate"
					ref={startRef}
					type="date"
				/>

				<label htmlFor="endDate">End Date:</label>
				<input id="endDate" name="endDate" ref={endRef} type="date" />

				<label htmlFor="location">Location:</label>
				<select id="location" ref={locationRef}>
					<option value="NSW">New South Wales</option>
					<option value="VIC">Victoria</option>
					<option value="QLD">Queensland</option>
				</select>

				<label htmlFor="eventLabel">Label:</label>
				<input
					id="eventlabel"
					name="eventlabel"
					ref={labelRef}
					type="text"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default ModalForm;
