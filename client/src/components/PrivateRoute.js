import React from "react"
import { Route, Redirect } from "react-router-dom"

function PrivateRoute(props) {
	const {
		component: Component, // destructering the components that are passed through the PrivateRoute from App.js
		...rest	// rest holds all other valued other than the specific component above. 
	} = props

	return (
		
		<Route {...rest} render={(renderProps) => {
			if (localStorage.getItem("token")) {
				return <Component {...renderProps} />
			} else {
				return <Redirect to="/" />
			}
		}} />
	)
}

export default PrivateRoute

