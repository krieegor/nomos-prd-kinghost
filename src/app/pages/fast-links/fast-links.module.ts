import { FastLinksComponent } from './fast-links.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    FastLinksComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FastLinksComponent
  ]
})
export class FastLinksModule { }
