import { Component, Input, OnInit } from '@angular/core';

interface Modal {
  id: string;
  icon: string;
  title: string;
  titleModal?: string;
  text: string;

}

interface Infos {
  email: string;
  name: string;
  phone: string;
  subject: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modal: Modal
  @Input() modalInfos: boolean = true;

  info: Infos = {
    email: '',
    name: '',
    phone: '',
    subject: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  send() {
    if (!this.info.email) {
      console.log('erro')
    } 
    alert('No momento estamos criando este sistema, por favor contate-nos pelo Whatsapp ou agende uma conversa.');
  }
}
