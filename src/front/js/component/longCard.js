import React, { Component, useContext } from "react";
import "../../styles/index.scss";
import "../../styles/login.scss";
import "../../styles/longCard.scss";
import wizardImageUrl from "../../img/wizard-big.png";
import varitaImageUrl from "../../img/varita.png";
import { Button } from "./button";
import frontendUrl from "../../img/back-end.jpg";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const LongCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row g-0 text-center">
				<div className="col-3 p-3">
					<img className="frontEnd border border-secondary" src={props.img} />
				</div>
				<div className="col-sm-9 p-3">
					<h3 className="text-start">{props.name}</h3>
					<p className="text-start">{props.content}</p>
					<div className="text-start">
						<Link key="0" to={"/learningpathview/" + props.view_state}>
							<button type="button" className="btn btn-card p-3 m-1">
								Add to my curricula
							</button>
						</Link>
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
};

LongCard.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	content: PropTypes.string,
	view_state: PropTypes.number
};
