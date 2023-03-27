import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";

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
			<Routes>
				<Route path="/" element={<Header routes={routes} />} />
				<Route index element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
