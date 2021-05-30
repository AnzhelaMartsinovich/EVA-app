import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ThunkDispatch } from 'redux-thunk';

import * as actions from '../actions';
import * as endpoints from 'endpoints';
import { store } from 'appState';
import { mainPageState } from '../mockData';

describe('actions', () => {
  let fakeAxios: MockAdapter;
  const requestError = jest.fn();
  const id = 1;
  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
  });
  const dispatch: ThunkDispatch<any, any, any> = store.dispatch;

  it('should get factions data', async () => {
    fakeAxios
      .onGet(endpoints.FACTIONS_URL)
      .reply(200, mainPageState.factionsData);
    const recordFactionsDataToStore = jest.fn();

    try {
      await dispatch(actions.getFactionsDataRequest());
    } catch (e) {}

    setTimeout(() => {
      expect(recordFactionsDataToStore).toHaveBeenCalledTimes(1);
      expect(recordFactionsDataToStore).toHaveBeenCalledWith(
        mainPageState.factionsData
      );
    });
  });

  test('It should record error message on getFactionsDataRequest', async () => {
    await dispatch(actions.getFactionsDataRequest());

    setTimeout(() => {
      expect(requestError).toHaveBeenCalledWith(mainPageState.factionsError);
    });
  });

  it('should get solar system name', async () => {
    fakeAxios
      .onGet(`${endpoints.SYSTEMS_URL}${id}`)
      .reply(200, mainPageState.solarSystemName);
    const recordSolarSystemNameToStore = jest.fn();

    try {
      await dispatch(actions.getSolarSystemName(id));
    } catch (e) {}

    setTimeout(() => {
      expect(recordSolarSystemNameToStore).toHaveBeenCalledTimes(1);
      expect(recordSolarSystemNameToStore).toHaveBeenCalledWith(
        mainPageState.solarSystemName
      );
    });
  });

  test('It should record error message on getSolarSystemName', async () => {
    await dispatch(actions.getSolarSystemName(id));

    setTimeout(() => {
      expect(requestError).toHaveBeenCalledWith(
        mainPageState.solarSystemNameError
      );
    });
  });

  it('should get corporation data', async () => {
    fakeAxios
      .onGet(`${endpoints.CORPORATIONS_URL}${id}`)
      .reply(200, mainPageState.corporationData);
    const recordCorporationDataToStore = jest.fn();

    try {
      await dispatch(actions.getCorporationData(id));
    } catch (e) {}

    setTimeout(() => {
      expect(recordCorporationDataToStore).toHaveBeenCalledTimes(1);
      expect(recordCorporationDataToStore).toHaveBeenCalledWith(
        mainPageState.corporationData
      );
    });
  });

  test('It should record error message on getCorporationData', async () => {
    await dispatch(actions.getCorporationData(id));

    setTimeout(() => {
      expect(requestError).toHaveBeenCalledWith(
        mainPageState.corporationDataError
      );
    });
  });

  it('should get seo data', async () => {
    fakeAxios
      .onGet(`${endpoints.CHARACTERS_URL}${id}`)
      .reply(200, mainPageState.seoData);
    const recordSeoDataToStore = jest.fn();

    try {
      await dispatch(actions.getSeoData(id));
    } catch (e) {}

    setTimeout(() => {
      expect(recordSeoDataToStore).toHaveBeenCalledTimes(1);
      expect(recordSeoDataToStore).toHaveBeenCalledWith(mainPageState.seoData);
    });
  });

  test('It should record error message on getSeoData', async () => {
    await dispatch(actions.getSeoData(id));

    setTimeout(() => {
      expect(requestError).toHaveBeenCalledWith(mainPageState.seoDataError);
    });
  });

  it('should get race', async () => {
    fakeAxios.onGet(`${endpoints.RACES_URL}`).reply(200, mainPageState.race);
    const recordRaceToStore = jest.fn();

    try {
      await dispatch(actions.getRaces());
    } catch (e) {}

    setTimeout(() => {
      expect(recordRaceToStore).toHaveBeenCalledTimes(1);
      expect(recordRaceToStore).toHaveBeenCalledWith(mainPageState.race);
    });
  });

  test('It should record error message on getRace', async () => {
    await dispatch(actions.getRaces());

    setTimeout(() => {
      expect(requestError).toHaveBeenCalledWith(mainPageState.raceError);
    });
  });
});
