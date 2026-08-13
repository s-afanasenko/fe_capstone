import picture from "../../assets/Mario and Adrian A.jpg";
import "./about.css";

export default function About () {
	return (
		<section className="about-section" aria-labelledby="about-title">
			<div className="container">
				<div className="row">
					<div className="col col-6 col-sm-12">
						<h2 className="about-section__title" id="avout-title">Little Lemon</h2>
						<p className="about-section__subtitle">Chicago</p>
						<div className="about-section__text" id="about-text">
							<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
							<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
						</div>
					</div>
					<div className="col col-6 col-sm-12 hidden-sm">
						<picture className="hero-banner__picture">
							<img src={picture} aria-describedby="about-title about-text" />
						</picture>
					</div>
				</div>
			</div>
		</section>
	);
}