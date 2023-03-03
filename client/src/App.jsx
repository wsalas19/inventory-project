import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import Create from "./components/Create";
import Info from "./components/Info";
import Nav from "./components/Nav";
import Track from "./components/Track";

import "./styles/App.css";

function App() {
	const user = useSelector((state) => state.users.user);
	return (
		<div className="App">
			{user.ok ? <Nav /> : null}

			<Routes>
				<Route element={<ProtectedRoutes />}>
					<Route index element={<Track />} />
					<Route path="/info" element={<Info />} />
					<Route path="/create" element={<Create />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
