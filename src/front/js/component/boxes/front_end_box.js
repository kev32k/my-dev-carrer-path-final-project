import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export const Front_End_Box = props => {
	const { store, actions } = useContext(Context);
	const [list, setList] = useState([]);
	const [course_name, setName] = useState("");
	const [course_url, setUrl] = useState("");
	const [skill_id, setValue] = useState("");
	let valueN = parseInt(skill_id) - 1;
	const [skill, setSkill] = useState("");

	const handleSelect = e => {
		console.log(e);
		//console.log(n);
		setValue(e);
		setSkill(store.all_skills[parseInt(e) - 1].name);
		//setSkill(store.all_skills[valueN] !== undefined ? store.all_skills[valueN+1].name : "empty");
		//handleChangeSkill();
	};

	function handleChangeName(event) {
		setName(event.target.value);
	}

	function handleChangeUrl(event) {
		setUrl(event.target.value);
	}

	function handleChangeSkill(event) {
		console.log("selecting...");
		console.log("event");
		console.log(event);
		//setSkill(event);
		//setSkill(store.all_skills[valueN] !== undefined ? store.all_skills[valueN + 1].name : "empty");
	}

	function handleAdd() {
		const newList = list.concat({ course_name, course_url, skill_id, skill });
		//console.log(value);

		//actions.add_career_link(name, url, value);

		setList(newList);
		console.log(newList);

		// var myHeaders = new Headers();
		// myHeaders.append("Authorization", "Bearer " + store.bearer_token);
		// myHeaders.append("Content-Type", "application/json");

		// var raw = JSON.stringify({
		// 	course_name: "sdf",
		// 	course_url: "udecmy.com",
		// 	skill_id: "1"
		// });

		// var requestOptions = {
		// 	method: "POST",
		// 	headers: myHeaders,
		// 	body: raw,
		// 	redirect: "follow"
		// };

		// fetch(store.global_url + "api/publish-careerlinks", requestOptions)
		// 	.then(response => response.text())
		// 	.then(result => ccc)
		// 	.catch(error => console.log("error", error));
		console.log(store.bearer_token);
		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + store.bearer_token);
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			course_name: course_name,
			course_url: course_url,
			skill_id: skill_id
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch(process.env.BACKEND_URL + "/api/publish-careerlinks", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}

	useEffect(() => {
		var requestOptions = {
			method: "GET",
			redirect: "follow"
		};
		fetch(process.env.BACKEND_URL + "/api/careerlink/all", requestOptions)
			.then(response => response.json())
			.then(result => setList(result))
			.catch(error => console.log("error", error));
	}, []);
	return (
		<div className=" p-4">
			<h3>{props.name}</h3>
			{list.map(item => (
				<div className="box-row my-2 p-2" key={item.id}>
					<h3>{item.course_name}</h3>

					<span>
						<a href={item.course_url}>{item.course_url}</a>
					</span>
					<span>
						<p>{item.skill}</p>
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
							value={course_name}
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
							value={course_url}
							onChange={handleChangeUrl}
						/>
					</div>
				</div>
				<div className="mb-3 row">
					<label htmlFor="inputSkill" className="col-sm-2 col-form-label">
						Course skill
					</label>
					<div className="col-sm-10">
						{/* <div className="input-group mb-3">
							{store.front_end_skills.map((item, index) => {
								return (
									<input
										key={index}
										className="btn btn-primary"
										type="button"
										value={item.name}
										onClick={console.log(index)}
									/>
								);
							})}
                            
						</div> */}
						<DropdownButton
							alignRight
							title={
								store.all_skills[valueN] !== undefined ? store.all_skills[valueN].name : "Select Skill"
							}
							id="dropdown-menu-align-right"
							onSelect={handleSelect}>
							{store.front_end_skills.map((skillItem, indexSkill) => {
								console.log(indexSkill);
								return (
									<Dropdown.Item eventKey={skillItem.id} key={indexSkill} value={skillItem.name}>
										{skillItem.name}
									</Dropdown.Item>
								);
							})}
							{/* <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
							<Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
							<Dropdown.Item eventKey="option-3">option 3</Dropdown.Item> */}
							{/* <Dropdown.Divider />
							<Dropdown.Item eventKey="some link">some link</Dropdown.Item> */}
						</DropdownButton>
						{console.log(store.all_skills[valueN])}
						{/* <h4>You selected {store.all_skills[valueN].name}</h4> */}
					</div>
				</div>
				<button
					className="btn btn-card p-1 m-1 position-absolute top-100 start-50 translate-middle"
					onClick={handleAdd}>
					Add new course ⭐
				</button>
			</div>
		</div>
	);
};

Front_End_Box.propTypes = {
	name: PropTypes.string,
	content: PropTypes.string
};
