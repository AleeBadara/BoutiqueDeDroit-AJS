const React = require('react');
const { HashRouter, Route, Redirect } = require('react-router-dom');

const Nav = require('Nav');
const Connexion = require('Connexion');
const Nouveau = require('Nouveau');
const SuiviCas = require('SuiviCas');
const PrivateRoute = require('PrivateRoute');
const PublicRoute = require('PublicRoute');

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
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
                login: isAuthenticated
            }
        );
    }

    componentWillUpdate() {
        console.log('1 ' + this.state.login);
    }
    componentDidUpdate() {
        console.log('2 ' + this.state.login);
    }
    render() {
        let { login } = this.state;
        return (
            <HashRouter>
                <div>
                    <Nav isLoggedIn={login} deconnecter={this.handleDeconnexion} />
                    <div className="row main_container">
                        <div className="columns medium-10 small-centered">
                            <PublicRoute exact path="/" component={Connexion} onLogin={this.handleLogin} />
                            <PrivateRoute isAuthenticated={login} path="/new" component={Nouveau} />
                            <PrivateRoute isAuthenticated={login} path="/suivi" component={SuiviCas} />
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }

}

module.exports = Main;