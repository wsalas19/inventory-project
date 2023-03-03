import {
	Box,
	Button,
	Flex,
	Heading,
	Spinner,
	Text,
	VStack,
} from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import mapboxgl from "mapbox-gl";
import { getAllPackagesAdmin, getPackageUser } from "../redux/actions";
import { Link } from "react-router-dom";

function Track() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.users.user);
	const [loading, setLoading] = useState(true);
	const { username, email, role } = user.user;
	const p = user.user.package;
	const mapDiv = useRef(null);

	useLayoutEffect(() => {
		if (role === "op") {
			dispatch(getPackageUser(p));
		}
		if (role === "admin") {
			dispatch(getAllPackagesAdmin());
		}
	}, [user]);
	const allPackages = useSelector((state) => state.packages.allPackages);
	const userPackage = useSelector((state) => state.packages.package);
	const coordinates = userPackage.coordinates;

	//10.963951, -74.822349
	useLayoutEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1200);
		const map = new mapboxgl.Map({
			container: "mainBox", // container ID
			style: "mapbox://styles/mapbox/streets-v12", // style URL
			center: /* coordinates || */ [-74.102735, 4.664134], // starting position [lng, lat] // 4.664134, -74.102735
			zoom: 11, // starting zoom
		});
		// change the map style
		map.setStyle("mapbox://styles/mapbox/light-v10");
		//set marker for package
		if (role === "op" && userPackage) {
			const marker = new mapboxgl.Marker(mapDiv)
				.setLngLat(coordinates) //4.640344, -74.068341
				.addTo(map);
		}
		if (role === "admin") {
			allPackages.map((p) => {
				if (p.coordinates.length > 0) {
					const marker = new mapboxgl.Marker(mapDiv)
						.setLngLat(p.coordinates) //4.640344, -74.068341
						.addTo(map);
				}
			});
		}
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
					<Text>{p ? userPackage.name : "No package asigned yet."}</Text>
					{p ? (
						<Flex flexDirection={"column"}>
							<Text color={"gray.500"} fontWeight={"medium"}>
								Package address:
							</Text>
							<Text>{userPackage.address}</Text>
						</Flex>
					) : null}
				</VStack>
				<Heading mt={6} mb={6} size={"md"}>
					Map
				</Heading>

				<div
					id="mainBox"
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

				{role === "admin"
					? allPackages.map((p) => {
							return (
								<div
									key={p._id}
									className={"marker"}
									style={{
										height: "50px",
										width: "50px",
									}}
								></div>
							);
					  })
					: null}
			</Box>
		</>
	);
}

export default Track;
