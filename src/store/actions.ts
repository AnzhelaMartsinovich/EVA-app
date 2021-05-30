import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';

import * as actionTypes from './actionTypes';
import * as interfaces from './interfaces';
import { AppState } from './interfaces';
import {
  FACTIONS_URL,
  SYSTEMS_URL,
  CORPORATIONS_URL,
  CHARACTERS_URL,
  RACES_URL,
} from 'endpoints';

export const recordFactionsDataToStore = (
  factionsData: interfaces.FactionsData
): interfaces.RecordFactionsDataToStore => ({
  type: actionTypes.RECORD_FACTIONS_DATA_TO_STORE,
  factionsData,
});

export const requestFactionsDataError = (
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
      const res = await axios.get(FACTIONS_URL);
      dispatch(recordFactionsDataToStore(res.data));
    } catch (e) {
      dispatch(requestFactionsDataError(e));
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
      const res = await axios.get(`${SYSTEMS_URL}${id}`);
      dispatch(recordSolarSystemName(res.data.name));
    } catch (e) {
      dispatch(requestSolarSystemNameError(e));
    }
  };

export const recordCorporationData = (
  corporationData: any
): interfaces.RecordCorporationDataToStore => ({
  type: actionTypes.RECORD_CORPORATION_DATA_TO_STORE,
  corporationData,
});

export const requestCorporationDataError = (
  error: string
): interfaces.RequestCorporationDataError => ({
  type: actionTypes.REQUEST_CORPORATION_DATA_ERROR,
  error,
});

export const getCorporationData =
  (id: number) =>
  async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    try {
      const res = await axios.get(`${CORPORATIONS_URL}${id}`);
      dispatch(recordCorporationData(res.data));
    } catch (e) {
      dispatch(requestCorporationDataError(e));
    }
  };

export const recordSeoData = (
  seoData: any
): interfaces.RecordSeoDataToStore => ({
  type: actionTypes.RECORD_SEO_DATA_TO_STORE,
  seoData,
});

export const requestSeoDataError = (
  error: string
): interfaces.RequestSeoDataError => ({
  type: actionTypes.REQUEST_SEO_DATA_ERROR,
  error,
});

export const getSeoData =
  (id: number) =>
  async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    try {
      const res = await axios.get(`${CHARACTERS_URL}${id}`);
      dispatch(recordSeoData(res.data));
    } catch (e) {
      dispatch(requestSeoDataError(e));
    }
  };

export const recordRace = (race: any): interfaces.RecordRaceToStore => ({
  type: actionTypes.RECORD_RACE_TO_STORE,
  race,
});

export const requestRaceError = (
  error: string
): interfaces.RequestRaceError => ({
  type: actionTypes.REQUEST_RACE_ERROR,
  error,
});

export const getRaces =
  () =>
  async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    try {
      const res = await axios.get(RACES_URL);
      dispatch(recordRace(res.data));
    } catch (e) {
      dispatch(requestRaceError(e));
    }
  };
