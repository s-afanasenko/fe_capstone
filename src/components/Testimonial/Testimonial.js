import Rating from "../Rating/Rating";
import "./testimonial.css";

export default function Testimonial ({ testimonial }) {
	const {
		rating,
		avatar,
		name,
		text
	} = testimonial;

	return (
		<article className="testimonial">
			<div className="testimonial__rating">
				<Rating current={rating} />
			</div>
			<div className="testimonial__user">
				<img className="testimonial__avatar" src={avatar} alt={name} />
				<h3 className="testimonial__name">{name}</h3>
			</div>
			<div className="testimonial__text">{text}</div>
		</article>
	);
}
