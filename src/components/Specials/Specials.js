import { useNavigate } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../Form/Button";
import "./specials.css";

export default function Specials ({ products }) {
	const navigate = useNavigate();

	const productItems = products.map(product => {
		return (
			<div className="col col-4 col-sm-12" key={product.id}>
				<ProductCard product={product} />
			</div>
		)
	});

	const ctaOnClick = () => {
		navigate('/menu');
	}

	return (
		<section className="specials">
			<div className="container">
				<div className="row">
					<div className="col col-12">
						<div className="specials__header">
							<h2 className="specials__title">This weeks specials!</h2>
							<Button type="button" size="lg" onClick={ctaOnClick}>Online Menu</Button>
						</div>
					</div>
				</div>
				<div className="row">
					{productItems}
				</div>
			</div>
		</section>
	);
}