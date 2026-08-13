import { Link } from "react-router";
import Main from "../Main/Main";

export default function UnderConstruction () {
	return (
		<Main>
			<section className="section-default">
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
		</Main>
	);
}