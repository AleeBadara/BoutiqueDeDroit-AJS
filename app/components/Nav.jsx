var React = require('react');
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
                                    <NavLink exact to="/new" activeClassName="active"><Button color="contrast">Créer un nouveau cas</Button></NavLink>
                                    <NavLink exact to="/suivi" activeClassName="active"><Button color="contrast">Suivi des cas</Button></NavLink>
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

module.exports = Nav;