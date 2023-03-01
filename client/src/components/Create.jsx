import {
	Box,
	Flex,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Select,
	useToast,
} from "@chakra-ui/react";
import { createUser, getAllUsersLoaded } from "../redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Create() {
	const toast = useToast();
	const dispatch = useDispatch();
	const [inputUser, setInputUser] = useState({
		username: "",
		email: "",
		password: "123",
	});
	const [inputPackage, setInputPackage] = useState({
		name: "",
		notes: "",
		user: "",
		image: "",
	});
	const [create, setCreate] = useState(false);

	const handleUserInput = (e) => {
		const { name, value } = e.target;
		setInputUser({ ...inputUser, [name]: value });
	};
	const handlePackageInput = (e) => {
		const { name, value } = e.target;
		setInputPackage({ ...inputPackage, [name]: value });
	};

	const handleSubmitPackage = (e) => {
		e.preventDefault();
		console.log(inputPackage);
	};
	const handleSubmitUser = (e) => {
		e.preventDefault();
		let info = { ...inputUser, role: "op" };
		try {
			dispatch(createUser(info));
			setCreate(!create);
			toast({
				title: "User Created",
				description: `${inputUser.username} was created`,
				status: "success",
				duration: 2000,
				isClosable: true,
			});
			setInputUser({
				username: "",
				email: "",
				password: "123",
			});
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		dispatch(getAllUsersLoaded());
	}, [create]);

	const users = useSelector((state) => state.users.allUsers);

	return (
		<>
			<Box p={5} w={"75%"}>
				<Flex flexDirection={"column"}>
					<Heading mb={10} size={"md"}>
						Create User
					</Heading>
					<FormControl>
						<FormLabel>Username:</FormLabel>
						<Input
							onChange={handleUserInput}
							name="username"
							id="username"
							value={inputUser.username}
							w={"20%"}
						/>
						<FormLabel>Email:</FormLabel>
						<Input
							onChange={handleUserInput}
							name="email"
							value={inputUser.email}
							w={"20%"}
						/>
						<FormLabel>Password:</FormLabel>
						<Input
							name="password"
							id="password"
							bg={"gray.200"}
							type={"password"}
							readOnly
							placeholder={inputUser.password}
							w={"20%"}
						/>
					</FormControl>
					<Button
						onClick={handleSubmitUser}
						mt={5}
						w={"20%"}
						colorScheme={"blue"}
					>
						Add User
					</Button>
					<Heading mt={10} mb={10} size={"md"}>
						Create Package
					</Heading>
					<FormControl>
						<FormLabel>Name:</FormLabel>
						<Input
							onChange={handlePackageInput}
							value={inputPackage.name}
							name="name"
							id="name"
							w={"20%"}
						/>
						<FormLabel>Notes:</FormLabel>
						<Input
							onChange={handlePackageInput}
							value={inputPackage.notes}
							name="notes"
							id="notes"
							w={"20%"}
						/>
						<FormLabel>Image:</FormLabel>
						<Input
							onChange={handlePackageInput}
							value={inputPackage.image}
							name="image"
							type={"file"}
							w={"20%"}
						/>
						<FormLabel>User:</FormLabel>
						<Select
							onChange={handlePackageInput}
							name="user"
							w={"20%"}
							placeholder="select user"
						>
							{users.map((u) => {
								return (
									<option key={u._id} value={u._id}>
										{u.username}
									</option>
								);
							})}
						</Select>
					</FormControl>
					<Button
						onClick={handleSubmitPackage}
						mt={5}
						w={"20%"}
						colorScheme={"blue"}
					>
						Add Package
					</Button>
				</Flex>
			</Box>
		</>
	);
}

export default Create;
