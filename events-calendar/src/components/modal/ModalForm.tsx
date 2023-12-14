import React, { useEffect, useRef, useState } from "react";
import { ModalProps } from "../../interfaces/ModalProps";
import styles from "./ModalForm.module.scss";

const ModalForm = ({ formData, setFormData }: ModalProps) => {
	const nameRef = useRef(null);
	const startRef = useRef(null);
	const endRef = useRef(null);
	const locationRef = useRef(null);
	const labelRef = useRef(null);

	const [errorMessage, setErrorMessage] = useState("");

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
			if (new Date(startRef.current.value) < new Date()) {
				setErrorMessage(
					"Error: Dates must not be in the past. Please change the event dates"
				);
				return;
			}

			if (
				new Date(startRef.current.value) >
				new Date(endRef.current.value)
			) {
				setErrorMessage("Error: End date must be after start date");
				return;
			}

			setErrorMessage("");
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
		} else {
			setErrorMessage(
				"Error: Please make sure all fields are filled in."
			);
		}
	}

	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.inputs}>
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
					<input
						id="endDate"
						name="endDate"
						ref={endRef}
						type="date"
					/>

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
				</div>
				<div className={styles.submit}>
					<button type="submit">Submit</button>
					{errorMessage && (
						<p className={styles.error}>{errorMessage} </p>
					)}
				</div>
			</form>
		</div>
	);
};

export default ModalForm;
