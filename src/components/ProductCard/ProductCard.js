import { IconDelivery } from "../icons";
import "./product-card.css";

export default function ProductCard ({ product }) {
	const {
		url,
		name,
		description,
		price,
		image
	} = product;

	const priceFomater = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	return (
		<article className="product-card">
			<a className="product-card__picture" href={url}>
				<img src={image} alt={name} loading="lazy" />
			</a>
			<div className="product-card__info">
				<div className="product-card__header">
					<h3 className="product-card__name">
						<a href="{url}">{name}</a>
					</h3>
					<p className="product-card__price">
						<span className="sr-only">Price:</span> {priceFomater.format(price)}
					</p>
				</div>

				<p className="product-card__description">{description}</p>

				<a className="product-card__delivery-link" href="#">Order a delivery {<IconDelivery />}</a>
			</div>
		</article>
	);
}