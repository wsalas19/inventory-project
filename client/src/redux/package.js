import { createSlice } from "@reduxjs/toolkit";

const packageSlice = createSlice({
	name: "packages",
	initialState: {
		package: {},
		allPackages: [],
	},
	reducers: {
		getAllPackages: (state, action) => {
			state.allPackages = action.payload;
		},
		getUserPackage: (state, action) => {
			state.package = action.payload;
		},
		cleanPackageSession: (state, action) => {
			state.package = {};
		},
	},
});

export const { getAllPackages, getUserPackage, cleanPackageSession } =
	packageSlice.actions;

export default packageSlice.reducer;
