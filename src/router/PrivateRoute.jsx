import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);

    if(loading){
        return <Spinner/>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/signin" replace></Navigate>;


};

export default PrivateRoute;