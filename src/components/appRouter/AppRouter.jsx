import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AuthPage from "../../pages/authPage"
import MainPage from "../../pages/mainPage"
import SingleRoomPage from "../../pages/singleRoomPage"

const publicRoutes = [
    {
        path: '/login',
        Component: AuthPage,
    }
];

const privateRoutes = [
    {
        path: '/',
        Component: MainPage,
    },
    {
        path: '/room/:roomId',
        Component: SingleRoomPage,
    }
];

const AppRouter = ({
    user,
    isAccessAllowed
}) => {

    return (
        isAccessAllowed ?
            <Switch>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={() => <Component />} exact />
                )}
                <Redirect to='/'/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(({ path, Component }) => 
                    <Route key={path} path={path} component={() => <Component />} exact />
                )}
                <Redirect to='/login'/>
            </Switch>
    )
};

export default AppRouter
