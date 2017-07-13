var React = require('react');
var PropTypes = require('prop-types');
var { Paper, Button, Typography, TextField, LabelRadio, RadioGroup, Divider } = require('material-ui');
var SaveIcon = require('material-ui-icons').Save;
var CancelIcon = require('material-ui-icons').Cancel;
var ReferentielsApi = require('ReferentielsApi');

class DetailCas extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { id, nom, prenom, type, createdBy, etat } = this.props.selectedCas;
        let getCategorieJuridique = () => {
            let results = ReferentielsApi.getCategorieJuridique();
            return results.map((categorie) => {
                let { id, libelle } = categorie;
                return (
                    <option key={id} value={libelle}>{libelle}</option>
                );
            });
        }
        return (
            <Paper elevation={4} >
                <Typography type="display2" className="text-center header_title">{nom} {prenom}</Typography>
                <Typography className="text-center ">Cas créé par {createdBy.nom} {createdBy.prenom}</Typography>
                <Typography className="text-center ">Date de création 01/01/1970</Typography>
                <Typography className="text-center ">Date de derniére modification 01/01/1970</Typography>

                <div className="row content_container">
                    <div className="small-6 small-centered columns">
                        <form >
                            <TextField required id="nom" value={nom} label="Nom" type="text" className="txtField" marginForm />
                            <TextField required id="prenom" value={prenom} label="Prénom" type="text" className="txtField" marginForm />
                            <TextField required id="age" label="Age" type="number" className="txtField" marginForm />
                            <RadioGroup aria-label="Sexe" name="gender" className="radioGroup_display">
                                <LabelRadio label="Homme" value="male" />
                                <LabelRadio label="Femme" value="female" />
                            </RadioGroup>

                            <TextField required id="adresse" label="Adresse" type="text" className="txtField" marginForm />
                            <TextField required id="phone" label="Téléphone" type="text" className="txtField" marginForm />

                            <TextField required id="cas" label="Cas" type="text" className="txtField" marginForm />
                            <TextField required id="description" label="Exposé du problème" type="text" className="txtField" multiline rowsMax="5" marginForm />
                            <label>Catégorie juridique <select>
                                {getCategorieJuridique()}
                            </select>
                            </label>
                        </form>
                    </div>
                    <div className="groupeButtonContainer">
                        <Button className="groupeButton btnBlue" raised color="primary" >Sans suite</Button>
                        <Button className="groupeButton btnBlue" raised color="primary" >Clore</Button>
                        <Button className="groupeButton btnRose" raised color="primary" >Annuler</Button>
                        <Button className="groupeButton btnRose" raised color="primary" >Enregistrer</Button>
                    </div>
                </div>
            </Paper>
        );
    }
}

DetailCas.PropTypes = {
    selectedCas: PropTypes.object.isRequired
}

module.exports = DetailCas;