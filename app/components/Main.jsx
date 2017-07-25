var React = require('react');
var { HashRouter, Route, Redirect } = require('react-router-dom');

var Nav = require('Nav');
var Connexion = require('Connexion');
var Nouveau = require('Nouveau');
var SuiviCas = require('SuiviCas');
var DetailCas = require('DetailCas');
var Conseiller = require('Conseiller');
var PrivateRoute = require('PrivateRoute');
var PublicRoute = require('PublicRoute');

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            selectedCas: {}
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleDeconnexion = this.handleDeconnexion.bind(this);
        this.handleSelectedCas = this.handleSelectedCas.bind(this);
    }
    handleDeconnexion(valeur) {
        this.setState({
            loggedIn: valeur
        });
        this.setState({
            selectedCas: {}
        });
    }
    handleLogin(isAuthenticated) {
        this.setState(
            {
                loggedIn: isAuthenticated
            }
        );
    }
    handleSelectedCas(cas) {
        this.setState({
            selectedCas: { ...cas }
        });
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
                            <PrivateRoute isAuthenticated={loggedIn} exact path="/new" component={Nouveau} />
                            <PrivateRoute isAuthenticated={loggedIn} exact path="/suivi" component={SuiviCas} onSelect={this.handleSelectedCas} />
                            <PrivateRoute isAuthenticated={loggedIn} exact path="/detailCas" component={DetailCas} selectedCas={this.state.selectedCas} />
                            <PrivateRoute isAuthenticated={loggedIn} exact path="/conseiller" component={Conseiller} />
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }

}

module.exports = Main;