import React, { Component } from "react";
import "../../styles/index.scss";
import "../../styles/login.scss";
import wizardImageUrl from "../../img/wizard-big.png";

export const Login = () => (
	<div className="container">
		<div className="text-center">
			<form>
				<h1>Login</h1>
				<label className="sr-only">Email address </label>
				<input
					type="email"
					id="emailAddress"
					className="form-control"
					placeholder="Email Address"
					required
					autoFocus
				/>
				<label className="sr-only">Password </label>
				<input
					type="password"
					id="passwords"
					className="form-control"
					placeholder="Password"
					required
					autoFocus
				/>
			</form>
		</div>
	</div>
);
