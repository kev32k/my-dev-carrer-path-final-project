import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/hero.scss";
import { Hero } from "../component/hero";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Hero />
		</div>
	);
};
