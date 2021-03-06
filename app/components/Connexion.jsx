var React = require('react');
var { Redirect } = require('react-router-dom');
const PropTypes = require('prop-types');
var { Paper, Button, Typography, TextField } = require('material-ui');


class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifiant: '',
            password: '',
            errorMessage: '',
            doRedirect: false
        };

        this.handleIdentifiantChange = this.handleIdentifiantChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleIdentifiantChange(e) {
        this.setState({
            identifiant: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleLogin(e) {
        let { identifiant, password } = this.state;
        if (!identifiant) {
            this.setState({
                errorMessage: 'Identifiant vide ou incorrect.'
            });
            return;
        }
        if (!password) {
            this.setState({
                errorMessage: 'Mot de passe vide ou incorrect.'
            });
            return;
        }
        this.setState({
            doRedirect: true
        });
        this.props.onLogin(true);
    }
    render() {
        let { from } = this.props.location.state || { from: { pathname: '/new' } }
        let { doRedirect, errorMessage } = this.state;
        if (doRedirect) {
            return (
                <Redirect to={from} />
            )
        }
        return (
            <Paper elevation={4} >
                <Typography type="display2" className="text-center header_title">Connexion</Typography>
                <div className="row content_container">
                    <div className="small-4 small-centered columns">
                        <Typography type="body2" className="loginError">{errorMessage}</Typography>
                        <form>
                            <TextField required value={this.state.identifiant} onChange={this.handleIdentifiantChange} label="Identifiant" type="text" className="txtField" marginForm />
                            <TextField required value={this.state.password} onChange={this.handlePasswordChange} label="Mot de passe" type="password" className="txtField" marginForm />
                            <Button raised color="primary" className=" btn" onClick={this.handleLogin}>Se connecter</Button>
                        </form>
                    </div>
                </div>
            </Paper>
        );
    }
}


Connexion.PropTypes = {
    onLogin: PropTypes.func.isRequired
}

module.exports = Connexion;