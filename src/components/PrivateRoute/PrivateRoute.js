import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../../index";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = () => {
    const { store } = useContext(Context);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsCheckingAuth(false);
        }, 1000);
    }, []);

    if (isCheckingAuth) {
        return <Spinner isCheckingAuth={isCheckingAuth}/>
    }

    if (store.isAuth) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />;
    }
};

export default observer(PrivateRoute);