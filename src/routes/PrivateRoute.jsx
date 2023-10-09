import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const { user, loading } = useContext(AuthContext);

    if(loading) {
        return <div className="w-1/4 mx-auto my-20">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user) {
        return children
    }

    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

PrivateRoute.propTypes = {
    children : PropTypes.node
}

export default PrivateRoute;