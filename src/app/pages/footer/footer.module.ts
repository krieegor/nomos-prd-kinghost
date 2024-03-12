import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'src/app/components/modal/modal.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
