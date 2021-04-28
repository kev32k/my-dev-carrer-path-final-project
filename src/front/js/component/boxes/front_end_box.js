import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

export const Front_End_Box = props => {
	const { store, actions } = useContext(Context);
	const [list, setList] = useState([]);
	const [name, setName] = useState("");
	const [url, setUrl] = useState("");

	function handleChangeName(event) {
		setName(event.target.value);
	}

	function handleChangeUrl(event) {
		setUrl(event.target.value);
	}

	function handleChangeSkill(event) {
		setSkill(event.target.value);
	}

	function handleAdd() {
		const newList = list.concat({ name, url });

		setList(newList);
	}

	return (
		<div className=" p-4">
			<h3>{props.name}</h3>
			{list.map(item => (
				<div className="box-row my-2 p-2" key={item.id}>
					<h3>{item.name}</h3>

					<span>
						<a href={item.url}>{item.url}</a>
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
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="option2"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								Not started yet
							</label>
						</div>
					</div>
				</div>
			))}
			<div className="box-row row2 my-2 p-2 position-relative">
				<div className="mb-3 row">
					<label htmlFor="inputName" className="col-sm-2 col-form-label">
						Course name
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputName"
							value={name}
							onChange={handleChangeName}
						/>
					</div>
				</div>
				<div className="mb-3 row">
					<label htmlFor="inputUrl" className="col-sm-2 col-form-label">
						Course link
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputUrl"
							value={url}
							onChange={handleChangeUrl}
						/>
					</div>
				</div>
				<div className="mb-3 row">
					<label htmlFor="inputSkill" className="col-sm-2 col-form-label">
						Course skill
					</label>
					<div className="col-sm-10">
						<div className="input-group mb-3">
							<select className="custom-select form-control" id="inputGroupSelect01 inputSkill">
								<option selected>Select a skill....</option>
								<option value="1">HTML5</option>
								<option value="2">CSS</option>
								<option value="3">Javascript</option>
							</select>
						</div>
					</div>
				</div>
				<button
					className="btn btn-card p-1 m-1 position-absolute top-100 start-50 translate-middle"
					onClick={handleAdd}>
					Add new ⭐
				</button>
			</div>
		</div>
	);
};

Front_End_Box.propTypes = {
	name: PropTypes.string,
	content: PropTypes.string
};
