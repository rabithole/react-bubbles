import React, { useState } from "react";
// import axios from 'axios';
import axiosWithAuth from "../utils/axiosWithAuth"

const Login = (props) => {
 	const [error, setError] = useState()
	const [data, setData] = useState({
		username: "",
		password: "",
	})

	const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		axiosWithAuth()
			.post("/api/login", data)
			.then((result) => {
				// console.log(result)
				localStorage.setItem("token", result.data.payload)
				// Redirect the user to their account page after logging in
				props.history.push("/BubblePage")
			})
			.catch((error) => {
				setError(error.response.data)
			})
	}

	return (
		<div>
			<h1>Login</h1>

			<form onSubmit={handleSubmit}>
				<input
					type="username"
					name="username"
					placeholder="Username"
					value={data.username}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={data.password}
					onChange={handleChange}
				/>
				<button type="submit" id='signInButton'>Sign In</button>
			</form>
		</div>
	)
}

export default Login;

// {error && <div className="error">{error}</div>}
