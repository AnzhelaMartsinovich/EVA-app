import { combineReducers } from 'redux';

import { mainPageReducer } from 'store/mainPageReducer';

export const rootReducer = combineReducers({ mainPage: mainPageReducer });
