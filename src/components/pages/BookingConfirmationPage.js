import { Link } from "react-router";

export default function BookingConfirmationPage () {
    return (
        <section className="section-default">
			<div className="container">
                <h1>Congratulations!</h1>
                <p>Your table has been reserved!</p><br /><br />
                <Link to="/" className="btn btn--primary btn--lg">Return to home page</Link>
            </div>
        </section>
    );
}