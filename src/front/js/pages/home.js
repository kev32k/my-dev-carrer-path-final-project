import React, { useContext } from "react";
import { Context } from "../store/appContext";
import frontEndUrl from "../../img/front-end-main.jpeg";
import backEndUrl from "../../img/back-end.jpg";
import mobileUrl from "../../img/mobile-appp-dev.jpg";
import "../../styles/home.scss";
import "../../styles/hero.scss";
import { Hero } from "../component/hero";
import { Card } from "../component/card";
import { Login } from "../component/login";
import { Breadcrumb } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Hero />
			<div className="row m-5 d-flex justify-content-center">
				<Card
					img={frontEndUrl}
					name="Front-End Developer"
					content="Some quick example text to build on the card title and make up the bulk."
				/>
				<Card
					img={backEndUrl}
					name="Back-End Developer"
					content="Some quick example text to build on the card title and make up the bulk."
				/>
				<Card
					img={mobileUrl}
					name="Mobile Developer"
					content="Some quick example text to build on the card title and make up the bulk."
				/>
			</div>
		</div>
	);
};
