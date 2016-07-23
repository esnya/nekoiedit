import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { APP } from './constants/id';
import createStore from './store';

render(<Provider store={createStore()}><App /></Provider>, document.getElementById(APP));
