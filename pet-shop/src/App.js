import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<Sobre />} />


      <Route path="*" element={<h1> La página no existe </h1>}/> 
			</Routes>
		</Router>
	);
}

export default App;
