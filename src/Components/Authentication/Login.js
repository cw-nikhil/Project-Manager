import React, { useState } from 'react';
import { login } from "../../ApiCalls";
import { Link } from "react-router-dom";

const Login = () => {
	const [message, setMessage] = useState("");
	const handleLogin = async e => {
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		if (!email || !password) {
			setMessage("Both email and password are required");
		}
		else {
			const result = await login(email, password);
			console.log(result);
			if (result.message === "success") {
				console.log(result);
			}
			setMessage(result.message);
		}
	}
	return (
		<>
			{message && <p>{message}</p>}
			<input type="text" placeholder="Enter your email" id="email"></input>
			<p>Email Address</p>
			<input type="password" placeholder="Enter your password" id="password"></input>
			<p>Password</p>
			<button onClick={() => handleLogin()}>Login</button>
			<Link to="/signup/">Signup</Link>
		</>
	)
}
export default Login
