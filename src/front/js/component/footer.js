import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="container p-4 pb-0">
			<section className="">
				<p className="d-flex justify-content-center align-items-center">
					<span className="me-3">Register for free</span>
					<button type="button" className="btn btn-outline-light btn-rounded">
						Sign up!
					</button>
				</p>
			</section>
		</div>
		<div className="text-center p-3">
			© 2021 Copyright:
			<a className="text-white" href="https://mydevcareerpath.com/">
				MyDevCareerPath.com
			</a>
		</div>
	</footer>
);
