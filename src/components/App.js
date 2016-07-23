import { grey500 } from 'material-ui/styles/colors';
import React from 'react';
import Editor from './Editor';
import Preview from './Preview';

const Style = {
    Container: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        background: grey500,
    },
    Editor: {
        flex: '1 1 0',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    Preview: {
        flex: '1 1 0',
    },
};

const App = () => (
    <div style={Style.Container}>
        <Editor style={Style.Editor} />
        <Preview style={Style.Preview} />
    </div>
);
export default App;
