import { Box, Flex, Heading, Tag, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import { FaMapMarkerAlt, FaInfoCircle, FaUserPlus } from "react-icons/fa";

function Nav() {
	return (
		<>
			<Box h={"100svh"} w={"25%"} bg={"gray.100"}>
				<Flex alignItems={"flex-start"} flexDirection={"column"} p={5}>
					<VStack>
						<Heading size={"lg"} className="nav-heading">
							Stock Management App
						</Heading>
						<Tag
							alignSelf={"flex-start"}
							colorScheme={"blue"}
							w={"fit-content"}
						>
							{"user type"}
						</Tag>
					</VStack>

					<VStack alignItems={"flex-start"} spacing={5} mt={"100px"}>
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
					</VStack>
				</Flex>
			</Box>
		</>
	);
}

export default Nav;
