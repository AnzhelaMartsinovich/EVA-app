import { createSelector } from 'reselect';

import { AppState, MainPageState } from './interfaces';

const getMainPage = (state: AppState): MainPageState => state.mainPage;
export const getFactionsDataSelector = createSelector(
  getMainPage,
  (data) => data.factionsData
);
export const getSolarSystemNameSelector = createSelector(
  getMainPage,
  (data) => data.solarSystemName
);
export const getCorporationDataSelector = createSelector(
  getMainPage,
  (data) => data.corporationData
);
export const getSeoDataSelector = createSelector(
  getMainPage,
  (data) => data.seoData
);
