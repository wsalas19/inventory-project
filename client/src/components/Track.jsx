import { Box, Flex, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import mapboxgl from "mapbox-gl";

function Track() {
	const user = useSelector((state) => state.users.user);
	const [loading, setLoading] = useState(true);
	const { username, email } = user.user;
	const p = user.user.package;
	const mapDiv = useRef(null);
	//10.963951, -74.822349
	useLayoutEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1200);
		const map = new mapboxgl.Map({
			container: "mapdiv", // container ID
			style: "mapbox://styles/mapbox/streets-v12", // style URL
			center: [-74.79661, 10.972313], // starting position [lng, lat]
			zoom: 12, // starting zoom
		});
		const marker = new mapboxgl.Marker(mapDiv)
			.setLngLat([-74.822349, 10.963951])
			.addTo(map);
	}, [loading]);
	return (
		<>
			<Box p={5} w={"75%"}>
				<Flex justifyContent={"center"}>
					<Text color={"gray.500"} fontWeight={"medium"}>
						Welcome back, {username}
					</Text>
				</Flex>
				<VStack spacing={2} alignItems={"flex-start"}>
					<Heading mb={6} size={"md"}>
						Dashboard
					</Heading>
					<Text color={"gray.500"} fontWeight={"medium"}>
						Email:
					</Text>
					<Text>{email}</Text>
					<Text color={"gray.500"} fontWeight={"medium"}>
						Package:
					</Text>
					<Text>{p ? p : "No package asigned yet."}</Text>
				</VStack>
				<Heading mt={6} mb={6} size={"md"}>
					Map
				</Heading>

				<div
					id="mapdiv"
					ref={mapDiv}
					style={{
						padding: "50px",
						height: "500px",
						width: "100%",
					}}
				></div>

				<div
					ref={mapDiv}
					className={"marker"}
					style={{
						height: "50px",
						width: "50px",
					}}
				></div>
			</Box>
		</>
	);
}

export default Track;
