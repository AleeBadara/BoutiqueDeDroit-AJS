const React = require('react');
const { Redirect } = require('react-router-dom');
const { Route } = require('react-router-dom');


const PublicRoute = ({ component: Component, onLogin, ...rest }) => (
    <Route {...rest} render={props => (

        <Component onLogin={onLogin} {...props} />
    )} />
);

module.exports = PublicRoute;