import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { countReducer, metaReducersCount } from "./reducers/counter.reducer";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('counter', countReducer, { metaReducers: metaReducersCount })
    ]
})
export class CounterModule { }
