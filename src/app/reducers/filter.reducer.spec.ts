import { FilterReducer } from './filter.reducer';
import { initialState as FilterInitialState } from './../states/filter.state';
import * as FilterActions from './../actions/filter.actions';
import { FilterModel } from './../models/filter.model';

export type Action = FilterActions.All;

describe('FilterReducer: ', () => {
  const filters: FilterModel[] = [
    {
      attributes: {
        description: "Filter by assignee",
        key: "assignee",
        query: "filter[assignee]={id}",
        title: "Assignee",
        type: "users",
      },
      type:"filters",
    },
    {
      attributes: {
        description: "Filter by area",
        key: "area",
        query: "filter[area]={id}",
        title: "Area",
        type: "areas",
      },
      type:"filters",
    }
  ];

  it('undefined action should return the default state', () => {
    const action = {} as Action;
    const state = FilterReducer(undefined, action);

    expect(state).toBe(FilterInitialState);
  });

  it('Initial state should be an empty array', () => {
    const initialState = [];
    expect(FilterInitialState).toEqual(initialState);
  });

  it('GetSuccess action should return a new state', () => {
    const action = new FilterActions.GetSuccess(filters);
    const state = FilterReducer(FilterInitialState, action);

    expect(state).toEqual(filters);
  });

  it('GetError action should return previous state', () => {
    const action = new FilterActions.GetSuccess(filters);
    const state = FilterReducer(FilterInitialState, action);

    const getErrorAction = new FilterActions.GetError();
    const newState = FilterReducer(state, getErrorAction);

    expect(newState).toEqual(state);
  });
});
