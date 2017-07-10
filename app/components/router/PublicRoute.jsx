var React = require('react');
var { Redirect, Route } = require('react-router-dom');


const PublicRoute = ({ component: Component, onLogin, ...rest }) => (
    <Route {...rest} render={props => (
        <Component onLogin={onLogin} {...props} />
    )} />
);

module.exports = PublicRoute;