import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Text from '../actions/text';

export default connect(
    ({ text }) => ({ text }),
    dispatch => bindActionCreators({
        onChange: (e) => Text.change(e.target.value),
    }, dispatch)
);
