import React, { Component } from "react";
import "/workspace/my-dev-carrer-path-final-project/src/front/styles/index.scss";
import "/workspace/my-dev-carrer-path-final-project/src/front/styles/footer.scss";
import mainLogo from "../../img/logo-nav.png";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center blue-gradient-bg">
		<div className="container p-4 pb-0 ">
			<section className="">
				<p className="d-flex justify-content-center align-items-center">
					<img className="logo" src={mainLogo} />
				</p>
			</section>
		</div>
		<div className="text-center p-3">
			<p className="text-white">
				© 2021 All Rights Reserved.{" "}
				<a className="text-white" href=" https://mydevcareerpath.com/">
					MyDevCareerPath.com
				</a>
			</p>
		</div>
	</footer>
);
