import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
	const user = useSelector((state) => state.users.user);
	if (user.ok) {
		return <Outlet />;
	}
	return <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
