import { Outlet, Navigate } from "react-router-dom"
import useGetUserInfo from "./hooks/useGetUserInfo";




const ProtectedRoutes = () => {

    const {isAuth} = useGetUserInfo();

    return isAuth ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes;