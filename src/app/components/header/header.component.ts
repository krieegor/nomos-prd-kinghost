import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrollPage: boolean;
  qntClicks: number = 0;
  open: boolean = false; // Inicializa como false

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  ngOnInit() {
    // Removido o listener de scroll manual
  }

  // Angular é chato ent para escutar eventos normais html na maior parte das x vai precisar do HostListener
  @HostListener('click', ['$event'])
  scrollToItem(event) {
    // removemos o redirecionamento base do navegador.
    event.preventDefault();
    // pegamos o evento (click) e pegamos o atributo de onde foi clicado, em seguida procuro sections que tenha o id do atributo clicado.
    const el = event.target;
    const id = el?.getAttribute('href');
    if (!id) return;
    const section = this.document?.querySelector(id)?.offsetTop;

    // primeiro pega onde sua tela ta, dps pega onde a section ta e calcula a distancia até ela.
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = section - startY;

    // pega o exato momento de agora.
    const startTime = new Date().getTime();

    // é criada uma variavel para saber se o evento esta sendo disparado.
    let rolando: boolean = false;

    // é criado um valor na função que recebe inicialmente o valor externo (provavelmente sempre vai ser 1);
    let qntClicks: number = this.qntClicks;

    // se a pessoa ja estiver na section que ela ta clicando para o codigo e zera os clicks globais.
    if (startY == section) {
      this.qntClicks = 0;
      return;
    }
    // animação
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    // se tiver fazendo a animação ignora proximas chamadas;
    if (rolando) return;

    // roda varias vezes o codigo
    const timer = setInterval(() => {
      // muda-se a variavel rolando para o codigo entender que a animação esta em andamento.
      rolando = true;

      // se a animação estiver em andamento e qnt tickets > 1 : faz alguma coisa (era para parar na teoria)
      if (rolando && (qntClicks > 1)) {
        clearInterval(timer);
      }

      // pega o tempo de agora e calcula o tempo inicial da animação. Redireciona para o novo Y com a animação
      const time = new Date().getTime() - startTime;
      const newY = easeInOutQuart(time, startY, distanceY, 2000);
      // deu o tempo final, reseta todas informações
      if (time >= 2000) {
        rolando = false;
        qntClicks = 0;
        this.qntClicks = qntClicks;
        clearInterval(timer);
      }
      window.scroll(0, newY);

    }, 1000 / 60); // 60 fps

    // Fecha o menu colapsável após rolar a página
    this.closeMenu();
  }

  active() {
    // onde esta passando
    let current = '';
    // onde aplicar a classe
    const navItem = this.document.querySelectorAll('.nav-item');
    // nome quais sections procurar (todas)
    const section = this.document.querySelectorAll('section');

    // percorre as sections q foram pegas a cima
    section.forEach(section => {
      // pega onde começa a section - 80 px (por causa do header fixed)
      const sectionTop = section?.offsetTop - 80;
      // se o scroll y estiver no y > = onde fica a section pega o nome da section em que o y ta.
      if (window.pageYOffset >= sectionTop) {
        // armazena o nome da section
        current = section.getAttribute('id');
      }
    });

    // percorre as classes com .nav-item
    navItem.forEach(item => {
      // tira todos .active das .nav-item
      item.classList.remove('active');
      // se a classe tiver o mesmo nome que current armazena
      if (item.classList.contains(current)) {
        // aplica classe .active
        item.classList.add('active');
      }
    });
  }

  @HostListener("window:scroll")
  onWindowScroll() {
    const posicaoInicial = 0;
    const posicaoScroll = window.scrollY;

    // Ativa/desativa transparencia da nav.
    if (posicaoScroll != posicaoInicial) {
      this.scrollPage = true;
    }
    else if (this.scrollPage && posicaoScroll < 250) {
      this.scrollPage = false;
    }
  }

  click() {
    this.qntClicks++;
  }

  expandir() {
    this.open = !this.open;
  }

  closeMenu() {
    const navbarCollapse = this.document.getElementById('navbarText');
    if (navbarCollapse) {
      this.renderer.removeClass(navbarCollapse, 'show');
      this.open = false;
    }
  }

  contact() {
    alert('building...');
  }

  setActiveNavItem(event: Event): void {
    const el = event.target as HTMLElement;
    const navItems = this.document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    el.parentElement?.classList.add('active');
  }
}
