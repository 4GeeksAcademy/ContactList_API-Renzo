import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {

	const location = useLocation();

	return (
		<nav className={location.pathname == "/" ? "navbar navbar-light bg-light mb-3 container" : "navbar navbar-light bg-light mb-3 container hiddenNav"}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				<Link to="/new">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
