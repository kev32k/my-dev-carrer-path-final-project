import React, { useState, useContext } from "react";
import { Front_End_Box } from "../component/boxes/front_end_box";
import { Back_End_Box } from "../component/boxes/back_end_box";
import { Mobile_Box } from "../component/boxes/mobile_box";
import { Link } from "react-router-dom";
import adImageUrl from "../../img/ad.png";
import "../../styles/index.scss";
//import "../../styles/card.scss";

import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const LearningPathView = () => {
	const { store, actions } = useContext(Context);
	const [activeLinkIndex, setActiveLinkIndex] = useState(2);
	const params = useParams();

	return (
		<div className="container">
			<div className="row my-4 feature-title">
				<h3>Add a bookmark to your online courses:</h3>
			</div>
			<Link to="/userdashboard">
				<button className="btn btn-card " type="button">
					Go to my Dashboard
				</button>
			</Link>
			<section className="ads mt-5 border">
				<img
					src={adImageUrl}
					to="https://www.udemy.com/course/html-css-bootstrap-build-your-first-website-today/"
				/>
			</section>

			<div className="row my-1">
				<div className="col-4">
					<div className="d-flex align-items-start">
						<div
							className="nav flex-column nav-pills me-3"
							id="v-pills-tab"
							role="tablist"
							aria-orientation="vertical"
						/>
					</div>
				</div>

				<div className="col box">
					<div className="tab-content" id="v-pills-tabContent">
						{params.box_indicator == 0 ? (
							<div
								className={"tab-pane fade show active"}
								// className="tab-pane fade show active"
								id="v-pills-home"
								role="tabpanel"
								aria-labelledby="v-pills-home-tab">
								<Front_End_Box name="Front End Online Course" />
							</div>
						) : (
							""
						)}

						{params.box_indicator == 1 ? (
							<div
								className={"tab-pane fade show active"}
								// className="tab-pane fade"
								id="v-pills-css"
								role="tabpanel"
								aria-labelledby="v-pills-css-tab">
								<Back_End_Box name="Back End Online Course" />
							</div>
						) : (
							""
						)}

						{params.box_indicator == 2 ? (
							<div
								className={"tab-pane fade show active"}
								// className="tab-pane fade"
								id="v-pills-messages"
								role="tabpanel"
								aria-labelledby="v-pills-messages-tab">
								<Mobile_Box name="Mobile Development Course" />
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</div>
	);
	//}
};
