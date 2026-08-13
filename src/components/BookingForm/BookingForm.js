import { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from "../Form/Button";

export default function BookingForm ({ availableTimes = [], onDateChange, onSubmit }) {
	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		touched
	} = useFormik({
		initialValues: {
			date: '',
			time: '',
			guests: 1,
			occasion: ''
		},
		validationSchema: Yup.object().shape({
			date: Yup.string().required('Please select date.'),
			time: Yup.string().required('Please select time.'),
			guests: Yup.number().required('Please enter number of guests.').min(1, 'Minimum 1 guest').max(10, 'Maximum 10 guests'),
			occasion: Yup.string().required('Please select occasion.')
		}),
		onSubmit: values => {
			onSubmit(values);
		}
	});

	const handleDefaultChange = (e) => {
		onDateChange(e.target.valueAsDate);
	}

	return (
		<form onSubmit={handleSubmit} noValidate>
			<div className={`field ${(touched.date && errors.date) ? ' invalid' : ''}`}>
				<label className="label" htmlFor="res-date">Choose date *</label>
				<input
					type="date"
					id="res-date"
					name="date"
					required
					value={values.date}
					aria-invalid={touched.date && errors.date ? 'true' : 'false'}
					onChange={e => {
						handleDefaultChange(e);
						handleChange(e);
					}}
					onBlur={handleBlur}
				/>
				{(touched.date && errors.date) && (
					<strong className="fied-error" role="alert">{errors.date}</strong>
				)}
			</div>

			<div className={`field ${(touched.time && errors.time) ? ' invalid' : ''}`}>
				<label className="label" htmlFor="res-time">Choose time *</label>
				<select
					id="res-time"
					name="time"
					required
					aria-invalid={touched.time && errors.time ? 'true' : 'false'}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.time}
				>
					<option value="">Select time</option>
					{availableTimes.map(availableTime => (
						<option value={availableTime} key={availableTime}>{availableTime}</option>
					))}
				</select>
				{(touched.time && errors.time) && (
					<strong className="fied-error" role="alert">{errors.time}</strong>
				)}
			</div>

			<div className={`field ${(touched.guests && errors.guests) ? ' invalid' : ''}`}>
				<label className="label" htmlFor="guests">Number of guests *</label>
				<input
					type="number"
					placeholder="Number od gursts"
					min="1"
					max="10"
					required
					id="guests"
					name="guests"
					aria-invalid={touched.guests && errors.guests ? 'true' : 'false'}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.guests}
				/>
				{(touched.guests && errors.guests) && (
					<strong className="fied-error" role="alert">{errors.guests}</strong>
				)}
			</div>

			<div className={`field ${(touched.occasion && errors.occasion) ? ' invalid' : ''}`}>
				<label className="label" htmlFor="occasion">Occasion *</label>
				<select
					id="occasion"
					name="occasion"
					required
					aria-invalid={touched.occasion && errors.occasion ? 'true' : 'false'}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.occasion}
				>
					<option value="">Select occasion</option>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
				{(touched.occasion && errors.occasion) && (
					<strong className="fied-error" role="alert">{errors.occasion}</strong>
				)}
			</div>

			<div className="field">
				<Button type="submit" size="lg">Make Your reservation</Button>
			</div>
	</form>
	);
}