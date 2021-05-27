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
