import { Link } from "react-router";

export default function UnderConstruction () {
	return (
		<section className="under-construction">
			<div className="container">
				<div className="row">
					<div className="col col-12">
						<h1>Page is under construction</h1>
						<p>
							<Link to="/">Return to Home Page</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}