import { handleActions } from 'redux-actions';
import * as Text from '../actions/text';

export default handleActions({
    [Text.CHANGE]: (state, { payload }) => payload,
}, '');
