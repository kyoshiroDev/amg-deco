import "./App.css";
import Header from "./components/Header";

// import Home from "./components/Home/Home";

function App() {
	const routes = [
		{ titre: "ACCUEIL" },
		{ titre: "RÉALISATION" },
		{ titre: "PRESTATIONS ET TARIFS" },
		{ titre: "À PROPOS" },
		{ titre: "CONTACT" },
	];

	return (
		<div className="App">
			<Header routes={routes} />
			<main className="main-contenaire">
				<h1>Mon Site</h1>
			</main>
		</div>
	);
}

export default App;
