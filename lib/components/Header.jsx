import React from 'react';
import PropTypes from 'prop-types';

// import '../../scss/components/_header.scss';

const Header = ({ title, subtTitle }) => {
    return (
        <header className="header">
            <div className="header__logo" />
            <h3>{title}</h3>
            <h4>{subtTitle}</h4>
        </header>
    );
};

Header.displayName = 'Header';

Header.propTypes = {
    title: PropTypes.string,
    subtTitle: PropTypes.string
};

export default Header;

