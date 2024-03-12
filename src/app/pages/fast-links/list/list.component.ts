import { Lista } from './../fast-links.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() lista: Lista; 
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
