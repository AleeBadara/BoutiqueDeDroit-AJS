var React = require('react');
var PropTypes = require('prop-types');
var { Paper, Button, Typography, TextField, LabelRadio, RadioGroup, Divider } = require('material-ui');
var SaveIcon = require('material-ui-icons').Save;
var CancelIcon = require('material-ui-icons').Cancel;
var ReferentielsApi = require('ReferentielsApi');

class DetailCas extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.selectedCas };

        this.handleCategorieSelection = this.handleCategorieSelection.bind(this);
        this.handleCategorieSelection = this.handleCategorieSelection.bind(this);
    }
    handleCategorieSelection() {

    }
    handleSexeSelection() {

    }
    render() {
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
                <Typography type="display2" className="text-center header_title">{this.state.nom} {this.state.prenom}</Typography>
                <Typography className="text-center ">Cas créé par {this.state.createdBy.nom} {this.state.createdBy.prenom}</Typography>
                <Typography className="text-center ">Date de création 01/01/1970</Typography>
                <Typography className="text-center ">Date de derniére modification 01/01/1970</Typography>

                <div className="row content_container">
                    <div className="small-6 small-centered columns">
                        <form >
                            <TextField required id="nom" value={this.state.nom} label="Nom" type="text" className="txtField" marginForm />
                            <TextField required id="prenom" value={this.state.prenom} label="Prénom" type="text" className="txtField" marginForm />
                            <TextField required id="age" value={this.state.age} label="Age" type="number" className="txtField" marginForm />
                            <RadioGroup aria-label="Sexe" name="gender" className="radioGroup_display" selectedValue={this.state.sexe} onChange={this.handleSexeSelection}>
                                <LabelRadio label="Homme" value="H" />
                                <LabelRadio label="Femme" value="F" />
                            </RadioGroup>

                            <TextField required id="adresse" value={this.state.adresse} label="Adresse" type="text" className="txtField" marginForm />
                            <TextField required id="phone" value={this.state.telephone} label="Téléphone" type="text" className="txtField" marginForm />

                            <TextField required id="cas" value={this.state.cas} label="Cas" type="text" className="txtField" marginForm />
                            <TextField required id="description" value={this.state.description} label="Exposé du problème" type="text" className="txtField" multiline rowsMax="5" marginForm />
                            <label>Catégorie juridique <select defaultValue={this.state.type} onChange={this.handleCategorieSelection}>
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