import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import LoginPage from "../../pages/login"
// import MainPage from "../../pages/mainPage"

const publicRoutes = [
    {
        // path: '/login',
        // Component: LoginPage,
    }
];

const privateRoutes = [
    {
        // path: '/mainPage',
        // Component: MainPage,
    }
];
const AppRouter = ({
    user,
}) => {

    return ( true
        // user !== null ?
        //     <Switch>
        //         {privateRoutes.map(({ path, Component }) =>
        //             <Route key={path} path={path} component={() => <Component />} exact />
        //         )}
        //         <Redirect to='/mainPage'/>
        //     </Switch>
        // :
        // <Switch>
        //     {publicRoutes.map(({ path, Component }) => 
        //         <Route key={path} path={path} component={() => <Component />} exact />
        //     )}
        //     <Redirect to='/login'/>
        // </Switch>
    )
};

export default AppRouter;
