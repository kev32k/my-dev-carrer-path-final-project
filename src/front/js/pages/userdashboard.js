import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/userdashboard.scss";
import profileImageUrl from "../../img/avatar-profile-200px.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const User_Dashboard = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	function handleLogOut() {
		sessionStorage.setItem("userToken", "");
		sessionStorage.clear();
		history.push("/login"); // whichever component you want it to route to
	}

	return (
		<div className="container my-5">
			<div className="main row">
				<div className="col md-9">
					<div className="row gutters-sm">
						<div className="col-md-4 mb-3">
							<div className="d-flex flex-column align-items-center text-center">
								<img img src={profileImageUrl} alt="Admin" className="" />
								<div className="mt-3">
									<h3 className="text-secondary mb-1">
										Howdy! <strong>{store.name}</strong>
									</h3>
									<button className="btn btn-outline-primary m-1">Change Picture</button>
									<button className="btn btn-outline-primary m-1">Change Password</button>
									<button className="btn btn-outline-primary m-1" onClick={handleLogOut}>
										Logout
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-8">
					<div className="row">
						<div className="col-sm-5">
							<p className="mb">My Carrer Path</p>
							<Link key="0" to={"/learningpathview/0"}>
								<button type="button" className="btn btn-card p-3 m-1">
									Front-End Developer
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
