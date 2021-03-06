import * as actionTypes from './actionTypes';
import { MainPage } from 'utils/statesData';
import { MainPageActionsTypes, MainPageState } from './interfaces';

export const mainPageInitialState: MainPageState = MainPage;

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
    case actionTypes.RECORD_CORPORATION_DATA_TO_STORE: {
      return {
        ...state,
        corporationData: action.corporationData,
      };
    }
    case actionTypes.REQUEST_CORPORATION_DATA_ERROR: {
      return {
        ...state,
        corporationDataError: action.error,
      };
    }
    case actionTypes.RECORD_SEO_DATA_TO_STORE: {
      return {
        ...state,
        seoData: action.seoData,
      };
    }
    case actionTypes.REQUEST_SEO_DATA_ERROR: {
      return {
        ...state,
        seoDataError: action.error,
      };
    }
    case actionTypes.RECORD_RACE_TO_STORE: {
      return {
        ...state,
        race: action.race,
      };
    }
    case actionTypes.REQUEST_RACE_ERROR: {
      return {
        ...state,
        raceError: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
