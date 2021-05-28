import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';

import * as actionTypes from './actionTypes';
import * as interfaces from './interfaces';
import { AppState } from './interfaces';

export const recordFactionsDataToStore = (
  factionsData: interfaces.FactionsData
): interfaces.RecordFactionsDataToStore => ({
  type: actionTypes.RECORD_FACTIONS_DATA_TO_STORE,
  factionsData,
});

export const requestFactionsError = (
  error: string
): interfaces.RequestFactionsError => ({
  type: actionTypes.REQUEST_FACTIONS_ERROR,
  error,
});

export const getFactionsDataRequest =
  () =>
  async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    try {
      const res = await axios.get(
        'https://esi.evetech.net/dev/universe/factions/'
      );
      dispatch(recordFactionsDataToStore(res.data));
    } catch (e) {
      dispatch(requestFactionsError(e));
    }
  };

export const recordSolarSystemName = (
  solarSystemName: string
): interfaces.RecordSolarSystemNameToStore => ({
  type: actionTypes.RECORD_SOLAR_SYSTEM_NAME_TO_STORE,
  solarSystemName,
});

export const requestSolarSystemNameError = (
  error: string
): interfaces.RequestSolarSystemNameError => ({
  type: actionTypes.REQUEST_SOLAR_SYSTEM_NAME_ERROR,
  error,
});

export const getSolarSystemName =
  (id: number) =>
  async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    try {
      const res = await axios.get(
        `https://esi.evetech.net/legacy/universe/systems/${id}`
      );
      dispatch(recordSolarSystemName(res.data.name));
    } catch (e) {
      dispatch(requestSolarSystemNameError(e));
    }
  };

export const recordCorporationName = (
  corporationName: string
): interfaces.RecordCorporationNameToStore => ({
  type: actionTypes.RECORD_CORPORATION_NAME_TO_STORE,
  corporationName,
});

export const requestCorporationNameError = (
  error: string
): interfaces.RequestCorporationNameError => ({
  type: actionTypes.REQUEST_CORPORATION_NAME_ERROR,
  error,
});

export const getCorporationName =
  (id: number) =>
  async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    try {
      const res = await axios.get(
        ` https://esi.evetech.net/legacy/corporations/${id}`
      );
      dispatch(recordCorporationName(res.data.name));
    } catch (e) {
      dispatch(requestCorporationNameError(e));
    }
  };
