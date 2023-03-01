import axios from "axios";
import { setUserSesion, cleanUserSession, getAllUsers } from "./users";

export const setUser = (input) => async (dispatch) => {
	try {
		let res = await axios.post("/login", input);
		return dispatch(setUserSesion(res.data));
	} catch (error) {
		throw new Error(error.response.data.error.message);
	}
};
export const cleanUser = () => (dispatch) => {
	return dispatch(cleanUserSession());
};

export const getAllUsersLoaded = () => async (dispatch) => {
	try {
		let res = await axios.get("/users");
		return dispatch(getAllUsers(res.data));
	} catch (error) {
		throw new Error(error.response.data.error.message);
	}
};

export const createUser = (input) => async () => {
	try {
		let res = await axios.post("/users", input);
		return res.data;
	} catch (error) {
		throw new Error(error.response.data.error.message);
	}
};
