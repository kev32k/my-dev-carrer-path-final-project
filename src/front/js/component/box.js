import React from "react";
import PropTypes from "prop-types";

export const Box = props => {
	return (
		<div className="box position-relative p-4">
			<div className="box-row  p-2">
				<h3>{props.name}</h3>

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
							In Progress
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
							Completed
						</label>
					</div>
				</div>
			</div>
			<div className="box-row row2 p-2 position-absolute bottom-0 start-50 translate-middle-x">
				<div className="mb-3 row">
					<label htmlFor="inputName" className="col-sm-2 col-form-label">
						name
					</label>
					<div className="col-sm-10">
						<input type="text" className="form-control" id="inputName" />
					</div>
				</div>
				<div className="mb-3 row">
					<label htmlFor="inputUrl" className="col-sm-2 col-form-label">
						url
					</label>
					<div className="col-sm-10">
						<input type="text" className="form-control" id="inputUrl" />
					</div>
				</div>
				<button className="btn btn-card p-1 m-1 position-absolute top-100 start-50 translate-middle">
					Add new ⭐
				</button>
			</div>
		</div>
	);
};

Box.propTypes = {
	name: PropTypes.string,
	content: PropTypes.string
};
