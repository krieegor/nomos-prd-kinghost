import { Component, OnInit } from '@angular/core';

export interface Card {
  id: string;
  icon: string;
  title: string;
  text: string;
}


@Component({
  selector: 'app-services-actions',
  templateUrl: './services-actions.component.html',
  styleUrls: ['./services-actions.component.scss']
})


export class ServicesActionsComponent implements OnInit {

  cards: Card[] = [];

  constructor() { }

  ngOnInit(): void {

    this.cards = [
      {
        id: '1',
        icon: '../../../assets/icons/services/pericia-contabil.png',
        title: 'Perícia contábil e financeira',
        text: `Perícias contábeis; Perícias econômico-financeiras; Perícias bancárias e operações financeiras; 
        Perícias administrativas e de gestão; Perícias e prova técnica em área penal-empresarial; Perícia 
        em arbitragem e mediação; Assistência técnica pericial completa - judicial e extrajudicial; 
        Estratégia de prova e elaboração de quesitos técnicos; Produção antecipada de provas técnicas; 
        Testemunha técnica (expert witnesses); Consultoria pericial, negociação assistida e dispute 
        board; Procedimentos pré-acordados.`
      },
      {
        id: '2',
        icon: '../../../assets/icons/services/pericia-tributaria.png',
        title: 'Perícia tributária',
        text: `Perícias em processos tributários judiciais e extrajudiciais; Revisão e suporte técnico em autos de infração; Suporte contábil em contencioso tributário; Laudos e pareceres técnicos para processos administrativos; Produção antecipada de provas em matéria tributária; Estratégia 
        de prova e elaboração de quesitos; Assistência técnica pericial; Perícia trabalhista 
        e previdenciária; Cálculos e revisões técnicas de natureza trabalhista; Cálculos de provisão trabalhista; Cálculos de liquidação de sentença; Impugnação de cálculos trabalhistas; Estratégia de prova e elaboração de quesitos; Produção antecipada de provas em matéria trabalhista; Assistência técnica pericial.`
      },
      {
        id: '3',
        icon: '../../../assets/icons/services/servicos-tecnicos.png',
        title: `Serviços técnicos especializados de natureza <br>
        predominantemente intelectual`,
        text: `Estudos técnicos; planejamentos, projetos básicos e projetos executivos; Pareceres, perícias e 
        avaliações em geral; Assessorias e consultorias técnicas e auditorias financeiras e tributárias; 
        Fiscalização, supervisão e gerenciamento de obras e serviços; Patrocínio ou defesa de causas 
        judiciais e administrativas; Treinamento e aperfeiçoamento de pessoal.`
      },
      {
        id: '4',
        icon: '../../../assets/icons/services/pericia-digital.png',
        title: 'Perícia digital, Forensic Technology & Cyber Security',
        text: `Perícia digital, cyber forensics & tecnologia forense; E-discovery Consulting; Background check
        de diligência reputacional e OSIN; Data analytics, business intelligence e análise de dados 
        robustos; Consultoria em segurança cibernética.`
      },
      {
        id: '5',
        icon: './../../assets/icons/services/compliance.png',
        title: 'Compliance, integrity & ABAC Services',
        text: `Anti-bribery & anti-corruption (“ABAC”) due diligence; Monitoramento de riscos de compliance 
        anticorrupção; Diagnóstico, avaliação e implementação de programas de compliance; 
        Programas de prevenção à lavagem de dinheiro (“AML”); Avaliação de riscos de fraudes (“FRA -
        Fraud Risk Assessment”); Compliance Monitor (monitoramento de ambiente de compliance); 
        Governança, mapeamento de riscos e gestão de controles internos.`
      },
      {
        id: '6',
        icon: './../../assets/icons/services/transacoes.png',
        title: 'Transações e avaliações de empresas',
        text: `Perícias técnicas judiciais e extrajudiciais em matéria de M&A; Valuation e avaliação de 
        empresas para fins de compra e venda; Laudo de avaliação para fins de incorporação, cisão e 
        fusão; Due diligencie contábil, financeira, trabalhista e tributária.`
      }
    ];


  }

}
