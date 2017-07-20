var React = require('react');
var { Paper, Button, Typography, TextField, LabelRadio, RadioGroup, Divider } = require('material-ui');
var AddIcon = require('material-ui-icons').Add;
var shortid = require('shortid');

var ReferentielsApi = require('ReferentielsApi');
var CasApi = require('CasApi');

class Nouveau extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adresse: '',
            age: 0,
            cas: '',
            description: '',
            etat: 'En cours',
            nom: '',
            prenom: '',
            sexe: '',
            telephone: '',
            type: ''
        }
        this.handleAdresseInput = this.handleAdresseInput.bind(this);
        this.handleAgeInput = this.handleAgeInput.bind(this);
        this.handleCasInput = this.handleCasInput.bind(this);
        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handleNomInput = this.handleNomInput.bind(this);
        this.handlePrenomInput = this.handlePrenomInput.bind(this);
        this.handleTelephoneInput = this.handleTelephoneInput.bind(this);
        this.handleSexeSelection = this.handleSexeSelection.bind(this);
        this.handleCategorieSelection = this.handleCategorieSelection.bind(this);

        this.handleAddNewCas = this.handleAddNewCas.bind(this);
    }
    handleAdresseInput(e) {
        this.setState({
            adresse: e.target.value
        });
    }
    handleAgeInput(e) {
        this.setState({
            age: e.target.value
        })
    }
    handleCasInput(e) {
        this.setState({
            cas: e.target.value
        })
    }
    handleDescriptionInput(e) {
        this.setState({
            description: e.target.value
        });
    }
    handleNomInput(e) {
        this.setState({
            nom: e.target.value
        });
    }
    handlePrenomInput(e) {
        this.setState({
            prenom: e.target.value
        });
    }
    handleTelephoneInput(e) {
        this.setState({
            telephone: e.target.value
        });
    }
    handleAddNewCas() {
        let editeur = {
            id: shortid.generate(),
            createdBy: {
                nom: 'Diagne',
                prenom: 'Coumba'
            }
        };
        let newCas = { ...this.state, ...editeur };
        CasApi.addNewCas(newCas);
        this.props.history.push('/suivi');
    }
    handleSexeSelection(event, value) {
        this.setState({ sexe: value });
    }
    handleCategorieSelection(e) {
        this.setState({
            type: e.target.value
        });
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
                <Typography type="display2" className="text-center header_title">Nouveau cas</Typography>
                <div className="row content_container">
                    <div className="small-6 small-centered columns">
                        <form >
                            <Typography type="headline" className="text-center headline_title">Identité</Typography>
                            <TextField required id="nom" label="Nom" type="text" className="txtField" onChange={this.handleNomInput} marginForm />
                            <TextField required id="prenom" label="Prénom" type="text" className="txtField" onChange={this.handlePrenomInput} marginForm />
                            <TextField required id="age" label="Age" type="number" className="txtField" onChange={this.handleAgeInput} marginForm />
                            <RadioGroup aria-label="Sexe" name="gender" className="radioGroup_display" selectedValue={this.state.sexe} onChange={this.handleSexeSelection}>
                                <LabelRadio label="Homme" value="H" />
                                <LabelRadio label="Femme" value="F" />
                            </RadioGroup>

                            <Typography type="headline" className="text-center headline_title">Contact</Typography>
                            <TextField required id="adresse" label="Adresse" type="text" className="txtField" onChange={this.handleAdresseInput} marginForm />
                            <TextField required id="phone" label="Téléphone" type="text" className="txtField" onChange={this.handleTelephoneInput} marginForm />

                            <Typography type="headline" className="text-center headline_title">Cas</Typography>
                            <TextField required id="cas" label="Cas" type="text" className="txtField" onChange={this.handleCasInput} marginForm />
                            <TextField required id="description" label="Exposé du problème" type="text" className="txtField" onChange={this.handleDescriptionInput} multiline rowsMax="5" marginForm />
                            <label>Catégorie juridique <select defaultValue={this.state.type} onChange={this.handleCategorieSelection}>
                                {getCategorieJuridique()}
                            </select>
                            </label>
                        </form>
                    </div>
                    <div className="row">
                        <div className="columns small-2 small-offset-10">
                            <Button fab color="accent" onClick={this.handleAddNewCas}>
                                <AddIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </Paper>
        );
    }
}

module.exports = Nouveau;