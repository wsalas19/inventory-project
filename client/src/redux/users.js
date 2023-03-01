import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "users",
	initialState: {
		user: {},
		allUsers: [],
	},
	reducers: {
		getAllUsers: (state, action) => {
			state.allUsers = action.payload.filter((u) => u.role !== "admin");
		},
		setUserSesion: (state, action) => {
			state.user = action.payload;
		},
		cleanUserSession: (state, action) => {
			state.user = {};
		},
	},
});

export const { setUserSesion, getAllUsers, cleanUserSession } =
	userSlice.actions;

export default userSlice.reducer;
