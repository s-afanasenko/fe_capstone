import "./button.css";

export default function Button ({
	children,
	onClick,
	type = 'submit',
	size = 'sm'
}) {
	return (
		<button
			type={type}
			className={`btn btn--primary btn--${size}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}