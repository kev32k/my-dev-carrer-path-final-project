import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/index.scss";
import "../../styles/register.scss";

import { Register } from "../component/register";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Register />
		</div>
	);
};
