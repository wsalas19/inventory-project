import axios from "axios";
import { setUserSesion, cleanUserSession } from "./users";

export const setUser = (input) => async (dispatch) => {
	try {
		let res = await axios.post("/login", input);
		return dispatch(setUserSesion(res.data));
	} catch (error) {
		console.log(error.toString());
	}
};
export const cleanUser = () => (dispatch) => {
	return dispatch(cleanUserSession());
};
