import { Card } from '../services-actions.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.scss']
})
export class CardServicesComponent implements OnInit {

  @Input() card: Card;
  active: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    if (this.active) {
      this.active = false;
    } else {
      this.active = true;
    }    
   
  }
}
