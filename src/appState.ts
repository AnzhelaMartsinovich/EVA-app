import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';
import { AppState } from './store/interfaces';

export const initialState: AppState = {
  mainPage: {
    factionsData: [],
    factionsError: '',
    solarSystemName: '',
    solarSystemNameError: '',
    corporationName: '',
    corporationNameError: '',
  },
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
