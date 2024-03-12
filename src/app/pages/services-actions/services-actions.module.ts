import { ServicesActionsComponent } from './services-actions.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardServicesComponent } from './card-services/card-services.component';



@NgModule({
    declarations: [
        ServicesActionsComponent,
        CardServicesComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    exports: [
        ServicesActionsComponent
    ]
})
export class ServicesActionsModule { }
