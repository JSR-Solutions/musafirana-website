import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from './auth';


const AdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props => isAuth() && isAuth().role && isAuth().role === 'musafiiranana@@admin' ? (<Component {...props} />) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default AdminRoute;

// && isAuth().role === 'Musafirrana@dmn'