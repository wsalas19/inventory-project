import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "users",
	initialState: {
		user: {},
		allUsers: [],
		error: {},
	},
	reducers: {
		getAllUsers: (state, action) => {
			state.allUsers = action.payload.filter((u) => u.role !== "admin");
		},
		setUserSesion: (state, action) => {
			if (action.payload.ok) {
				state.user = action.payload;
			}
			state.error = action.payload;
		},
		cleanUserSession: (state, action) => {
			state.user = {};
		},
	},
});

export const { setUserSesion, getAllUsers, cleanUserSession } =
	userSlice.actions;

export default userSlice.reducer;
