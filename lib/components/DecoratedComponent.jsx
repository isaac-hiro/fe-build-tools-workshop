import React from 'react';
import PropTypes from 'prop-types';

@log
class DecoratedComponent extends React.Component {
    static propTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <h2>
                {this.props.title}
            </h2>
        );
    }
}

export default DecoratedComponent;

function log(target) {
    // console.log(target);
}