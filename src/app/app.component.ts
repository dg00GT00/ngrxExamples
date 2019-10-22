import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromState from './state';
import * as fromSelectors from './selectors';
import * as fromActions from './actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    counter$: Observable<number>;
    products$: Observable<fromState.IProducts[]>;
    newProduct: string;

    constructor(private store: Store<fromState.IAppState>) {

    }

    ngOnInit(): void {
        // this.counter$ = this.store.pipe(select(fromSelectors.selectCounterProperty))
        this.products$ = this.store.pipe(select(fromSelectors.selectProductsProperty))
    }

    save(): void {
        this.store.dispatch(fromActions.ADD_PRODUCT(this.newProduct))
    }

    delete(product: fromState.IProducts): void {
        this.store.dispatch(fromActions.REMOVE_PRODUCT(product.id))
    }
}
