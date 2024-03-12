import { ModalModule } from './../../components/modal/modal.module';
import { CardAreasComponent } from './card-areas/card-areas.component';
import { AreasComponent } from './areas.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



@NgModule({
    declarations: [
        AreasComponent,
        CardAreasComponent
    ],
    imports: [
        BrowserModule,

        ModalModule
    ],
    providers: [],
    exports: [
        AreasComponent
    ]
})
export class AreasModule { }
