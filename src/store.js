import { compose, createStore } from 'redux';
import reducer from './reducers';

export default (initialState) =>
    createStore(reducer, initialState, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
