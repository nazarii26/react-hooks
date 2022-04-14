import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import './../App.css';
import './style.css';


export const Layout = () => {

	return (
		<>
			<div className="container">
				<header className="header-line">
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
				</header>
				<Outlet />
				<footer> <p className="footer-name">Nazarii Pirih</p></footer>
			</div>
		</>

	);
};
