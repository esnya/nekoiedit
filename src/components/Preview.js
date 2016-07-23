import React, { PropTypes } from 'react';
import connect from '../connectors/preview';
import Grid from './Grid';

const Preview = (props) => {
    const {
        style,
        text,
    } = props;

    return (
        <svg viewBox="0 0 24 24" style={style}>
            <rect width={24} height={24} fill="white" stroke="none" />
            <Grid />
            <g dangerouslySetInnerHTML={{ __html: text }} />
        </svg>
    );
};
Preview.propTypes = {
    style: PropTypes.object,
    text: PropTypes.string,
};
export default connect(Preview);
