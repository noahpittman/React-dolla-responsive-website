import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>} exact></Route>
				<Route path="/signin" element={<SignInPage/>} exact></Route>
			</Routes>
		</Router>
	);
}

export default App;
