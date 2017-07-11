var React = require('react');
var { Paper, Button, Typography, TextField, Avatar } = require('material-ui');

var CasApi = require('CasApi');
var Cas = require('Cas');
var Filtre = require('Filtre');

class SuiviCas extends React.Component {
    render() {
        let renderCas = () => {
            let results = CasApi.getAllCas();
            return results.map((cas) => {
                return (
                    <Cas key={cas.id} {...cas} />
                );
            });
        };
        return (
            <Paper elevation={4} >
                <Typography type="display2" className="text-center header_title">Suivi cas</Typography>
                <div className="row content_container">
                    <Filtre />
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
                                {renderCas()}
                            </tbody>
                        </table>
                    </div>
                </div>

            </Paper>
        );
    }
}

module.exports = SuiviCas;