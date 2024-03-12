import { Component, OnInit } from '@angular/core';

export interface ButtonsLGPD {
  id: string;
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-lgpd',
  templateUrl: './lgpd.component.html',
  styleUrls: ['./lgpd.component.scss']
})
export class LgpdComponent implements OnInit {

  buttons: ButtonsLGPD[] = [];

  constructor() { }

  ngOnInit(): void {
    this.buttons = [
      {
        id: 'button1',
        icon: '../../../assets/icons/lgpd/lgpd.png',
        title: 'LGDP',
        text: `<p>Em 2014, o Brasil passou por uma de suas maiores transformações digitais já vistas – oficializar 
        a democratização da internet. Conhecida como 
        lei 12.965 de 2014 – o marco civil da internet, 
        foi desenhado levando em consideração alguns princípios que se propunham solucionar questões 
        em torno do uso da internet na época. Um destes princípios, estabelece que uma pessoa tem o direito de ter sua privacidade assegurada nos meios virtuais. </p>
        <p>Na última década a internet tornou-se uma ferramenta presente no cotidiano das pessoas 
        e organizações e tem sido indispensável ao bom funcionamento dos negócios. O marco civil estabelece em seu corpo que “O princípio da privacidade nada mais é do que a garantia de inviolabilidade das comunicações dos usuários.”. 
        É partindo deste princípio que a LGPD – Lei Geral 
        de Proteção de dados, mais tarde em 2018 foi sancionada e veio a se tornar uma realidade no Brasil em agosto de 2020, inspirada pelas leis de proteção de dados já existente na Europa, a GDPR – General Data Protection Regulation.</p>
        <p>Neste sentido, a Lei do Marco Civil, atribui o dever de sigilo de suas informações a um provedor de internet. Para tanto, a Lei Geral de Proteção de dados, atua como extensão nos campos cegos do marco civil 
        e complementa os princípios ao conectar aos manipuladores de dados sensíveis as suas devidas responsabilidades, bem como deixa estabelecido 
        que os dados são de posse aos seus devidos titulares, que mandatoriamente devem ter total controle 
        de como estes dados são manipulados.</p>
        <p>Diferentemente do marco civil, as tratativas abordadas na LGPD não se limitam apenas aos provedores de telecomunicações – caracteriza 
        que qualquer pessoa física ou jurídica que realize qualquer tratamento de dados, é sujeita 
        as penalidades previstas em seu corpo.</p>
        <p>Nisto, o Grupo Nomos é pioneiro e posiciona-se como parceiro estratégico para apoiar pessoas e empresas em se adequar dentro das expectativas da LGPD. Temos como objetivo trazer aos nossos clientes 
        a possibilidade de maximizar o compromisso com seus clientes e parceiros nas áreas de negócio 
        e infraestrutura de Tecnologia da Informação, minimizando danos ao patrimônio, adequando 
        o negócio para que ele permaneça exercendo 
        suas atividades com transparência e qualidade.</p>`
      },
      {
        id: 'button2',
        icon: '../../../assets/icons/lgpd/cyber-segurity.png',
        title: 'Cyber Security',
        text: `<p>Um crime digital, ou cibercrime, é o ato ilicito caracterizado por ter sido acometido em algum meio digital, ou seja, em computadores, smartphones, qualquer dispositivo intelgente, 
        que esteja conectado a internet ou não e que, através deste, possa ser obtido informações de maneira não autorizada e assim então gerar dano a uma pessoa ou empresa.
        </p>
        <p>Os cibercrimes tem suas iniciativas não somente por dinheiro (que é o caso mais popular), mas também existem os cibercriminosos que buscam notoriedade dentro de comunidades ligadas ao tema,
         há também aqueles que buscam apenas causar algum dano a pessoa ou empresa, bem como os que estão nessa apenas por curiosidade.</p>
         <p>É importante é saber destinguir que nem todo hacker, por ser hacker, deve ser considerado uma pessoa criminosa. Pessoas normalmente munidas de algum conhecimento importante, 
         podem optar por utiliza-lo para obter algum tipo de vantagem ilicita, como também podem optar por atuar no lado oposto da situação, que são os conhecidos hackers éticos, 
         profissionais da área de segurança de informação que trabalham em prol da segurança da informação, 
         afim de garantir que informações permaneçam intactatas e acessadas somente por aqueles a quem elas dizem respeito.
         </p>
        <p> Destacam-se como tipos de ataques ciberneticos mais comuns, os de fraude por e-mail e pela Internet. Porém existem os crimes de fraude de identidades, quando informações pessoais são roubadas e usadas. 
        Há também os de roubo de dados financeiros ou relacionados a pagamento de cartões, roubo e venda de dados corporativos. Extorsão cibernética, que exige dinheiro para impedir o ataque ameaçado.
         Ataques de ransomware, um tipo de extorsão cibernética. Espionagem cibernética, quando hackers acessam dados do governo ou de uma empresa.</p>        
        <p>Conte com a nossa equipe para manter-se seguro.</p>`
      }
    ]
  }


}
