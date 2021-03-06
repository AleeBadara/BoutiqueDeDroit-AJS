var React = require('react');
var PropTypes = require('prop-types');
var { NavLink } = require('react-router-dom');
var { AppBar, Toolbar, Typography, Button, IconButton, Avatar } = require('material-ui');
var MenuIcon = require('material-ui-icons').Menu;


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.deconnecter = this.deconnecter.bind(this);
    }
    deconnecter() {
        this.props.deconnecter(false);
    }
    render() {
        let { isLoggedIn } = this.props;
        let getNavigation = () => {
            if (isLoggedIn) {
                return (
                    <div className="nav_container">
                        <AppBar position="static" className="nav_appbar">
                            <Toolbar>
                                <IconButton color="contrast" aria-label="Menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography type="title" color="inherit" >Boutique de droit</Typography>
                                <div className="menu_container">
                                    <NavLink exact to="/new" activeClassName="active"><Button color="contrast">Nouveau cas</Button></NavLink>
                                    <NavLink exact to="/suivi" activeClassName="active"><Button color="contrast">Suivi des cas</Button></NavLink>
                                    <NavLink exact to="/conseiller" activeClassName="active"><Button color="contrast">Nouveau conseiller</Button></NavLink>
                                    <NavLink exact to="/stats" activeClassName="active"><Button color="contrast">Statistiques</Button></NavLink>
                                </div>
                                <NavLink exact to="/" activeClassName="active noborder"><Button color="contrast" onClick={this.deconnecter}>Se déconnecter</Button></NavLink>
                                <Avatar className="avatar">AM</Avatar>
                            </Toolbar>
                        </AppBar>
                    </div>
                )
            } else {
                return (
                    <div className="nav_container">
                        <AppBar position="static" className="nav_appbar">
                            <Toolbar>
                                <IconButton color="contrast" aria-label="Menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography type="title" color="inherit" >Boutique de droit</Typography>
                            </Toolbar>
                        </AppBar>
                    </div>
                )

            }
        }
        return (
            <div>{getNavigation()}</div>
        )
    }

};

Nav.PropTypes = {
    deconnecter: PropTypes.func.isRequired
}

module.exports = Nav;