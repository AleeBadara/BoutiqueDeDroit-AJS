const React = require('react');
const { Paper, Button, Typography, TextField, LabelRadio, RadioGroup, Divider } = require('material-ui');
const AddIcon = require('material-ui-icons').Add;

class Nouveau extends React.Component {
    render() {
        return (
            <Paper elevation={4} >
                <Typography type="display2" className="text-center header_title">Nouveau cas</Typography>
                <div className="row content_container">
                    <div className="small-6 small-centered columns">
                        <form >
                            <Typography type="headline" className="text-center headline_title">Identité</Typography>
                            <TextField required id="nom" label="Nom" type="text" className="txtField" marginForm />
                            <TextField required id="prenom" label="Prénom" type="text" className="txtField" marginForm />
                            <TextField required id="age" label="Age" type="number" className="txtField" marginForm />
                            <RadioGroup aria-label="Sexe" name="gender" className="radioGroup_display">
                                <LabelRadio label="Homme" value="male" />
                                <LabelRadio label="Femme" value="female" />
                            </RadioGroup>

                            <Typography type="headline" className="text-center headline_title">Contact</Typography>
                            <TextField required id="adresse" label="Adresse" type="text" className="txtField" marginForm />
                            <TextField required id="phone" label="Téléphone" type="text" className="txtField" marginForm />

                            <Typography type="headline" className="text-center headline_title">Cas</Typography>
                            <TextField required id="cas" label="Cas" type="text" className="txtField" marginForm />
                            <TextField required id="description" label="Exposé du problème" type="text" className="txtField" marginForm />
                            <label>Catégorie juridique <select>
                                    <option value="husker">Husker</option>
                                    <option value="starbuck">Starbuck</option>
                                    <option value="hotdog">Hot Dog</option>
                                    <option value="apollo">Apollo</option>
                                </select>
                            </label>
                        </form>
                    </div>
                    <div className="row">
                        <div className="columns small-2 small-offset-10">
                            <Button fab color="accent">
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