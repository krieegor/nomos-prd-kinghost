import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('click', ['$event'])
  scrollToItem(event) {
      event.preventDefault();
      const el = event.target;
      const id = el?.getAttribute('href');
      const section = document?.querySelector(id)?.offsetTop;
      window.scroll(0, section);
  }

  redirect() { 
    window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5534992947920', '_blank');
  }
}
