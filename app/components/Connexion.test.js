var React = require('react');
var ReactDOM = require('react-dom');
var { Redirect } = require('react-router-dom');
var { Paper, Button, Typography, TextField } = require('material-ui');
var { MuiThemeProvider } = require('material-ui/styles');
var { mount,shallow } =require('enzyme');
const TestUtils = require('react-addons-test-utils');
var Connexion = require('Connexion');

var wrapper = mount(<MuiThemeProvider><Connexion /></MuiThemeProvider>);

describe('Connexion.jsx', () => {
    it('should render without crash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MuiThemeProvider><Connexion /></MuiThemeProvider>, div);
    });

    it('should return empty for Identifiant and Password TextField', ()=>{   
         const identifiantTextfield=wrapper.find('#identifiant');
         const passwordTextfield=wrapper.find('#password');
         expect(identifiantTextfield.text()).toBe('');
         expect(passwordTextfield.text()).toBe('');

    });

    it('should call handleIdentifiantchange', ()=>{
         const wrapper = mount(<MuiThemeProvider><Connexion /></MuiThemeProvider>);
         wrapper.handleIdentifiantChange = jest.fn();
         const event = {target: {value: 'test'}};
         const identifiantTextfield=wrapper.find('#identifiant');
         identifiantTextfield.simulate('change', event);
         console.log(identifiantTextfield);
         expect(wrapper.handleIdentifiantChange).toHaveBeenCalled();
    });
});
