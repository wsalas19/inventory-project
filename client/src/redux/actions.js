import axios from "axios";
import { getUserPackage, cleanPackageSession, getAllPackages } from "./package";
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
export const cleanPackage = () => (dispatch) => {
	return dispatch(cleanPackageSession());
};

export const getAllUsersLoaded = () => async (dispatch) => {
	try {
		let res = await axios.get("/users");
		return dispatch(getAllUsers(res.data));
	} catch (error) {
		throw new Error(error.response.data.error.message);
	}
};

export const getPackageUser = (id) => async (dispatch) => {
	try {
		let res = await axios.get(`/packages?id=${id}`);
		return dispatch(getUserPackage(res.data));
	} catch (error) {
		console.log(error);
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

export const createPackage = (input) => async () => {
	try {
		let res = await axios.post("/packages", input);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
export const getAllPackagesAdmin = () => async (dispatch) => {
	try {
		let res = await axios("/packages");
		return dispatch(getAllPackages(res.data));
	} catch (error) {
		console.log(error);
	}
};
