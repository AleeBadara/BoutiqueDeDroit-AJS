const React = require('react');
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

const Footer = () => {
    return (
        <div >
            <BottomNavigation showLabels>
                <BottomNavigationButton label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationButton label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationButton label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </div>
    );
};

module.exports = Footer;