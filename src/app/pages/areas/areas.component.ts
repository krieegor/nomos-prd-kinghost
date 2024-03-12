import { Component, HostListener, OnInit } from '@angular/core';

export interface Areas {
  id: string;
  icon: string;
  title: string;
  titleModal: string;
  text: string;
  last: boolean;
}

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  areas: Areas[] = [];

  constructor() { }

  ngOnInit(): void {




    //title = main page (InnerHTML para quebras...) 
    //titleModal = modal (no InnerHTML)
    //text = modal (InnerHTML)
    this.areas = [
      {
        id: 'area1',
        icon: './../assets/icons/areas/procedimentos-arbitrais.png',
        title: 'Escritórios <br> de advocacia',
        titleModal: 'Escritórios de advocacia',
        text: `Auxiliamos advogados em processos judiciais
        e extrajudiciais, incluindo processos administrativos
        e arbitrais. Atuamos em todas as fases das demandas processuais: seja na
        fase inicial ou com produção antecipada de provas, como assistentes técnicos
        em fase de instrução ou como especialista
        e revisores em fase de liquidação de sentenças`,
        last: false
      },
      {
        id: 'area2',
        icon: './../assets/icons/areas/tribunal-arbitral.png',
        title: 'Tribunal arbitral',
        titleModal: 'Tribunal arbitral',
        text: `<p>Para o tribunal arbitral, podemos atuar como perito
        em matérias contábeis, econômica, financeira 
        e tributária, elaborando toda a prova técnica
        demanda pelos árbitros e pelos litigantes.</p>
        <p>Já para as partes envolvidas, atuamos como assistentes técnicos, acompanhando todo 
        o processo pericial do começo ao fim. </p>`,
        last: false
      },
      {
        id: 'area3',
        icon: './../assets/icons/areas/justica-estadual.png',
        title: 'Justiça estadual,<br> federal e trabalhista',
        titleModal: 'Justiça estadual, federal e trabalhista',
        text: `Auxiliamos magistrados em casos complexos, envolvendo matéria contábil, econômica, tributária
        e financeira, com atuação direta do nosso time
        multidisciplinar. Nosso escritório de perícias possui
        profissionais com sólida experiência profissional 
        e formação acadêmica, atuantes e conhecedores das atividades a particularidades do meio forense.`,
        last: false
      },
      {
        id: 'area4',
        icon: './../assets/icons/areas/empresas.png',
        title: 'Empresas',
        titleModal: 'Justiça estadual, federal e trabalhista',
        text: `Das soluções em perícias e serviços forenses que
        oferecemos para empresas, destacam-se nossas
        soluções em investigação de fraudes corporativas,
        implementação e revisão de programas 
        de compliance anticorrupção e antissuborno, 
        criação e implementação de programas de proteção de dados, consultoria em segurança e em riscos
        cibernéticos e recuperação de créditos tributários.`,
        last: false
      },
      {
        id: 'area5',
        icon: './../assets/icons/areas/orgao-publico.png',
        title: 'Órgão público',
        titleModal: 'Órgão público',
        text: `<p> Auxiliamos através da gestão contábil e gerencial,
        quais sejam a efetiva geração de caixa para 
        os cofres municipais, como também o auxílio 
        na efetiva promoção de redução de despesas,
        possibilitando assim o gerenciamento de crises 
        e permitindo ao gestor uma maior segurança 
        na tomada de decisões. Através dos serviços 
        de Elaboração e revisão de código tributário municipal, elaboração de peças orçamentarias. </p>
        
        <p>Realizamos auditorias preventivas e investigativas
        Assessoramos em processos trabalhistas,
        previdenciários, tributários e improbidade
        administrativa. treinamento de pessoal. </p>`,
        last: true
      }
    ]
  }
}
