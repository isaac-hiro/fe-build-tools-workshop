import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

import webpackLogo from '../../img/webpack-logo.jpeg';
// import webpackLogoGif from '../../img/webpack-logo.gif';

class Content extends React.Component {
    static propTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <div>
                <h2>
                    {this.props.title}
                </h2>
                <Box title="Box component in Typescript" />

                <img className="logo" src={webpackLogo} />
                {/* <img className="logo" src={webpackLogoGif} /> */}
            </div>
        );
    }
}

export default Content;