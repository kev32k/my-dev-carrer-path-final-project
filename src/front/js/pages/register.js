import React, { Component } from "react";
import "../../styles/index.scss";
import "../../styles/login.scss";
import wizardImageUrl from "../../img/wizard-big.png";
import starImageUrl from "../../img/star.png";

export const Register = () => (
	<div className="container">
		<div className="form-container">
			<form>
				<div className="text-center hat">
					<img src={starImageUrl} />
				</div>

				<h1 className="text-center mt-2">
					Sign Up{" "}
					<strong>
						<em>for Free</em>
					</strong>
				</h1>
				<label className="sr-only">Name </label>
				<input type="name" id="name" className="form-control mt-5" placeholder="Your Name" required autoFocus />
				<label className="sr-only">Email </label>
				<input
					type="email"
					id="emailAddress"
					className="form-control mt-4"
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

				<div className=" text-center  mt-4">
					<button className="btn btn-lg btn-card btn-block" type="submit">
						Create Account ⭐
					</button>
					<p className="text-center mt-3">
						Already have an account? <a href="/login">Login</a>
					</p>
				</div>
			</form>
			{/* {auth ? <Redirect to="/login" /> : null} */}
		</div>
	</div>
);

export const registerUser = () => {
	const [email, setEmail] = userState("");
	const [password, setPassword] = userState("");
	const [name, setName] = userState("");
	const [auth, setAuth] = userState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password,
			name: name
		};

		fetch("https://3001-indigo-angelfish-r697zt96.ws-us03.gitpod.io/register", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((res = res.json()))
			.then(data => {
				console.log(data);
				setAuth(true);
			})
			.catch(err => console.log(err));
	};
};
