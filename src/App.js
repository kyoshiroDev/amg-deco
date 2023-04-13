import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./view/Header/Header";
import Footer from "./view/Footer/Footer";

import Home from "./components/Home/Home";
import Realisation from "./components/Realisation/Realisation";
import PrestationsEtTarifs from "./components/Prestations et tarifs/PrestationsEtTarifs";
import Apropos from "./components/A propos/Apropos";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/Accueil" element={<Home />} />
				<Route path="/Realisation" element={<Realisation />} />
				<Route
					path="/Prestations-et-tarifs"
					element={<PrestationsEtTarifs />}
				/>
				<Route path="/A-propos" element={<Apropos />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
