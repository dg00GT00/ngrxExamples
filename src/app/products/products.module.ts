import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { metaReducersProducts, productsReducer } from "./reducers/products.reducers";

// With the view of applying the metareducer to both "products" and "counter" sample componenets,
// the store module uses the "forFeature" method on each component module
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('products', productsReducer, { metaReducers: metaReducersProducts })
    ]
})
export class ProductsModule { }
