import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context.jsx/AppContext";


function PrivateRouter({ children}){
    const state = useContext(AppContext);
    return state.isLoggedIn ? children : <Navigate to="/" replace/>

}

export default PrivateRouter;