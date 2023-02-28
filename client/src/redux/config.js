import packages from "./package";
import users from "./users";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: { packages, users },
});
