import { LgpdComponent } from './lgpd.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { ModalModule } from 'src/app/components/modal/modal.module';



@NgModule({
  declarations: [
    LgpdComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [
    LgpdComponent
  ]
})
export class LgpdModule { }
