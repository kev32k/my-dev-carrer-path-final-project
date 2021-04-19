import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../img/logo-nav.png";
import "../../styles/index.scss";

export const Navbar = () => {
	const [activeLinkIndex, setActiveLinkIndex] = useState(0);

	return (
		<nav className="navbar navbar-expand-md navbar-dark blue-gradient-bg collapse-dark-bg">
			<div className="container">
				<a href="/" className="navbar-brand">
					<img src={mainLogo} className="d-inline-block align-top" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#toggleMobileMenu"
					aria-controls="toggleMobileMenu"
					aria-expanded="false"
					aria-lable="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="toggleMobileMenu">
					<ul className="navbar-nav text-center ms-auto nav-pills ">
						<li>
							<Link
								onClick={() => setActiveLinkIndex(0)}
								className={activeLinkIndex === 0 ? "active nav-link" : ""}
								to="/">
								{" "}
								Home{" "}
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setActiveLinkIndex(1)}
								className={activeLinkIndex === 1 ? "active nav-link" : ""}
								to="/learningpath">
								{" "}
								Career Paths{" "}
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setActiveLinkIndex(2)}
								className={activeLinkIndex === 2 ? "active nav-link" : ""}
								to="/login">
								{" "}
								Login{" "}
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setActiveLinkIndex(3)}
								className={activeLinkIndex === 3 ? "active nav-link" : ""}
								to="/register">
								{" "}
								Register{" "}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
