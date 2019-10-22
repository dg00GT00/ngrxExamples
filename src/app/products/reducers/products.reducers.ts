import { ActionReducer, createReducer, MetaReducer, Action, on } from '@ngrx/store';
import * as fromState from "../../state";
import * as fromActions from "../../actions";
import { environment } from 'src/environments/environment';

const initialProductState: fromState.IProductState = {
    // For this example app is not needed initialized the product array with an object
    products: [
        // {
        //     id: 0,
        //     description: ''
        // }
    ],
}

// This function is here only for testing purposes. It plays the role has a middleware on the Redux world
function debugProducts(reducer: ActionReducer<fromState.IProductState, Action>): ActionReducer<fromState.IProductState, Action> {
    return function (state: fromState.IProductState, action: Action): fromState.IProductState {
        console.log('State from debugProducts', state);
        console.log('Action from degbugProducts', action);
        return reducer(state, action);
    }
}

// As the object for the initial state has only the "product" property to be updated,
// the full prior state is ignored, in other words, is not needed apply the spread operator
// representing the previous object state upon the new one.
const _productsReducer = createReducer(initialProductState,
    on(fromActions.ADD_PRODUCT,
        (state: fromState.IProductState, products): fromState.IProductState => {
            return { products: [...state.products, products] }
        }),
    on(fromActions.REMOVE_PRODUCT,
        (state: fromState.IProductState, { id }): fromState.IProductState => {
            return { products: state.products.filter(p => p.id !== id) }
        })
)

// The reducer function have to be returned by a wrapper function because the AOT features
export function productsReducer(state: fromState.IProductState | undefined, action: Action): fromState.IProductState {
    return _productsReducer(state, action)
}

const _metaReducerProduct: MetaReducer<fromState.IProductState> = () => debugProducts(productsReducer);

// The metareducer will not be applied on production environment
export const metaReducersProducts = !environment.production ? [_metaReducerProduct] : [];