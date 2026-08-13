import { Outlet } from "react-router";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function DefaultPageLayout () {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
}

export default DefaultPageLayout;