import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/hero.scss";
import { Hero } from "../component/hero";
import { Login } from "../component/login";
import { Register } from "../component/register";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Login />
		</div>
	);
};
