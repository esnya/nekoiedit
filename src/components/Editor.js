import { defaults } from 'lodash';
import React, { PropTypes } from 'react';
import connect from '../connectors/editor';

const Style = {
    Container: {
        display: 'flex',
        flexDirection: 'column',
        appearance: 'textfield-multiline',
        MozAppearance: 'textfield-multiline',
        WebkitAppearance: 'textfield-multiline',
    },
    TextArea: {
        flex: '1 1 0',
        border: 'none',
        appearance: 'none',
        MozAppearance: 'none',
        WebkitAppearance: 'none',
    },
};

const Editor = (props) => {
    const {
        style,
        text,
        onChange,
    } = props;

    return (
        <div style={defaults(style, Style.Container)}>
            &lt;svg&gt;
            <textarea
                style={Style.TextArea}
                value={text}
                onChange={onChange}
            />
            &lt;/svg&gt;
        </div>
    );
};
Editor.propTypes = {
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object,
    text: PropTypes.string,
};
export default connect(Editor);
