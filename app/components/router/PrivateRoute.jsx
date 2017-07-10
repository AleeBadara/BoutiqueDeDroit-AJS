const React = require('react');
const { Redirect } = require('react-router-dom');
const { Route } = require('react-router-dom');

let isAuthenticated = true;

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />
            )
    )} />
);

module.exports = PrivateRoute;