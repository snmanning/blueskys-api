import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) =>
    <div>
        <h1>{props.title}</h1>
    </div>

Heading.propTypes = {
    title: PropTypes.string
};

export default Heading;