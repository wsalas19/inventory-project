import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPackageUser } from "../redux/actions";

function Info() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.users.user);
	const { username, email, role } = user.user;
	const p = user.user.package;
	const dataFetched = useRef(false);
	useEffect(() => {
		if (dataFetched.current) return;
		dataFetched.current = true;
		if (role === "op") {
			dispatch(getPackageUser(p));
		}
	}, []);
	const userPackage = useSelector((state) => state.packages.package);
	//const coordinates = userPackage.coordinates;
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
						<Flex gap={2} flexDirection={"column"}>
							<Text color={"gray.500"} fontWeight={"medium"}>
								Package address:
							</Text>
							<Text>{userPackage.address}</Text>
							<Text color={"gray.500"} fontWeight={"medium"}>
								Package asigned:
							</Text>
							<Text>{userPackage.name}</Text>
							<Text color={"gray.500"} fontWeight={"medium"}>
								Notes:
							</Text>
							<Text>{userPackage.notes}</Text>
							<Text color={"gray.500"} fontWeight={"medium"}>
								Image:
							</Text>
							<Image src={userPackage.image} alt="packagedemo" />
						</Flex>
					) : null}
				</VStack>
			</Box>
		</>
	);
}

export default Info;
