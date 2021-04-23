import React, { useState } from "react";
import { Box } from "./../component/box";
import "../../styles/index.scss";
//import "../../styles/card.scss";

//recordar cambiar id de los tabs!!

export const LearningPathView = () => {
    const [activeLinkIndex, setActiveLinkIndex] = useState(0);
    
	return (
		<div className="container">
			<div className="row my-4">
				<h2>MY FRONT-END PATH</h2>
			</div>
			<div className="row my-1">
				<div className="col-4">

					<div className="d-flex align-items-start">
						<div
							className="nav flex-column nav-pills me-3"
							id="v-pills-tab"
							role="tablist"
							aria-orientation="vertical">
							<button
								onClick={() => setActiveLinkIndex(0)}
								className={
									activeLinkIndex === 0 ? "btn btn-card p-3 m-1  active" : "btn btn-card p-3 m-1 "
								}
								id="v-pills-home-tab"
								data-bs-toggle="pill"
								data-bs-target="#v-pills-home"
								type="button"
								role="tab"
								aria-controls="v-pills-home"
								aria-selected="true">
								⭐ Html5
							</button>
							<button
								onClick={() => setActiveLinkIndex(1)}
								className={
									activeLinkIndex === 1 ? "btn btn-card p-3 m-1  active" : "btn btn-card p-3 m-1 "
								}
								id="v-pills-css-tab"
								data-bs-toggle="pill"
								data-bs-target="#v-pills-css"
								type="button"
								role="tab"
								aria-controls="v-pills-css"
								aria-selected="false">
								⭐ CSS
							</button>
							<button
								onClick={() => setActiveLinkIndex(2)}
								className={
									activeLinkIndex === 2 ? "btn btn-card p-3 m-1  active" : "btn btn-card p-3 m-1 "
								}
								id="v-pills-messages-tab"
								data-bs-toggle="pill"
								data-bs-target="#v-pills-messages"
								type="button"
								role="tab"
								aria-controls="v-pills-messages"
								aria-selected="false">
								⭐ JavaScript
							</button>
							<button
								onClick={() => setActiveLinkIndex(3)}
								className={
									activeLinkIndex === 3 ? "btn btn-card p-3 m-1  active" : "btn btn-card p-3 m-1 "
								}
								id="v-pills-settings-tab"
								data-bs-toggle="pill"
								data-bs-target="#v-pills-settings"
								type="button"
								role="tab"
								aria-controls="v-pills-settings"
								aria-selected="false">
								⭐ React
							</button>
						</div>
					</div>
				</div>

				<div className="col ">
					<div className="tab-content" id="v-pills-tabContent">
						<div
							className={activeLinkIndex === 0 ? "tab-pane fade show active" : "tab-pane fade"}
							// className="tab-pane fade show active"
							id="v-pills-home"
							role="tabpanel"
							aria-labelledby="v-pills-home-tab">
							<Box name="Html view" />
						</div>
						<div
							className={activeLinkIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"}
							// className="tab-pane fade"
							id="v-pills-css"
							role="tabpanel"
							aria-labelledby="v-pills-css-tab">
							<Box name="css view" />
						</div>
						<div
							className={activeLinkIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"}
							// className="tab-pane fade"
							id="v-pills-messages"
							role="tabpanel"
							aria-labelledby="v-pills-messages-tab">
							<Box name="js view" />
						</div>
						<div
							className={activeLinkIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"}
							// className="tab-pane fade"
							id="v-pills-settings"
							role="tabpanel"
							aria-labelledby="v-pills-settings-tab">
							<Box name="react view" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
