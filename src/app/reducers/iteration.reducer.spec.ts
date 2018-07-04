import { cloneDeep } from 'lodash';
import * as IterationActions from './../actions/iteration.actions';
import { IterationUI } from './../models/iteration.model';
import { IterationState } from './../states/iteration.state';
import { initialState as IterationInitialState } from './../states/iteration.state';
import { iterationReducer, iterationUiReducer } from './iteration-reducer';

export type Action = IterationActions.All;

describe('IterationReducer: ', () => {
  let iterations: IterationState;

  beforeEach(() => {
    iterations = {
      '4608365f-c6c9-4b83-af42-1881c974618b': {
        id: '4608365f-c6c9-4b83-af42-1881c974618b',
        name: 'Iteration #1',
        parentPath: '/b3b41b89-864b-4799-a36f-5af9b56462ff',
        resolvedParentPath: '/viraj1',
        userActive: false,
        isActive: false,
        startAt: '2018-06-08T12:00:00Z',
        endAt: '2018-06-23T12:00:00Z',
        description: '',
        state: 'new',
        link: 'https://api.prod-preview.openshift.io/api/iterations/4608365f-c6c9-4b83-af42-1881c974618b',
        workItemTotalCount: 0,
        workItemClosedCount: 0,
        parentId: 'b3b41b89-864b-4799-a36f-5af9b56462ff',
        hasChildren: false,
        children: null,
        selected: false,
        showChildren: false
      },
      '6bda7850-1c26-402e-ab7b-6b4c489a8a2e': {
        id: '6bda7850-1c26-402e-ab7b-6b4c489a8a2e',
        name: 'Iteration #2',
        parentPath: '/b3b41b89-864b-4799-a36f-5af9b56462ff',
        resolvedParentPath: '/viraj1',
        userActive: false,
        isActive: false,
        startAt: '2018-06-08T12:00:00Z',
        endAt: '2018-06-23T12:00:00Z',
        description: '',
        state: 'new',
        link: 'https://api.prod-preview.openshift.io/api/iterations/6bda7850-1c26-402e-ab7b-6b4c489a8a2e',
        workItemTotalCount: 0,
        workItemClosedCount: 0,
        parentId: 'b3b41b89-864b-4799-a36f-5af9b56462ff',
        hasChildren: false,
        children: null,
        selected: false,
        showChildren: false
      }
    };
  });

  it('undefined action should return the default state', () => {
    const action = {} as Action;
    const state = iterationReducer(undefined, action);

    expect(state).toBe(IterationInitialState);
  });

  it('Initial state should be as empty state', () => {
    const initialState = {};

    expect(IterationInitialState).toEqual(initialState);
  });

  it('GetSuccess action should return new state', () => {
    const action = new IterationActions.GetSuccess(iterations);
    const state = iterationReducer(IterationInitialState, action);

    expect(state).toEqual(iterations);
  });

  it('GetError action should return previous state', () => {
    const action = new IterationActions.GetSuccess(iterations);
    const state = iterationReducer(IterationInitialState, action);

    const getErrorAction = new IterationActions.GetError();
    const newState = iterationReducer(state, getErrorAction);

    expect(newState).toEqual(state);
  });

  it('AddSuccess action should return new state', () => {
    let iteration: IterationUI = {
      id: '320dddd6-6824-4e74-8583-642b78d9bbbd',
      name: 'Iteration #3',
      parentPath: '/4608365f-c6c9-4b83-af42-1881c974618b',
      resolvedParentPath: '/iteratiion #1',
      userActive: false,
      isActive: false,
      startAt: '2018-06-08T12:00:00Z',
      endAt: '2018-06-23T12:00:00Z',
      description: '',
      state: 'new',
      link: 'https://api.prod-preview.openshift.io/api/iterations/320dddd6-6824-4e74-8583-642b78d9bbbd',
      workItemTotalCount: 0,
      workItemClosedCount: 0,
      parentId: '4608365f-c6c9-4b83-af42-1881c974618b',
      hasChildren: false,
      children: null,
      selected: false,
      showChildren: false
    };

    const action = new IterationActions.GetSuccess(iterations);
    const state = iterationReducer(IterationInitialState, action);

    const addSuccessAction = new IterationActions.AddSuccess({
      iteration: iteration, parent: iterations['4608365f-c6c9-4b83-af42-1881c974618b']
    });
    const newState = iterationReducer(state, addSuccessAction);

    expect(newState['320dddd6-6824-4e74-8583-642b78d9bbbd']).toEqual(iteration);
    expect(newState['4608365f-c6c9-4b83-af42-1881c974618b'].hasChildren).toBe(true);
  });

  it('AddError action should return previous state', () => {
    const action = new IterationActions.GetSuccess(iterations);
    const state = iterationReducer(IterationInitialState, action);

    const addErrorAction = new IterationActions.AddError();
    const newState = iterationReducer(state, addErrorAction);

    expect(newState).toEqual(state);
  });

  it('UpdateSuccess action should return new state', () => {
    let updatedIteration = cloneDeep(iterations['4608365f-c6c9-4b83-af42-1881c974618b']);
    updatedIteration.name = 'iteration ###';

    const action = new IterationActions.GetSuccess(iterations);
    const state = iterationReducer(IterationInitialState, action);

    expect(state['4608365f-c6c9-4b83-af42-1881c974618b'].name).toBe('Iteration #1');

    const updateSuccessAction = new IterationActions.UpdateSuccess(updatedIteration);
    const newState = iterationReducer(state, updateSuccessAction);

    expect(newState['4608365f-c6c9-4b83-af42-1881c974618b'].name).toBe('iteration ###');
  });

  it('UpdateError action should return previous state', () => {
    const action = new IterationActions.GetSuccess(iterations);
    const state = iterationReducer(IterationInitialState, action);

    const updateErrorAction = new IterationActions.UpdateError();
    const newState = iterationReducer(state, updateErrorAction);

    expect(newState).toEqual(state);
  });

  fit('Select action should return new state', () => {
    let iteration: IterationUI = {
      id: '320dddd6-6824-4e74-8583-642b78d9bbbd',
      name: 'Iteration #3',
      parentPath: '/4608365f-c6c9-4b83-af42-1881c974618b',
      resolvedParentPath: '/iteratiion #1',
      userActive: false,
      isActive: false,
      startAt: '2018-06-08T12:00:00Z',
      endAt: '2018-06-23T12:00:00Z',
      description: '',
      state: 'new',
      link: 'https://api.prod-preview.openshift.io/api/iterations/320dddd6-6824-4e74-8583-642b78d9bbbd',
      workItemTotalCount: 0,
      workItemClosedCount: 0,
      parentId: '4608365f-c6c9-4b83-af42-1881c974618b',
      hasChildren: false,
      children: null,
      selected: false,
      showChildren: false
    };

    const action = new IterationActions.GetSuccess(iterations);
    const state = iterationReducer(IterationInitialState, action);

    const addSuccessAction = new IterationActions.AddSuccess({
      iteration: iteration, parent: iterations['4608365f-c6c9-4b83-af42-1881c974618b']
    });
    const newState = iterationReducer(state, addSuccessAction);

    expect(newState['320dddd6-6824-4e74-8583-642b78d9bbbd']).toEqual(iteration);
    expect(newState['4608365f-c6c9-4b83-af42-1881c974618b'].hasChildren).toBe(true);

    const selectAction = new IterationActions.Select('320dddd6-6824-4e74-8583-642b78d9bbbd');
    const updatedState = iterationReducer(newState, selectAction);

    expect(updatedState['320dddd6-6824-4e74-8583-642b78d9bbbd'].selected).toBe(true);
    expect(updatedState['4608365f-c6c9-4b83-af42-1881c974618b'].showChildren).toBe(true);
  });
});
