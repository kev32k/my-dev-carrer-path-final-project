import React, { Component } from "react";
import "../../styles/index.scss";
import "../../styles/login.scss";
import "../../styles/learningPath.scss";
import wizardImageUrl from "../../img/wizard-big.png";
import varitaImageUrl from "../../img/varita.png";
import { Button } from "./button";
import frontendUrl from "../../img/back-end.jpg";

export const LearningPath = () => {
	return (
		/*<div className="container">
			<div className="card horizontal ora">
				<div className="card-image">
					<img className="frontEnd" src={frontendUrl} />
				</div>
				<div className="card-stacked">
					<div className="card-content">
						<h3>Become a Front-End Expert</h3>
						<p>Get started.</p>
						<button className="btn btn-styled blue-gradient-bg">Add to my curricula</button>
					</div>
				</div>
			</div>
        </div>*/
		<div className="card">
			<div className="row row-cols-lg-auto g-3 align-items-center">
				<div className="col-2 ora">
					<img src={frontendUrl} className="card-img-top h-100 frontEnd" alt="..." />
				</div>
				<div className="col-5">
					<div className="card-body">
						<h5 className="card-title">Alice Liddel</h5>
						<p className="card-text">
							Alice is a freelance web designer and developer based in London. She is specialized in
							HTML5, CSS3, JavaScript, Bootstrap, etc.
						</p>
						<a href="#" className="btn btn-primary stretched-link">
							View Profile
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
