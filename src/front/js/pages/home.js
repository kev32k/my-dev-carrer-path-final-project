import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import frontEndUrl from "../../img/front-end-main.jpeg";
import backEndUrl from "../../img/back-end.jpg";
import mobileUrl from "../../img/mobile-appp-dev.jpg";
import "../../styles/home.scss";
import "../../styles/hero.scss";
import { Hero } from "../component/hero";
import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const [cargo, setCargo] = useState(false);
	const [course, setCourse] = useState([]);

	// setInterval(() => {
	// 	store.careerpaths.length > 0 ? setCargo(true) : "";
	// }, 5000);

	console.log("front");
	// console.log(store.careerpaths[0]);
	//console.log(store.careerpaths[0].name);

	// useEffect(() => {
	// 	fetch("https://www.udemy.com/api-2.0/courses/959700/", {
	// 		method: "GET",
	// 		headers: {
	// 			Accept: "application/json, text/plain, */*",
	// 			Authorization:
	// 				"Basic YzhuVVQ5bHdxNHNjNWF5M09yVkl1eXF6R010MDFFVzJZenpMbXV1TDo5S0pzODFPdkFrV2NHbHhoV3lmbWFGMzZJcEo0ZE15QldJRTJiMDBEV216SmpqSjcza0l2bGZsZFZBNVRIbENOQ1B5ZURQc1VNMjIzZE51Njh2bE9QemgwVVM4eDMyVVlsdlJkM1dXTThMOWNsNXJxZVZoNlRsc1BCMXJ4V09FYw==",
	// 			"Content-Type": "application/json;charset=utf-8"
	// 		}
	// 	})
	// 		.then(response => {
	// 			console.log("aqui");
	// 			return response.json();
	// 		})
	// 		.then(data => {
	// 			console.log(data);
	// 			setCourse(data);
	// 		})
	// 		.catch(error => console.log(error));
	// }, []);

	// if (store.careerpaths[0] === undefined) {
	// 	console.log("waiting");
	// } else {
	// 	console.log("ready");
	// 	var imgItem = store.careerpaths[0].img;
	// 	console.log(imgItem);
	// }

	return (
		<div>
			<Hero />
			<div className="container">
				{/* <Card
						img={frontEndUrl}
						name="Front-End Developer"
						content="Get started as a front-end web developer.
	                    Add your online courses on HTML, CSS, Javascript, React, Angular, JQuery, and Bootstrap."
					/>
					<Card
						img={backEndUrl}
						name="Back-End Developer"
						content="Get started as a back-end web developer.
	                    Add your online courses on Java, Python, Node, Ruby, .Net, SQL, Apache and IIS Servers."
					/>
					<Card
						img={mobileUrl}
						name="Mobile Developer"
						content="Get started as an Android / Apple app developer.
	                    Add your online courses on Java, React Native, REST."
					/> */}

				{store.careerpaths ? (
					<div className="newOverflow">
						{store.careerpaths.map((item, index) => {
							return (
								<div key={index}>
									<div className="card-box">
										<Card name={item.name} />
									</div>
								</div>
							);
						})}
					</div>
				) : (
					console.log("loading")
				)}
				{/* <Card
						img={backEndUrl}
						// name={store.careerpaths[0].name}
						content="Get started as a back-end web developer.
	                    Add your online courses on Java, Python, Node, Ruby, .Net, SQL, Apache and IIS Servers."
					/> */}

				{/* <Card name={store.careerpaths[0].name} /> */}
				{/* {cargo ? (

								{store.careerpaths.map((item, index) => {
									return (
										<div key={index}>
											<div className="box">
												<Card img={item.img} name={item.name} content={item.skills} pos={index} />
											</div>
										</div>
									);
								})}

						) : (
							" "
						)} */}
			</div>

			{/* <div className="feature-title text-center mt-5">
				<h3>⭐ Editor Pick: Our Favorite Online Course of the Month ⭐</h3>
			</div>

			<div className="feature_card">
				<div className=" mt-5">
					<h5 className="card-header">Featured Course</h5>
					<div className="card-body">
						<h5 className="card-title">{course.title}</h5>
						<img src={course.image_480x270} />
						<p className="card-text">
							Understand React Native v0.62.2 with Hooks, Context, and React Navigation.
						</p>
						<a
							href={"https://www.udemy.com" + course.url}
							className="btn btn-primary mb-5"
							target="_blank"
							rel="noopener noreferrer">
							Go to Course
						</a>
					</div>
				</div>
			</div> */}
		</div>
	);
};
