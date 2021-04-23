import React from "react";
import PropTypes from "prop-types";

import "../../styles/index.scss";
import "../../styles/card.scss";

export const Card = props => {
	return (
		<div className="card p-2 m-4">
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h3>{props.name}</h3>
				<p className="card-text">{props.content}</p>
				<button className="btn btn-card p-3 m-1">Add career path ⭐</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	content: PropTypes.string
};
