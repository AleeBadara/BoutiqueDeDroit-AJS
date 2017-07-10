var React = require('react');
var { HashRouter, Route, Redirect } = require('react-router-dom');

var Nav = require('Nav');
var Connexion = require('Connexion');
var Nouveau = require('Nouveau');
var SuiviCas = require('SuiviCas');
var PrivateRoute = require('PrivateRoute');
var PublicRoute = require('PublicRoute');

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleDeconnexion = this.handleDeconnexion.bind(this);;
    }
    handleDeconnexion(value) {
        this.setState({
            login: value
        })
    }
    handleLogin(isAuthenticated) {
        console.log(isAuthenticated);
        this.setState(
            {
                loggedIn: isAuthenticated
            }
        );
    }
    render() {
        let { loggedIn } = this.state;
        return (
            <HashRouter>
                <div>
                    <Nav isLoggedIn={loggedIn} deconnecter={this.handleDeconnexion} />
                    <div className="row main_container">
                        <div className="columns medium-10 small-centered">
                            <PublicRoute exact path="/" component={Connexion} onLogin={this.handleLogin} />
                            <PrivateRoute isAuthenticated={loggedIn} path="/new" component={Nouveau} />
                            <PrivateRoute isAuthenticated={loggedIn} path="/suivi" component={SuiviCas} />
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }

}

module.exports = Main;