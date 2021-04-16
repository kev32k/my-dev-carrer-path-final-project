import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/hero.scss";
import { Hero } from "../component/hero";
import { Card } from "../component/card";
import { Login } from "../component/login";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Hero />
			<div className="container">
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
