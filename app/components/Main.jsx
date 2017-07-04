const React = require('react');
const { HashRouter, Route } = require('react-router-dom');

const Nav = require('Nav');
const Connexion = require('Connexion');
const Nouveau = require('Nouveau');
const SuiviCas = require('SuiviCas');
const Footer = require('Footer');

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Nav />
                    <div className="row main_container">
                        <div className="columns medium-10 small-centered">
                            <Route exact path="/" component={Connexion} />
                            <Route exact path="/new" component={Nouveau} />
                            <Route exact path="/suivi" component={SuiviCas} />
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }

}

module.exports = Main;