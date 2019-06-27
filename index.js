import PropTypes from 'prop-types';
import {requireNativeComponent, View, module} from 'react-native';

const iLibrary = {
    name: 'MyLibrary',
    propTypes: {
        cardElevation: PropTypes.number,
        maxCardElevation: PropTypes.number,
        backgroundColor: PropTypes.string,
        radius: PropTypes.number,
        ...View.propTypes, // include the default view properties
    },
};

module.exports = requireNativeComponent('MyLibrary', iLibrary);