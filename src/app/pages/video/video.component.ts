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
  scrollToItem(event: Event): void {
      event.preventDefault();
      const el = event.target as HTMLElement;
      const id = el?.getAttribute('href');
      if (id) {
        const section = document.querySelector(id) as HTMLElement;
        if (section) {
          window.scroll(0, section.offsetTop);
        }
      }
  }

  redirect(): void {
    window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5534997230808', '_blank');
  }
}
