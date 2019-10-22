import { createAction } from '@ngrx/store';
import * as fromState from "../../app.state";
import { generateId } from 'src/app/util/generateId';

// The "products" component actions
export const REMOVE_PRODUCT = createAction('[REMOVE_PRODUCT API] Removes a product',
    (id: number) => {
        return { id: id } // The action function have to return an item on the obejct format
    });
export const ADD_PRODUCT = createAction('[ADD_PRODUCT API] Adds a new product',
    (descripton: string): fromState.IProducts => {
        return { id: generateId(), description: descripton }
    });