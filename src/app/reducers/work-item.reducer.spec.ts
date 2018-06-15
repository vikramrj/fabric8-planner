import { WorkItemReducer } from './work-item.reducer';
import { initialState as WorkItemInitialState } from './../states/work-item.state';
import * as WorkItemActions from './../actions/work-item.actions';
import { WorkItemUI } from './../models/work-item';
import { IterationUI } from './../models/iteration.model';

export type Action = WorkItemActions.All;

describe('WorkItemReduer: ', () => {
  it('undefined action should return the default state', () => {
    const action = {} as Action;
    const state = WorkItemReducer(undefined, action);

    expect(state).toBe(WorkItemInitialState);
  });

  it('Initial state should be as empty state', () => {
    const initialState = [];
    expect(WorkItemInitialState).toEqual(initialState);
  });

  it('GetSuccess action should return new state', () => {
    const workItems: WorkItemUI[] = [
      {
        id: '1',
        title: 'Work Item 1',
        number: '1',
        createdAt: '00:00',
        updatedAt: '00:00',
        state: 'new',
        descriptionMarkup: 'Markup',
        descriptionRendered: '<p>Hello Word</p>',
        description: 'Hello Workd',
        version: 0,
        order: 1000,
        area: null,
        iteration: null,
        assignees: null,
        creator: null,
        labels: null,
        comments: null,
        children: null,
        commentLink: '',
        childrenLink: '',
        hasChildren: false,
        parentID: '',
        link: '',
        WILinkUrl: '',
        treeStatus: 'collapsed',
        childrenLoaded: false,
        bold: false,
        createId: 1,
        type: null
      }
    ];

    const action = new WorkItemActions.GetSuccess(workItems);
    const state = WorkItemReducer(WorkItemInitialState, action);

    expect(state).toEqual(workItems);
  });

  it('GetError action should return previous state', () => {
    const workItems: WorkItemUI[] = [
      {
        id: '1',
        title: 'Work Item 1',
        number: '1',
        createdAt: '00:00',
        updatedAt: '00:00',
        state: 'new',
        descriptionMarkup: 'Markup',
        descriptionRendered: '<p>Hello Word</p>',
        description: 'Hello Workd',
        version: 0,
        order: 1000,
        area: null,
        iteration: null,
        assignees: null,
        creator: null,
        labels: null,
        comments: null,
        children: null,
        commentLink: '',
        childrenLink: '',
        hasChildren: false,
        parentID: '',
        link: '',
        WILinkUrl: '',
        treeStatus: 'collapsed',
        childrenLoaded: false,
        bold: false,
        createId: 1,
        type: null
      }
    ];

    const action = new WorkItemActions.GetSuccess(workItems);
    const state = WorkItemReducer(WorkItemInitialState, action);

    const getErrorAction = new WorkItemActions.GetError();
    const newState = WorkItemReducer(state, getErrorAction);

    expect(newState).toEqual(state);
  });

  it('AddSuccess action should return new state', () => {
    const workItems: WorkItemUI[] = [
      {
        id: '1',
        title: 'Work Item 1',
        number: '1',
        createdAt: '00:00',
        updatedAt: '00:00',
        state: 'new',
        descriptionMarkup: 'Markup',
        descriptionRendered: '<p>Hello Word</p>',
        description: 'Hello Workd',
        version: 0,
        order: 1000,
        area: null,
        iteration: null,
        assignees: null,
        creator: null,
        labels: null,
        comments: null,
        children: null,
        commentLink: '',
        childrenLink: '',
        hasChildren: false,
        parentID: '',
        link: '',
        WILinkUrl: '',
        treeStatus: 'collapsed',
        childrenLoaded: false,
        bold: false,
        createId: 1,
        type: null
      }
    ];

    const action = new WorkItemActions.AddSuccess(workItems[0]);
    const state = WorkItemReducer(WorkItemInitialState, action);

    expect(state).toEqual(workItems);
  });

  it('AddError action should return the previous state', () => {
    const workItems: WorkItemUI[] = [
      {
        id: '1',
        title: 'Work Item 1',
        number: '1',
        createdAt: '00:00',
        updatedAt: '00:00',
        state: 'new',
        descriptionMarkup: 'Markup',
        descriptionRendered: '<p>Hello Word</p>',
        description: 'Hello Workd',
        version: 0,
        order: 1000,
        area: null,
        iteration: null,
        assignees: null,
        creator: null,
        labels: null,
        comments: null,
        children: null,
        commentLink: '',
        childrenLink: '',
        hasChildren: false,
        parentID: '',
        link: '',
        WILinkUrl: '',
        treeStatus: 'collapsed',
        childrenLoaded: false,
        bold: false,
        createId: 1,
        type: null
      }
    ];

    const action = new WorkItemActions.GetSuccess(workItems);
    const state = WorkItemReducer(WorkItemInitialState, action);

    const addErrorAction = new WorkItemActions.AddError();
    const newState = WorkItemReducer(state, addErrorAction);

    expect(newState).toEqual(state);
  });

  it('UpdateSuccess action should return updated state', () => {
    const workItems: WorkItemUI[] = [
      {
        id: '1',
        title: 'Work Item 1',
        number: '1',
        createdAt: '00:00',
        updatedAt: '00:00',
        state: 'new',
        descriptionMarkup: 'Markup',
        descriptionRendered: '<p>Hello Word</p>',
        description: 'Hello Workd',
        version: 0,
        order: 1000,
        area: null,
        iteration: null,
        assignees: null,
        creator: null,
        labels: null,
        comments: null,
        children: null,
        commentLink: '',
        childrenLink: '',
        hasChildren: false,
        parentID: '',
        link: '',
        WILinkUrl: '',
        treeStatus: 'collapsed',
        childrenLoaded: false,
        bold: false,
        createId: 1,
        type: null
      }
    ];

    workItems[0].title = 'Work Item';

    const action = new WorkItemActions.GetSuccess(workItems);
    const state = WorkItemReducer(WorkItemInitialState, action);

    const updateSuccessAction = new WorkItemActions.UpdateSuccess(workItems[0]);
    const newState = WorkItemReducer(state, updateSuccessAction);

    expect(newState).toEqual(state);
  });

  it('UpdateError action should return previous state', () => {
    const action = new WorkItemActions.UpdateError();
    const newState = WorkItemReducer(WorkItemInitialState, action);

    expect(newState).toEqual(WorkItemInitialState);
  });

  it('GetChildrenSuccess action should return new state', () => {
    const parent: WorkItemUI = {
      id: '1',
      title: 'Work Item 1',
      number: '1',
      createdAt: '00:00',
      updatedAt: '00:00',
      state: 'new',
      descriptionMarkup: 'Markup',
      descriptionRendered: '<p>Hello Word</p>',
      description: 'Hello Workd',
      version: 0,
      order: 1000,
      area: null,
      iteration: null,
      assignees: null,
      creator: null,
      labels: null,
      comments: null,
      children: null,
      commentLink: '',
      childrenLink: '',
      hasChildren: false,
      parentID: '',
      link: '',
      WILinkUrl: '',
      treeStatus: 'collapsed',
      childrenLoaded: false,
      bold: false,
      createId: 1,
      type: null
    };

    const children: WorkItemUI[] = [
      {
        id: '2',
        title: 'Work Item 2',
        number: '2',
        createdAt: '00:00',
        updatedAt: '00:00',
        state: 'new',
        descriptionMarkup: 'Markup',
        descriptionRendered: '<p>Hello Word</p>',
        description: 'Hello Workd',
        version: 0,
        order: 1001,
        area: null,
        iteration: null,
        assignees: null,
        creator: null,
        labels: null,
        comments: null,
        children: null,
        commentLink: '',
        childrenLink: '',
        hasChildren: false,
        parentID: '1',
        link: '',
        WILinkUrl: '',
        treeStatus: 'collapsed',
        childrenLoaded: false,
        bold: false,
        createId: 1,
        type: null
      }
    ];
    const action = new WorkItemActions.GetSuccess([parent]);
    const state = WorkItemReducer(WorkItemInitialState, action);

    const getChildrenSuccessAction = new WorkItemActions.GetChildrenSuccess({parent: parent, children: children});
    const newState = WorkItemReducer(state, getChildrenSuccessAction);

    expect(newState[0].childrenLoaded).toBe(true);
    expect(newState[0].treeStatus).toBe('expanded');
  });

  it('GetChildrenError action should return previous state', () => {
    const parent: WorkItemUI = {
      id: '1',
      title: 'Work Item 1',
      number: '1',
      createdAt: '00:00',
      updatedAt: '00:00',
      state: 'new',
      descriptionMarkup: 'Markup',
      descriptionRendered: '<p>Hello Word</p>',
      description: 'Hello Workd',
      version: 0,
      order: 1000,
      area: null,
      iteration: null,
      assignees: null,
      creator: null,
      labels: null,
      comments: null,
      children: null,
      commentLink: '',
      childrenLink: '',
      hasChildren: false,
      parentID: '',
      link: '',
      WILinkUrl: '',
      treeStatus: 'expanded',
      childrenLoaded: false,
      bold: false,
      createId: 1,
      type: null
    };

    const action = new WorkItemActions.GetSuccess([parent]);
    const state = WorkItemReducer(WorkItemInitialState, action);

    const GetChildrenErrorAction = new WorkItemActions.GetChildrenError(parent);
    const newState = WorkItemReducer(state, GetChildrenErrorAction);

    expect(newState[0].treeStatus).toBe('collapsed');
  });

  it('UpdateWorkItemIteration action should return new state', () => {
    const iteration: IterationUI = {
      id: '1',
      name: 'Iteration #1',
      parentPath: '/',
      resolvedParentPath: '/',
      userActive: false,
      isActive: false,
      startAt: '',
      endAt: '',
      description: '',
      state: 'new',
      link: '',
      workItemTotalCount: 0,
      workItemClosedCount: 0,
      children: null,
      parentId: '0',
      hasChildren: false,
      selected: false,
      showChildren: false
    };

    const workItem: WorkItemUI = {
      id: '1',
      title: 'Work Item 1',
      number: '1',
      createdAt: '00:00',
      updatedAt: '00:00',
      state: 'new',
      descriptionMarkup: 'Markup',
      descriptionRendered: '<p>Hello Word</p>',
      description: 'Hello Workd',
      version: 0,
      order: 1000,
      area: null,
      iteration: {
        id: '1',
        name: null,
        parentPath: null,
        resolvedParentPath: null,
        userActive: null,
        isActive: null,
        startAt: null,
        endAt: null,
        description: null,
        state: null,
        link: '',
        workItemTotalCount: null,
        workItemClosedCount: null,
        children: null,
        parentId: null,
        hasChildren: null,
        selected: false,
        showChildren: false
      },
      assignees: null,
      creator: null,
      labels: null,
      comments: null,
      children: null,
      commentLink: '',
      childrenLink: '',
      hasChildren: false,
      parentID: '',
      link: '',
      WILinkUrl: '',
      treeStatus: 'expanded',
      childrenLoaded: false,
      bold: false,
      createId: 1,
      type: null
    };

    const action = new WorkItemActions.GetSuccess([workItem]);
    const state = WorkItemReducer(WorkItemInitialState, action);

    const updateWorkItemIterationAction = new WorkItemActions.UpdateWorkitemIteration({iteration: iteration});
    const newState = WorkItemReducer(state, updateWorkItemIterationAction);

    expect(newState[0].iteration.name).toBe('Iteration #1');
  });
});
