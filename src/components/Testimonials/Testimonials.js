import Testimonial from "../Testimonial/Testimonial";
import "./testimonials.css";

export default function Testimonials ({ testimonials }) {
	console.log(testimonials);
  const items = testimonials.map(testimonial => (
		<div className="col col-3" key={testimonial.id}>
			<Testimonial testimonial={testimonial} />
		</div>
	));

	return (
		<section className="testimonials">
			<div className="container">
				<div className="row">
					<div className="col col-12">
						<div className="testimonials__header">
							<h2 className="testimonials__title">Testimonials</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{items}
				</div>
			</div>
		</section>
	);
}