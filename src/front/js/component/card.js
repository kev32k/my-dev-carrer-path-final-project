import React from "react";
import { Button } from "./button";

import "../../styles/index.scss";
import "../../styles/card.scss";

export const Card = () => {
	return (
		<div className="card p-2 m-4">
			<img src="https://via.placeholder.com/350x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h3>Front-End Developer</h3>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk.</p>
				<button className="btn btn-card p-3 m-1">Add career path ⭐</button>
			</div>
		</div>
	);
};
