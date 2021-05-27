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

export type MainPageActionsTypes =
  | RecordFactionsDataToStore
  | RequestFactionsError
  | RecordSolarSystemNameToStore
  | RequestSolarSystemNameError;
