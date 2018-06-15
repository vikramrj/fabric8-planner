import { InfotipReducer } from './infotip.reducer';
import { initialState as InfotipInitialState } from './../states/infotip.state';
import * as InfotipActions from './../actions/infotip.actions';

export type Action = InfotipActions.All;

describe('InfotipReducer: ', () => {
  const infoTips = {
    "6cff4ab8-c380-4aa9-9980-17b6f223d181": {
      "term": "alternate dependency",
      "en": "Dependencies recommended by OpenShift.io to replace restrictive licenses or usage outliers."
    },
    "a99bf72a-baf4-436e-8095-3955e39d5af0": {
      "term": "area",
      "en": "Use areas to organize work items to distinguish between different types or functionalities that are being worked on within a space."
    }
  };

  it('undefined action should return the default state', () => {
    const action = {} as Action;
    const state = InfotipReducer(undefined, action);

    expect(state).toBe(InfotipInitialState);
  });

  it('Initial state should be an empty array', () => {
    const initialState = [];
    expect(InfotipInitialState).not.toEqual(initialState);
    expect(InfotipInitialState).toEqual({});
  });

  it('GetSuccess action should return new state', () => {
    const action = new InfotipActions.GetSuccess(infoTips);
    const state = InfotipReducer(InfotipInitialState, action);

    expect(state).toEqual(infoTips);
  });

  it('GetError action should return previous state', () => {
    const action = new InfotipActions.GetSuccess(infoTips);
    const state = InfotipReducer(InfotipInitialState, action);

    const getErrorAction = new InfotipActions.GetError();
    const newState = InfotipReducer(state, getErrorAction);

    expect(newState).toEqual(state);
  });
});
