import * as actionTypes from './actionTypes';

export interface Faction {
  corporation_id: number;
  description: string;
  faction_id: number;
  is_unique: boolean;
  militia_corporation_id: number;
  name: string;
  size_factor: number;
  solar_system_id: number;
  station_count: number;
  station_system_count: number;
}

export interface MainPageState {
  factionsData: any;
  factionsError: string;
  solarSystemName: string;
  solarSystemNameError: string;
  corporationData: any;
  corporationDataError: string;
  seoData: any;
  seoDataError: string;
  race: any;
  raceError: string;
}

export interface FactionsData {
  data: Faction[];
}

export interface AppState {
  mainPage: MainPageState;
}

export interface RecordFactionsDataToStore {
  type: typeof actionTypes.RECORD_FACTIONS_DATA_TO_STORE;
  factionsData: FactionsData;
}

export interface RequestFactionsError {
  type: typeof actionTypes.REQUEST_FACTIONS_ERROR;
  error: string;
}

export interface RecordSolarSystemNameToStore {
  type: typeof actionTypes.RECORD_SOLAR_SYSTEM_NAME_TO_STORE;
  solarSystemName: string;
}

export interface RequestSolarSystemNameError {
  type: typeof actionTypes.REQUEST_SOLAR_SYSTEM_NAME_ERROR;
  error: string;
}

export interface RecordCorporationDataToStore {
  type: typeof actionTypes.RECORD_CORPORATION_DATA_TO_STORE;
  corporationData: any;
}

export interface RequestCorporationDataError {
  type: typeof actionTypes.REQUEST_CORPORATION_DATA_ERROR;
  error: string;
}

export interface RecordSeoDataToStore {
  type: typeof actionTypes.RECORD_SEO_DATA_TO_STORE;
  seoData: any;
}

export interface RequestSeoDataError {
  type: typeof actionTypes.REQUEST_SEO_DATA_ERROR;
  error: string;
}

export interface RecordRaceToStore {
  type: typeof actionTypes.RECORD_RACE_TO_STORE;
  race: string;
}

export interface RequestRaceError {
  type: typeof actionTypes.REQUEST_RACE_ERROR;
  error: string;
}

export type MainPageActionsTypes =
  | RecordFactionsDataToStore
  | RequestFactionsError
  | RecordSolarSystemNameToStore
  | RequestSolarSystemNameError
  | RecordCorporationDataToStore
  | RequestCorporationDataError
  | RecordSeoDataToStore
  | RequestSeoDataError
  | RecordRaceToStore
  | RequestRaceError;
