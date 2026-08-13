import { IconStar } from "../icons";
import "./rating.css";

export default function Rating ({ current, max = 5 }) {
	const starts = [];

	for (let i = 1; i <= max; i++) {
		const className = i <= current ? ' rating__star--active' : '';
		starts.push((
			<div className={`rating__star ${className}`} key={i}>
				<IconStar />
			</div>
		));
	}

	return (
		<>
			<meter className="sr-only" min="0" max={max} value={current}>
				{`Rated ${current} out of ${max} stars`}
			</meter>

			<div className="rating" role="presentation">
				{starts}
			</div>
		</>
	);
}