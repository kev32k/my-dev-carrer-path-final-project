import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/hero.scss";
import { Hero } from "../component/hero";
import { Login } from "../component/login";
import { Register } from "../component/register";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Login />
		</div>
	);
};

export const loginUser = () =>{
    const [email, setEmail] = userState("");
    const [password, setPassword] = userState("");

    const handleSubmit = e => {
        e.preventDefault();

        const body = {
            email:email,
            password:password,
        };

        fetch("https://3001-indigo-angelfish-r697zt96.ws-us03.gitpod.io/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res = res.json())
        .then(data => {
            console.log(data);
            setAuth(true);
        })
        .catch(err => console.log(err));
    };
    
}