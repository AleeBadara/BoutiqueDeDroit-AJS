var React = require('react');
var PropTypes = require('prop-types');
var { NavLink } = require('react-router-dom');
var { Avatar } = require('material-ui');
var PageviewIcon = require('material-ui-icons').Pageview;

class Cas extends React.Component {
    constructor(props) {
        super(props);
        this.showDetail = this.showDetail.bind(this);
    }
    showDetail() {
        this.props.onSelect(this.props.selectedCas);
    }
    render() {
        let { id, nom, prenom, type, createdBy, etat } = this.props.selectedCas;
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

Cas.PropTypes = {
    onSelect: PropTypes.func.isRequired,
    selectedCas: PropTypes.object.isRequired
}

module.exports = Cas;