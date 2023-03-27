import React from "react";
import Header from "../Header";
import "./Home.css";

function Home() {
	return (
		<>
			<div>
				<Header />
			</div>
			<div className="container-home">
				<h1>Bienvenue sur notre agence web</h1>
			</div>
		</>
	);
}

export default Home;
