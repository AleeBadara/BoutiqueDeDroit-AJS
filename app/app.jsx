const React = require('react');
const ReactDOM = require('react-dom');
const { MuiThemeProvider } = require('material-ui/styles');

const Main = require('Main');
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

// Custom styles loader
require('style-loader!css-loader!sass-loader!ApplicationStyles');

const App = () => {
    return (
        <MuiThemeProvider>
            <Main />
        </MuiThemeProvider>
    );
};
ReactDOM.render(
    <App />,
    document.getElementById('app'));