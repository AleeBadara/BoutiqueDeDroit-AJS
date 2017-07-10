var React = require('react');
var { Redirect } = require('react-router-dom');
var { Route } = require('react-router-dom');

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