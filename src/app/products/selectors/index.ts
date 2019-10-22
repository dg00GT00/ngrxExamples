import { IProductEntity } from "../entity/product.entity.interface";
import { adapterProduct } from "../entity/product.entity.adapter";
import { IAppState } from "../../app.state";
import { createSelector } from '@ngrx/store';

// Theses methods are used without the Entity code approach
// ------------------------------------------SELECTORS SLICES------------------------------------------ //
// Both methods to slice a chunck of the app state are valid. This is the older method.
// const selectProducts = (state: fromState.IAppState): fromState.IProductState => state.products;
// // The newer method
// const selectProducts = createFeatureSelector<fromState.IAppState, fromState.IProductState>('products');

// ---------------------------------------------------------------------------------------------------- //

const {selectAll} = adapterProduct.getSelectors();

const selectProducts = (state: IAppState): IProductEntity => state.products;

export const selectProductsProperty = createSelector( selectProducts, selectAll );