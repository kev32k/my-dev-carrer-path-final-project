import React, { Component } from "react";
import "../../styles/index.scss";

export const Recommended = () => {
	const [course, setCourse] = useState([]);

	useEffect(() => {
		fetch("https://www.udemy.com/api-2.0/courses/1362070/", {
			method: "GET",
			headers: {
				Accept: "application/json, text/plain, */*",
				Authorization:
					"Basic YzhuVVQ5bHdxNHNjNWF5M09yVkl1eXF6R010MDFFVzJZenpMbXV1TDo5S0pzODFPdkFrV2NHbHhoV3lmbWFGMzZJcEo0ZE15QldJRTJiMDBEV216SmpqSjcza0l2bGZsZFZBNVRIbENOQ1B5ZURQc1VNMjIzZE51Njh2bE9QemgwVVM4eDMyVVlsdlJkM1dXTThMOWNsNXJxZVZoNlRsc1BCMXJ4V09FYw==",
				"Content-Type": "application/json;charset=utf-8"
			}
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log("esta es la respuesta:", data);
				setCourse(data);
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="card mb-3" style={{ background: "max-width: 540px" }}>
			<div className="row g-0">
				<div className="col-md-4">
					<img src={course.image_480x270} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
