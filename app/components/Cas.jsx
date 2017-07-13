var React = require('react');
var { NavLink } = require('react-router-dom');
var { Avatar } = require('material-ui');
var PageviewIcon = require('material-ui-icons').Pageview;

class Cas extends React.Component {
    constructor(props) {
        super(props);
        this.showDetail = this.showDetail.bind(this);
    }
    showDetail() {
        this.props.onSelect(this.props);
    }
    render() {
        let { id, nom, prenom, type, createdBy, etat } = this.props;
        return (
            <tr>
                <td>{prenom}</td>
                <td>{nom}</td>
                <td>{type}</td>
                <td>{createdBy.nom} {createdBy.prenom}</td>
                <td>{etat}</td>
                <td className="colonneDetail"><NavLink exact to="/detailCas"><Avatar className="avatar" onClick={this.showDetail}>
                    <PageviewIcon className="detailButton" />
                </Avatar></NavLink>
                </td>
            </tr>
        );
    }
}

module.exports = Cas;