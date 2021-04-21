import React, { useState } from "react";
import "../../styles/index.scss";
//import "../../styles/card.scss";

export const LearningPathView = () => {
	const [activeLinkIndex, setActiveLinkIndex] = useState(0);
	return (
		<div className="container">
			<div className="row my-4">
				<h2>MY FRONT-END PATH</h2>
			</div>
			<div className="row my-1">
				<div className="col-4">
					{/* <button className="btn btn-card p-3 m-1">Add career path ⭐</button>
					<button className="btn btn-card p-3 m-1">Add career path ⭐</button>
					<button className="btn btn-card p-3 m-1">Add career path ⭐</button>
					<button className="btn btn-card p-3 m-1">Add career path ⭐</button> */}

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
								role="tab">
								⭐ Html5
							</button>
							<button
								onClick={() => setActiveLinkIndex(1)}
								className={
									activeLinkIndex === 1 ? "btn btn-card p-3 m-1  active" : "btn btn-card p-3 m-1 "
								}
								id="v-pills-profile-tab"
								data-bs-toggle="pill"
								data-bs-target="#v-pills-profile"
								type="button"
								role="tab">
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
								role="tab">
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
								role="tab">
								⭐ React
							</button>
						</div>

						{/* <div className="tab-content" id="v-pills-tabContent">
							<div
								className="tab-pane fade show active"
								id="v-pills-home"
								role="tabpanel"
								aria-labelledby="v-pills-home-tab">
								...
							</div>
							<div
								className="tab-pane fade"
								id="v-pills-profile"
								role="tabpanel"
								aria-labelledby="v-pills-profile-tab">
								...
							</div>
							<div
								className="tab-pane fade"
								id="v-pills-messages"
								role="tabpanel"
								aria-labelledby="v-pills-messages-tab">
								...
							</div>
							<div
								className="tab-pane fade"
								id="v-pills-settings"
								role="tabpanel"
								aria-labelledby="v-pills-settings-tab"
							/>
						</div> */}
					</div>
				</div>
				<div className="col">
					<div className="box p-4">
						<div className="box-row p-2">
							<h3>From zero to hero in html5</h3>
							{/*esto va a cambiar segun lo que se agrega y usara props posiblememnte*/}
							<span>
								<a href="https://www.freecodecamp.org/learn/">https://www.freecodecamp.org/learn/</a>
							</span>
							<div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label className="form-check-label" htmlFor="inlineRadio1">
										1
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="option2"
									/>
									<label className="form-check-label" htmlFor="inlineRadio2">
										2
									</label>
								</div>
							</div>
						</div>
						<div className="box-row p-2 align-bottom">
							<span>
								Course Name
								<input
									type="name"
									id="name"
									className=" m-1"
									placeholder="Course Name"
									required
									autoFocus
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
