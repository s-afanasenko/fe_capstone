import { useState } from "react";
import Button from "../Form/Button";

export default function BookingForm ({ availableTimes = [], onDateChange, onSubmit }) {
	const [data, setData] = useState({
		date: '',
		time: '',
		guests: 1,
		occasion: ''
	});

	const onChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;

		if (key === 'date') {
			onDateChange(e.target.valueAsDate);
		}

		setData({
			...data,
			[key]: value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(data);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="field">
				<label className="label" htmlFor="res-date">Choose date</label>
				<input type="date" id="res-date" name="date" value={data.date} onChange={onChange} />
			</div>

			<div className="field">
				<label className="label" htmlFor="res-time">Choose time</label>
				<select id="res-time" name="time" onChange={onChange} value={data.time}>
					<option value="">Select time</option>
					{availableTimes.map(availableTime => <option value={availableTime} key={availableTime}>{availableTime}</option>)}
				</select>
			</div>

			<div className="field">
				<label className="label" htmlFor="guests">Number of guests</label>
				<input type="number" placeholder="1" min="1" max="10" id="guests"  name="guests" onChange={onChange}  value={data.guests} />
			</div>

			<div className="field">
				<label className="label" htmlFor="occasion">Occasion</label>
				<select id="occasion" name="occasion" onChange={onChange} value={data.occasion}>
					<option value="">Select occasion</option>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
			</div>

			<div className="field">
				<Button type="submit" size="lg">Make Your reservation</Button>
			</div>
	</form>
	);
}