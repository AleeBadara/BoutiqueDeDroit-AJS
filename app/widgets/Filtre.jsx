var React = require('react');
var { Paper, Button, Typography, TextField, Avatar } = require('material-ui');

class Filtre extends React.Component {
    render() {
        return (
            <div className="fieldset_container">
                <fieldset>
                    <legend>Filtres</legend>
                    <div className="row">
                        <div className="small-3 columns">
                            <TextField required id="nom" label="Nom" type="text" className="txtField" marginForm />
                        </div>
                        <div className="small-3 columns small-offset-2">
                            <TextField required id="nom" label="Prénom" type="text" className="txtField" marginForm />
                        </div>
                        <div className="small-4 columns"></div>
                    </div>
                    <div className="row">
                        <div className="small-3 columns">
                            <TextField id="dateCreationDebut" label="Date création entre" type="date" defaultValue="2017-05-24" className="txtField" marginForm />
                        </div>
                        <div className="small-3 columns small-offset-2">
                            <TextField id="dateCreationFin" label="et le" type="date" defaultValue="2017-05-24" className="txtField" marginForm />
                        </div>
                        <div className="small-4 columns"></div>
                    </div>
                    <div className="row">
                        <div className="small-3 columns">
                            <TextField id="dateModificationDebut" label="Date modification entre" type="date" defaultValue="2017-05-24" className="txtField" marginForm />
                        </div>
                        <div className="small-3 columns small-offset-2">
                            <TextField id="dateModificationFin" label="et le" type="date" defaultValue="2017-05-24" className="txtField" marginForm />
                        </div>
                        <div className="small-4 columns"></div>
                    </div>
                </fieldset>
            </div>
        );
    }
}

module.exports = Filtre;