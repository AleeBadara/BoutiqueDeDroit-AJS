const React = require('react');
const { Paper, Button, Typography, TextField } = require('material-ui');

class SuiviCas extends React.Component {
    render() {
        return (
            <Paper elevation={4} >
                <Typography type="display2" className="text-center header_title">Suivi cas</Typography>
                <div className="row content_container">
                    <div className="fieldset_container">
                        <fieldset>
                            <legend>Filtres</legend>
                            <div className="row">
                                <div className="small-3 columns">
                                    <TextField required id="nom" label="Nom" type="text" className="txtField" marginForm />
                                </div>
                                <div className="small-3 columns">
                                    <TextField required id="nom" label="Prénom" type="text" className="txtField" marginForm />
                                </div>
                                <div className="small-6 columns"></div>
                            </div>
                            <div className="row">
                                <div className="small-3 columns">
                                    <TextField id="dateCreationDebut" label="Date création entre" type="date" defaultValue="2017-05-24" className="txtField" marginForm />
                                </div>
                                <div className="small-3 columns">
                                    <TextField id="dateCreationFin" label="et le" type="date" defaultValue="2017-05-24" className="txtField" marginForm />
                                </div>
                                <div className="small-6 columns"></div>
                            </div>
                            <div className="row">
                                <div className="small-3 columns">
                                    <TextField id="dateModificationDebut" label="Date modification entre" type="date" defaultValue="2017-05-24" className="txtField" marginForm />
                                </div>
                                <div className="small-3 columns">
                                    <TextField id="dateModificationFin" label="et le" type="date" defaultValue="2017-05-24" className="txtField" marginForm />
                                </div>
                                <div className="small-6 columns"></div>
                            </div>
                        </fieldset>
                    </div>

                    <div className="small-6 small-centered columns">
                        //Tableau ici 
                    </div>
                </div>

            </Paper>
        );
    }
}

module.exports = SuiviCas;