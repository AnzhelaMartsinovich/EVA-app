import { combineReducers } from 'redux';

import { mainPageReducer } from 'store/reducer';

export const rootReducer = combineReducers({ mainPage: mainPageReducer });
