import React, { Component } from "react";
import "../../styles/index.scss";
import "../../styles/login.scss";
import wizardImageUrl from "../../img/wizard-big.png";
import varitaImageUrl from "../../img/varita.png";
import { Button } from "./button";

export const Register = () => (
	<div className="container">
		<div className="form-container">
			<form>
				<div className="text-center">
					<img src={varitaImageUrl} />
				</div>

				<h1 className="text-center mt-2">Sign Up for Free</h1>
				<label className="sr-only">Email </label>
				<input
					type="email"
					id="emailAddress"
					className="form-control mt-5"
					placeholder="Email Address"
					required
					autoFocus
				/>
				<label className="sr-only">Password </label>
				<input
					type="password"
					id="passwords"
					className="form-control mt-4"
					placeholder="Password"
					required
					autoFocus
				/>

				<div className=" text-center  mt-3">
					<button className="btn btn-lg btn-card btn-block" type="submit">
						Lets Do This! ⭐
					</button>
					<p className="text-center mt-3">
						Already have an account? <a href="/login">Login</a>
					</p>
				</div>
			</form>
		</div>
	</div>
);
