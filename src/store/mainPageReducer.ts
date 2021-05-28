import * as actionTypes from './actionTypes';
import { MainPageActionsTypes, MainPageState } from './interfaces';

export const mainPageInitialState: MainPageState = {
  factionsData: [],
  factionsError: '',
  solarSystemName: '',
  solarSystemNameError: '',
  corporationName: '',
  corporationNameError: '',
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
    case actionTypes.RECORD_SOLAR_SYSTEM_NAME_TO_STORE: {
      return {
        ...state,
        solarSystemName: action.solarSystemName,
      };
    }
    case actionTypes.REQUEST_SOLAR_SYSTEM_NAME_ERROR: {
      return {
        ...state,
        solarSystemNameError: action.error,
      };
    }
    case actionTypes.RECORD_CORPORATION_NAME_TO_STORE: {
      return {
        ...state,
        corporationName: action.corporationName,
      };
    }
    case actionTypes.REQUEST_CORPORATION_NAME_ERROR: {
      return {
        ...state,
        corporationNameError: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
