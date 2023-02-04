import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from "../../pages/authPage"
import MainPage from "../../pages/mainPage"

const publicRoutes = [
    {
        path: '/login',
        Component: AuthPage,
    }
];

const privateRoutes = [
    {
        path: '/mainPage',
        Component: MainPage,
    }
];
const AppRouter = ({
    user,
}) => {

    const isUser = Object.keys(user).length !== 0

    return (
        isUser ?
            <Switch>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={() => <Component />} exact />
                )}
                <Redirect to='/mainPage'/>
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

export default AppRouter;
