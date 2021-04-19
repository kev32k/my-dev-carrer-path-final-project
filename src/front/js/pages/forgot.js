import React, { Component } from "react";
import "../../styles/index.scss";
import "../../styles/login.scss";
import hatImageUrl from "../../img/hat.png";

export const Forgot = () => (
	<div className="container">
		<div className="form-container">
			<form>
				<div className="text-center hat">
					<img src={hatImageUrl} />
				</div>

				<h4 className="text-center mt-2">
					Enter your email below for instructions on resetting your password.
				</h4>
				<label className="sr-only">Email </label>
				<input
					type="email"
					id="emailAddress"
					className="form-control mt-5"
					placeholder="Email Address"
					required
					autoFocus
				/>

				<div className=" text-center  mt-4">
					<button className="btn btn-lg btn-card btn-block" type="submit">
						Reset password ⭐
					</button>
				</div>
			</form>
		</div>
	</div>
);
