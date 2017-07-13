var React = require('react');
var { Redirect } = require('react-router-dom');
var { Route } = require('react-router-dom');

const PrivateRoute = ({ component: Component, isAuthenticated, onSelect, selectedCas, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated ? (
            <Component onSelect={onSelect} selectedCas={selectedCas} {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />
            )
    )} />
);

module.exports = PrivateRoute;