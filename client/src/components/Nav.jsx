import {
	Box,
	Button,
	Flex,
	Heading,
	Tag,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanUser } from "../redux/actions";
import "../styles/App.css";
import { FaMapMarkerAlt, FaInfoCircle, FaUserPlus } from "react-icons/fa";

function Nav() {
	const user = useSelector((state) => state.users.user);
	const { role, username } = user.user;
	const dispatch = useDispatch();
	const handleLogOut = (e) => {
		e.preventDefault();
		dispatch(cleanUser());
	};
	return (
		<>
			<Box className="nav-side" h={"100svh"} w={"25%"} bg={"gray.100"}>
				<Flex
					justifyContent={"space-between"}
					alignItems={"flex-start"}
					flexDirection={"column"}
					p={5}
					h={"inherit"}
				>
					<VStack pt={2}>
						<Heading size={"lg"} className="nav-heading">
							Stock Management App
						</Heading>
						<Tag
							alignSelf={"flex-start"}
							colorScheme={"blue"}
							w={"fit-content"}
						>
							{role}
						</Tag>
					</VStack>

					<VStack alignItems={"flex-start"} spacing={5} mt={"-80%"}>
						<Link to={"/"}>
							<Text
								display={"flex"}
								alignItems={"center"}
								gap={1}
								color={"gray.500"}
								fontWeight={"bold"}
							>
								<FaMapMarkerAlt /> Track
							</Text>
						</Link>
						<Link to={"/info"}>
							<Text
								display={"flex"}
								alignItems={"center"}
								gap={1}
								color={"gray.500"}
								fontWeight={"bold"}
							>
								<FaInfoCircle />
								Info
							</Text>
						</Link>

						{role === "admin" ? (
							<Link to={"/create"}>
								<Text
									display={"flex"}
									alignItems={"center"}
									gap={1}
									color={"gray.500"}
									fontWeight={"bold"}
								>
									<FaUserPlus />
									Create
								</Text>
							</Link>
						) : null}
					</VStack>

					<Button onClick={handleLogOut} w={"fit-content"} colorScheme={"red"}>
						Log out
					</Button>
				</Flex>
			</Box>
		</>
	);
}

export default Nav;
