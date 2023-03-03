import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import mapboxgl from "mapbox-gl";
import { store } from "./redux/config";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/index.css";
import axios from "axios";

mapboxgl.accessToken =
	"pk.eyJ1Ijoid3NhbGFzMTkiLCJhIjoiY2xlcHg0dnJtMDEwMTN6cXUyejF2NHB1ayJ9.visqsU_0hEQugqgcJbHBbQ";
axios.defaults.baseURL = process.env.API_DEPLOY || "http://localhost:3001";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<ChakraProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</ChakraProvider>
		</Router>
	</React.StrictMode>
);
