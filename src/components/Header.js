import React, { useState } from "react";
import "./Header.css";
import {} from "react-router-dom";

const Header = (props) => {
	const routes = props.routes;

	const [showLinks, setShowLInks] = useState(true);

	const handleShowLink = () => {
		setShowLInks(!showLinks);
	};

	return (
		<>
			<header>
				<div className="navbar-logo">
					LOGO
					<button className="btn-burger" onClick={handleShowLink}>
						<span className="burger-bar"></span>
					</button>
				</div>
				<nav className={`navbar ${showLinks ? "" : "show-navbar"}`}>
					<ul className="navbar-links">
						{routes.map((itm, i) => (
							<li className="navbar-item" key={i}>
								<a className="navbar-link" href="./#">
									{itm.titre}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
