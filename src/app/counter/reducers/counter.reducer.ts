/* This file is not used for this sample project. It's here for test purposes */

import * as fromState from "../../state";
import * as fromActions from "../../actions";
import { createReducer, on, Action, MetaReducer, ActionReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

const initialCountState: fromState.ICountState = {
    counter: 0,
}

const _countReducer = createReducer(initialCountState,
    on(fromActions.INCREMENT_STATE, (state: fromState.ICountState) => ({ ...state, counter: state.counter + 1 })));

export function countReducer(state: fromState.ICountState | undefined, action: Action): fromState.ICountState {
    return _countReducer(state, action)
}

function debugCount(reducer: ActionReducer<fromState.ICountState, Action>): ActionReducer<fromState.ICountState, Action> {
    return function (state: fromState.ICountState, action: Action): fromState.ICountState {
        console.log('State from debugCount', state);
        console.log('Action from debugCount', action);
        return countReducer(state, action);
    }
}

const _metaReducerCount: MetaReducer<fromState.ICountState> = () => debugCount(countReducer);

export const metaReducersCount = !environment.production ? [_metaReducerCount] : [];