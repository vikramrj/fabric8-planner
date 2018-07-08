import { ActionReducer } from '@ngrx/store';
import * as  BoardActions  from '../actions/board.actions';
import * as WorkItemActions from '../actions/work-item.actions';
import { BoardState, initialState } from '../states/board.state';

export type Action = BoardActions.All | WorkItemActions.GetSuccess;

export const BoardReducer: ActionReducer<BoardState> = (state = initialState, action: Action) => {
  switch (action.type) {
    case BoardActions.GET_SUCCESS: {
      return {...action.payload};
    }
    case BoardActions.GET_ERROR: {
      return state;
    }

    case WorkItemActions.GET_SUCCESS: {

      return state;
    }
    default: {
      return state;
    }
  }
};
