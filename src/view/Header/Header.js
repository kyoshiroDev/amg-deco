import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
	const [showLinks, setShowLInks] = useState(true);

	const handleShowLink = () => {
		setShowLInks(!showLinks);
	};

	const location = useLocation();
	console.log(location);

	const routes = [
		{ titre: "ACCUEIL", to: "/Accueil" },
		{ titre: "RÉALISATION", to: "/Realisation" },
		{ titre: "PRESTATIONS ET TARIFS", to: "/Prestations-et-tarifs" },
		{ titre: "À PROPOS", to: "/A-propos" },
		{ titre: "CONTACT", to: "/Contact" },
	];

	return (
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
							<NavLink
								className={({ isActive, isPending }) =>
									isActive ? "active active:hover" : "navbar-link"
								}
								to={`${itm.to}`}
							>
								{itm.titre}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
