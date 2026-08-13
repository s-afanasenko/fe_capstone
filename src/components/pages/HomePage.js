import { useNavigate } from "react-router";
import HeroBanner from '../HeroBanner/HeroBanner';
import hero from '../../assets/hero.png';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonials/Testimonials';
import About from '../About/About';

import productsData from '../../moks/products';
import testimonialsData from '../../moks/testimonials';

function HomePage() {
	const navigate = useNavigate();

	const HeroBannerOnClick = () => {
		navigate('/reserve-a-table');
	}

	return (
		<>
			<HeroBanner
				title="Little Lemon"
				subTitle="Chicago"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				CTAText="Reserve a Table"
				onClick={HeroBannerOnClick}
				imgSrc={hero}
			/>
			<Specials products={productsData} />
			<Testimonials testimonials={testimonialsData} />
			<About />
		</>
	);
}

export default HomePage;