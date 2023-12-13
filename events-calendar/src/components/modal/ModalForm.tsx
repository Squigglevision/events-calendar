import React, { useRef } from "react";

const ModalForm = () => {
	const nameRef = useRef(null);
	const startRef = useRef(null);
	const endRef = useRef(null);
	const locationRef = useRef(null);
	const labelRef = useRef(null);

	let eventArray: [object];

	interface formData {
		eventName?: unknown;
		startDate?: unknown;
		endDate?: unknown;
		location?: unknown;
		label?: unknown;
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (
			nameRef.current &&
			startRef.current &&
			endRef.current &&
			locationRef.current &&
			labelRef.current
		) {
			if (eventArray != undefined) {
				console.log("After first Form Data:", {
					eventName: nameRef.current.value.toString(),
					startDate: startRef.current.value.toString(),
					endDate: endRef.current.value.toString(),
					location: locationRef.current.value.toString(),
					label: labelRef.current.value.toString(),
				});
				const data: formData = {
					eventName: nameRef.current.value,
					startDate: startRef.current.value,
					endDate: endRef.current.value,
					location: locationRef.current.value,
					label: labelRef.current.value,
				};
				eventArray.push(data);
			}

			if (eventArray == undefined) {
				console.log("First form Data:", {
					eventName: nameRef.current.value.toString(),
					startDate: startRef.current.value.toString(),
					endDate: endRef.current.value.toString(),
					location: locationRef.current.value.toString(),
					label: labelRef.current.value.toString(),
				});

				eventArray = [
					{
						eventName: nameRef.current.value,
						startDate: startRef.current.value,
						endDate: endRef.current.value,
						location: locationRef.current.value,
						label: labelRef.current.value,
					},
				];
			}

			console.log(eventArray);
		}
	}

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
