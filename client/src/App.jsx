import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Info from "./components/Info";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Track from "./components/Track";

import "./styles/App.css";

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route index element={<Track />} />
				<Route path="/info" element={<Info />} />
				<Route path="/create" element={<Create />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
