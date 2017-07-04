const React = require('react');
const { Paper, Button, Typography, TextField } = require('material-ui');

const Connexion = () => {
    return (
        <Paper elevation={4} >
            <Typography type="display2" className="text-center header_title">Connexion</Typography>
            <div className="row content_container">
                <div className="small-4 small-centered columns">
                    <form >
                        <TextField required id="identifiant" label="Identifiant" type="text" className="txtField" marginForm />
                        <TextField required id="password" label="Mot de passe" type="password" className="txtField" marginForm />
                        <Button raised color="primary" className=" btn">Se connecter</Button>
                    </form>
                </div>
            </div>
        </Paper>
    )
};

module.exports = Connexion;