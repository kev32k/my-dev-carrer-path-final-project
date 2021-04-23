import React, { useState } from "react";
import PropTypes from "prop-types";

export const Box = props => {
    const [list, setlist] = useState([]);
    function handleEvent(e) {
		if (e.key === "Enter") {
			setlist([...list, e.target.value]);
		}
	}
	return (
		<div className="box position-relative p-4">
			<div className="box-row  p-2">
				{/* <h3>{props.name}</h3>

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
				</div> */}
                <ul className="list-group list-group-flus">
					{list.map((item, index) => {
						return (
							<li className="list-group-item " key={index}>
								{item}{" "}
								<button
									className="btn btn-danger"
									onClick={() => removeItem(index)}>
									X
								</button>
							</li>
						);
					})}

					<p>{list.length + "   item left"}</p>
				</ul>
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
