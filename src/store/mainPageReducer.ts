import * as actionTypes from './actionTypes';
import { MainPageActionsTypes, MainPageState } from './interfaces';

export const mainPageInitialState: MainPageState = {
  factionsData: [],
  factionsError: '',
};

export const mainPageReducer = (
  state = mainPageInitialState,
  action: MainPageActionsTypes
): MainPageState => {
  switch (action.type) {
    case actionTypes.RECORD_FACTIONS_DATA_TO_STORE: {
      return {
        ...state,
        factionsData: action.factionsData,
      };
    }
    case actionTypes.REQUEST_FACTIONS_ERROR: {
      return {
        ...state,
        factionsError: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
