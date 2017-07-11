var React = require('react');
var { Avatar } = require('material-ui');
var PageviewIcon = require('material-ui-icons').Pageview;

class Cas extends React.Component {
    render() {
        let { id, nom, prenom, type, createdBy, etat } = this.props;
        return (
            <tr>
                <td>{prenom}</td>
                <td>{nom}</td>
                <td>{type}</td>
                <td>{createdBy.nom} {createdBy.prenom}</td>
                <td>{etat}</td>
                <td className="colonneDetail"><Avatar className="avatar">
                    <PageviewIcon className="detailButton" />
                </Avatar>
                </td>
            </tr>
        );
    }
}

module.exports = Cas;