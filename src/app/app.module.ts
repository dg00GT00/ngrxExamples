import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { FormsModule } from "@angular/forms";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({}, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        // CounterModule, // Commented out with the view of not interfering on the logs displayed by the metareducers
        ProductsModule,
        StoreDevtoolsModule.instrument({maxAge: 25})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
