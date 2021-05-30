import * as actions from '../actions';
import { mainPageReducer, mainPageInitialState } from '../reducer';
import { mainPageState } from '../mockData';

describe('reducer', () => {
  it('should record factions data to store', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.recordFactionsDataToStore(mainPageState.factionsData)
    );

    expect(state.factionsData).toEqual(mainPageState.factionsData);
  });

  it('should return factions data error', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.requestFactionsDataError(mainPageState.factionsError)
    );

    expect(state.factionsError).toEqual(mainPageState.factionsError);
  });

  it('should record solar system data to store', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.recordSolarSystemName(mainPageState.solarSystemName)
    );

    expect(state.solarSystemName).toEqual(mainPageState.solarSystemName);
  });

  it('should return solar system name error', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.requestSolarSystemNameError(mainPageState.solarSystemNameError)
    );

    expect(state.solarSystemNameError).toEqual(
      mainPageState.solarSystemNameError
    );
  });

  it('should record corporation data to store', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.recordCorporationData(mainPageState.corporationData)
    );

    expect(state.corporationData).toEqual(mainPageState.corporationData);
  });

  it('should return corporation data error', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.requestCorporationDataError(mainPageState.corporationDataError)
    );

    expect(state.corporationDataError).toEqual(
      mainPageState.corporationDataError
    );
  });

  it('should record seo data to store', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.recordSeoData(mainPageState.seoData)
    );

    expect(state.seoData).toEqual(mainPageState.seoData);
  });

  it('should return seo data error', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.requestSeoDataError(mainPageState.seoDataError)
    );

    expect(state.seoDataError).toEqual(mainPageState.seoDataError);
  });

  it('should record race to store', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.recordRace(mainPageState.race)
    );

    expect(state.race).toEqual(mainPageState.race);
  });

  it('should return race data error', () => {
    const state = mainPageReducer(
      mainPageInitialState,
      actions.requestRaceError(mainPageState.raceError)
    );

    expect(state.raceError).toEqual(mainPageState.raceError);
  });
});
