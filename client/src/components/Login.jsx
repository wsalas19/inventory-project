import { Button, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import {
	FormControl,
	FormLabel,
	/* FormErrorMessage,
	FormHelperText, */
} from "@chakra-ui/react";
import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions";
import React, { useState } from "react";

function Login() {
	const [input, setInput] = useState({ username: "", password: "" });
	const [loading, setLoading] = useState(false);
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
				[name]: value,
			})
		); */
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			dispatch(setUser(input));

			setInput({ username: "", password: "" });
			console.log(res.data);

			redirect("/");
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
				ml={"25%"}
				w={"100svh"}
				alignSelf={"center"}
				h={"100svh"}
				alignItems={"center"}
				justifyContent={"center"}
				p={"50px"}
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
						isLoading={loading}
					>
						Login
					</Button>
				</VStack>
			</Flex>
		</>
	);
}

export default Login;
