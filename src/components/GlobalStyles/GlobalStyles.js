import React from 'react';
import PropTypes from 'prop-types';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    // return React.Children.only(children); //chỉ chấp nhận một con
    return children;
}

GlobalStyles.protoTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;
