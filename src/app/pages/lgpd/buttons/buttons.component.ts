import { ButtonsLGPD } from './../lgpd.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() button: ButtonsLGPD;

  constructor() { }

  ngOnInit(): void {
  }

}
