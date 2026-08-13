import { useState, useReducer, useEffect } from "react";
import BookingForm from "../BookingForm/BookingForm";
import availableTimesResucer from "../../reducers/availableTimesResucer";
import { submitAPI } from "../../moks/API";
import { useNavigate } from "react-router";

export default function BookingPage () {
	const [availableTimes, dispatch] = useReducer(availableTimesResucer, []);

	const onDateChange = (date) => {
		dispatch({
			type: 'updateTimes',
			date
		});
	}
	const submitForm = (formData) => {
		console.warn(formData);
		const response = submitAPI(formData);

		if (response) {
			navigate('/booking-confirmation');
		}
	}

	const navigate = useNavigate();

	useEffect(() => {
		dispatch({
			type: 'initializeTimes'
		});
	}, []);

	return (
		<section className="section-default">
			<div className="container">
				<h1>Book Now</h1>

				<div className="row">
					<div className="col col-8">
						<BookingForm
							availableTimes={availableTimes}
							onDateChange={onDateChange}
							onSubmit={submitForm}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}