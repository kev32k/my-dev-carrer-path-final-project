import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "../../styles/hero.scss";
import { Hero } from "../component/hero";
import { Login } from "../component/login";
import { LongCard } from "../component/longCard";
import frontEndUrl from "../../img/front-end-main.jpeg";
import backEndUrl from "../../img/back-end.jpg";
import mobileUrl from "../../img/mobile-appp-dev.jpg";
import { Breadcrumb } from "react-bootstrap";

export const LearningPath = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row mt-5 mx-4 feature-title">
				<h3>Select a career path to start adding your online courses</h3>
			</div>
			<LongCard
				img={frontEndUrl}
				name="Become a Front-End Expert"
				content="Get started as a front-end web developer. 
                    Add your online courses on HTML, CSS, Javascript, React, Angular, JQuery, and Bootstrap."
				view_state={0}
			/>
			<LongCard
				img={backEndUrl}
				name="Become a Back-End Developer"
				content="Get started as a back-end web developer. 
                    Add your online courses on Java, Python, Node, Ruby, .Net, SQL, Apache and IIS Servers."
				view_state={1}
			/>
			<LongCard
				img={mobileUrl}
				name="Become a Mobile App Developer"
				content="Get started as an Android / Apple app developer. 
                    Add your online courses on Java, React Native, REST."
				view_state={2} //variable que me indique cual box ensenar
			/>
		</div>
	);
};
