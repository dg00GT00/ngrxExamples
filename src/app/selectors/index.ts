import * as fromState from "../state";
import { createSelector, createFeatureSelector } from "@ngrx/store";

// ------------------------------------------SELECTORS SLICES------------------------------------------ //
// Both methods to slice a chunck of the app state are valid. This is the older method.
const selectCounter = (state: fromState.IAppState): fromState.ICountState => state.counter;
// The newer method
const selectProducts = createFeatureSelector<fromState.IAppState, fromState.IProductState>('products');

// ---------------------------------------------------------------------------------------------------- //

export const selectCounterProperty = createSelector(
    selectCounter,
    (state: fromState.ICountState): number => state.counter
);

export const selectProductsProperty = createSelector(
    selectProducts,
    (state: fromState.IProductState): fromState.IProducts[] => state.products
);