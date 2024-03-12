import { Areas } from './../areas.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-areas',
  templateUrl: './card-areas.component.html',
  styleUrls: ['./card-areas.component.scss']
})
export class CardAreasComponent implements OnInit {

  @Input() area: Areas;
  
  constructor() { }

  ngOnInit(): void {
  }
}
