import { createAction } from 'redux-actions';

export const CHANGE = 'TEXT/CHANGE';
export const change = createAction(CHANGE, 'text');

