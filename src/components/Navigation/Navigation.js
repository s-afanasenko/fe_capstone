import { NavLink } from "react-router";

export default function Navigation ({ className }) {
	return (
		<nav className={className}>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/menu">Menu</NavLink>
				</li>
				<li>
					<NavLink to="/reserve-a-table">Reservations</NavLink>
				</li>
				<li>
					<NavLink to="/order-online">Order Online</NavLink>
				</li>
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
			</ul>
		</nav>
	);
}
