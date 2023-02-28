import { Button, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import {
	FormControl,
	FormLabel,
	/* FormErrorMessage,
	FormHelperText, */
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { cleanUser, setUser } from "../redux/actions";
import React, { useState } from "react";
import axios from "axios";

function Login() {
	const [input, setInput] = useState({ username: "", password: "" });
	const dispatch = useDispatch();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
		/* setErrors(
			validate({
				...input,
				[e.target.name]: e.target.value,
			})
		); */
	};
	const handleLogOut = (e) => {
		e.preventDefault();
		dispatch(cleanUser());
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			dispatch(setUser(input));
			setInput({ username: "", password: "" });
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
		/* try {
			let res = await axios.post("/login", input);
			setInput({ username: "", password: "" });
			console.log(res.data);
		} catch (error) {
			console.log(error.toString());
		} */
	};

	return (
		<>
			<Flex
				w={"100svh"}
				/* bg={"red.200"} */
				alignItems={"center"}
				justifyContent={"center"}
				p={"100px"}
				flexDirection={"column"}
			>
				<Heading size={"lg"}>Login</Heading>
				<VStack mt={3} spacing={5}>
					<FormControl>
						<FormLabel>Username</FormLabel>
						<Input
							id="username"
							onChange={handleChange}
							name="username"
							value={input.username}
							placeholder="johndoe"
							type={"text"}
						/>
						<FormLabel>Password</FormLabel>
						<Input
							id="password"
							onChange={handleChange}
							name="password"
							value={input.password}
							placeholder="••••••••••"
							type={"password"}
						/>
					</FormControl>
					<Button
						onClick={handleSubmit}
						type="submit"
						w={"full"}
						colorScheme={"blue"}
					>
						Login
					</Button>
					<Button onClick={handleLogOut} w={"full"} colorScheme={"red"}>
						Test
					</Button>
				</VStack>
			</Flex>
		</>
	);
}

export default Login;
