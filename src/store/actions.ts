import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';

import * as actionTypes from './actionTypes';
import * as interfaces from './interfaces';
import { AppState } from './interfaces';

export const requestError = (error: string, type: string) => ({
  type,
  error,
});

export const recordFactionsDataToStore = (
  factionsData: interfaces.FactionsData
): interfaces.RecordFactionsDataToStore => ({
  type: actionTypes.RECORD_FACTIONS_DATA_TO_STORE,
  factionsData,
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
      dispatch(requestError(e, actionTypes.REQUEST_FACTIONS_ERROR));
    }
  };

export const recordSolarSystemName = (
  solarSystemName: string
): interfaces.RecordSolarSystemNameToStore => ({
  type: actionTypes.RECORD_SOLAR_SYSTEM_NAME_TO_STORE,
  solarSystemName,
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
      dispatch(requestError(e, actionTypes.REQUEST_SOLAR_SYSTEM_NAME_ERROR));
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
      const res = await axios.get(
        `https://esi.evetech.net/legacy/corporations/${id}`
      );
      dispatch(recordCorporationData(res.data));
    } catch (e) {
      dispatch(requestError(e, actionTypes.REQUEST_CORPORATION_DATA_ERROR));
    }
  };

export const recordSeoData = (
  seoData: any
): interfaces.RecordSeoDataToStore => ({
  type: actionTypes.RECORD_SEO_DATA_TO_STORE,
  seoData,
});

export const getSeoData =
  (id: number) =>
  async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    try {
      const res = await axios.get(
        `https://esi.evetech.net/legacy/characters/${id}`
      );
      dispatch(recordSeoData(res.data));
    } catch (e) {
      dispatch(requestError(e, actionTypes.REQUEST_SEO_DATA_ERROR));
    }
  };

export const recordRace = (race: any): interfaces.RecordRaceToStore => ({
  type: actionTypes.RECORD_RACE_TO_STORE,
  race,
});

export const getRace =
  () =>
  async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    try {
      const res = await axios.get(
        'https://esi.evetech.net/legacy/universe/races'
      );
      dispatch(recordRace(res.data));
    } catch (e) {
      dispatch(requestError(e, actionTypes.REQUEST_RACE_ERROR));
    }
  };
