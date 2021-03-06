import { createAction, props } from '@ngrx/store';
import { generateId } from "../util/generateId";
import * as fromState from "../state";

// The "counter" component action
export const INCREMENT_STATE = createAction('[INCREMENT_STATE API] Increments the state');


// The "product" component actions
export const REMOVE_PRODUCT = createAction('[REMOVE_PRODUCT API] Removes a product',
    (id: number) => {
        return { id: id } // The action function have to return an item on the obejct format
    });
export const ADD_PRODUCT = createAction('[ADD_PRODUCT API] Adds a new product',
    (descripton: string): fromState.IProducts => {
        return { id: generateId(), description: descripton }
    });