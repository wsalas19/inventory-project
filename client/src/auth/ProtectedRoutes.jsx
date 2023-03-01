import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import Login from "../components/Login";

const ProtectedRoutes = () => {
	const user = useSelector((state) => state.users.user);
	if (user.ok) {
		return <Outlet />;
	}
	return <Login />;
};

export default ProtectedRoutes;
