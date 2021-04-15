import React, { Component } from "react";
import "../../styles/index.scss";
import "../../styles/hero.scss";
import wizardImageUrl from "../../img/wizard-big.png";

export const Hero = () => (
	<div className="jumbotron jumbotron-fluid blue-gradient-bg">
		<div className="container pt-5">
			<section className="row">
				<div className="col-sm hero-text">
					<h1>Messy Bookmark Bar?</h1>
					<h2 className="mt-5 yellow-star">
						Keep Acces To Your Online Courses Organized And Updated{" "}
						<strong>
							<em>In One Place</em>
						</strong>
					</h2>
				</div>
				<div className="col-sm">
					<img src={wizardImageUrl} />
				</div>
			</section>
		</div>
	</div>
);
