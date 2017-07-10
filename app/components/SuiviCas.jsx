const React = require('react');
const { Paper, Button, Typography, TextField, Avatar } = require('material-ui');
const PageviewIcon = require('material-ui-icons').Pageview;

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

                    <div className="tableau_resultat">
                        <table className="stack">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prénoms</th>
                                    <th>Type cas</th>
                                    <th>Créé par</th>
                                    <th>Etat</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Aminata</td>
                                    <td>Niang</td>
                                    <td>Divorce</td>
                                    <td>Soukey</td>
                                    <td>Traité</td>
                                    <td className="colonneDetail"><Avatar className="avatar">
                                        <PageviewIcon className="detailButton" />
                                    </Avatar>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Aminata</td>
                                    <td>Niang</td>
                                    <td>Divorce</td>
                                    <td>Soukey</td>
                                    <td>En cours</td>
                                    <td className="colonneDetail"><Avatar className="avatar">
                                        <PageviewIcon className="detailButton" />
                                    </Avatar>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Aminata</td>
                                    <td>Niang</td>
                                    <td>Divorce</td>
                                    <td>Soukey</td>
                                    <td>Clos</td>
                                    <td className="colonneDetail"><Avatar className="avatar">
                                        <PageviewIcon className="detailButton" />
                                    </Avatar>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </Paper>
        );
    }
}

module.exports = SuiviCas;