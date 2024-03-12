import { Component, OnInit } from '@angular/core';

export interface Lista {
  id: string;
  titulo: string;
  links: Links[];
  last: boolean;
}

interface Links {
  nome: string;
  url: string;
}

@Component({
  selector: 'app-fast-links',
  templateUrl: './fast-links.component.html',
  styleUrls: ['./fast-links.component.scss']
})
export class FastLinksComponent implements OnInit {

  listas: Lista[] = [];
  

  constructor() { }

  ngOnInit(): void {
    this.listas = [
      {
        id: '1',
        titulo: 'Governo federal',
        last: false,
        links: [
          {
            nome: 'Diário Oficial da União',
            url: 'https://www.gov.br/imprensanacional/pt-br'
          },
          {
            nome: 'Governo Federal',
            url: 'https://www.gov.br/pt-br'
          },
          {
            nome: 'Ministério da Saúde',
            url: 'https://www.gov.br/saude/pt-br'
          },
          {
            nome: 'Ministério da Economica',
            url: 'https://www.gov.br/economia/pt-br'
          },
          {
            nome: 'Ministério da Educação',
            url: 'https://portal.mec.gov.br/'
          },
          {
            nome: 'Portal da Transparência',
            url: 'https://www.portaltransparencia.gov.br/'
          },
          {
            nome: 'Serpro',
            url: 'https://www.serpro.gov.br/'
          }
        ]
      },
      {
        id: '2',
        titulo: 'Governo estadual',
        last: false,
        links: [  
          {
            nome: 'Governo do Estado do Acre',
            url: 'https://acre.gov.br/'
          },
          {
            nome: 'Governo do Estado de Alagoas',
            url: 'https://alagoas.al.gov.br/'
          },
          {
            nome: 'Governo do Estado do Amapá',
            url: 'https://www.portal.ap.gov.br/'
          },
          {
            nome: 'Governo do Estado do Amazonas',
            url: 'http://www.amazonas.am.gov.br/'
          },
          {
            nome: 'Governo do Estado da Bahia',
            url: 'http://www.bahia.ba.gov.br/'
          },
          {
            nome: 'Governo do Estado do Ceará',
            url: 'https://www.ceara.gov.br/'
          },
          {
            nome: 'Governo do Estado do Espirito Santo',
            url: 'https://www.es.gov.br/'
          },
          {
            nome: 'Governo do Estado de Goiás',
            url: 'https://www.goias.gov.br/'
          },
          {
            nome: 'Governo do Estado do Mato Grosso',
            url: 'http://www.mt.gov.br/'
          },
          {
            nome: 'Governo do Estado do Mato Grosso do Sul',
            url: 'http://www.ms.gov.br/'
          },
          {
            nome: 'Governo do Estado de Minas Gerais',
            url: 'https://www.mg.gov.br/'
          },
          {
            nome: 'Governo do Estado do Maranhão',
            url: 'https://www.ma.gov.br/'
          },
          {
            nome: 'Governo do Estado do Pará',
            url: 'https://www.pa.gov.br/'
          },
          {
            nome: 'Governo do Estado da Paraíba',
            url: 'https://paraiba.pb.gov.br/'
          },
          {
            nome: 'Governo do Estado do Paraná',
            url: 'https://www.parana.pr.gov.br/'
          },
          {
            nome: 'Governo do Estado de Pernambuco',
            url: 'https://www.sad.pe.gov.br/'
          },
          {
            nome: 'Governo do Estado do Piauí',
            url: 'https://www.pi.gov.br/'
          },
          {
            nome: 'Governo do Estado do Rio de Janeiro',
            url: 'http://www.rj.gov.br/'
          },
          {
            nome: 'Governo do Estado do Rio Grande do Norte',
            url: 'http://www.rn.gov.br/'
          },
          {
            nome: 'Governo do Estado do Rio Grande do Sul',
            url: 'https://www.estado.rs.gov.br/inicial'
          },
          {
            nome: 'Governo do Estado de Roraima',
            url: 'https://portal.rr.gov.br/'
          },
          {
            nome: 'Governo do Estado de Santa Catarina',
            url: 'https://www.sc.gov.br/'
          },
          {
            nome: 'Governo do Estado do Estado de São Paulo',
            url: 'https://www.saopaulo.sp.gov.br/'
          },
          {
            nome: 'Governo do Estado de Sergipe',
            url: 'https://www.se.gov.br/'
          },
          {
            nome: 'Governo do Estado de Tocantins',
            url: 'https://www.to.gov.br/'
          },
        ]
      },
      {
        id: '3',
        titulo: 'Tribunais de justiça',
        last: false,
        links: [
          {
            nome: 'Supremo Tribunal Federal (STF)',
            url: 'https://portal.stf.jus.br/'
          },
          {
            nome: 'Superior Tribunal de Justiça (STJ)',
            url: 'https://www.stj.jus.br/sites/portalp/Inicio'
          },
          {
            nome: 'Conselho da Justiça Federal (CJF)',
            url: 'https://www.cjf.jus.br/cjf/'
          },
          {
            nome: 'Superior Tribunal Militar (STM)',
            url: 'https://www.stm.jus.br/'
          },
          {
            nome: 'Tribunal Superior do Trabalho (TST)',
            url: 'https://www.tst.jus.br/'
          },
          {
            nome: 'Conselho Superior da Justiça do Trabalho (CSJT)',
            url: 'https://www.csjt.jus.br/'
          },
          {
            nome: 'Tribunal Superior Eleitoral (TSE)',
            url: 'https://www.tse.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça do Acre (TJAC)',
            url: 'https://www.tjac.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça de Alagoas (TJAL)',
            url: 'https://www.tjal.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça do Amapá (TJAP)',
            url: 'https://www.tjap.jus.br/portal/'
          },
          {
            nome: 'Tribunal de Justiça do Amazonas (TJAM)',
            url: 'https://www.tjam.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça da Bahia (TJBA)',
            url: 'http://www5.tjba.jus.br/portal/'
          },
          {
            nome: 'Tribunal de Justiça do Ceará (TJCE)',
            url: 'https://www.tjce.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça do Distrito Federal e Territórios (TJDFT)',
            url: 'https://www.tjdft.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça do Espírito Santo (TJES)',
            url: 'http://www.tjes.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça de Goiás (TJGO)',
            url: 'https://www.tjgo.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça do Maranhão (TJMA)',
            url: 'https://www.tjma.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça de Mato Grosso (TJMT)',
            url: 'http://www.tjmt.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça de Mato Grosso do Sul (TJMS)',
            url: 'https://www.tjms.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça de Minas Gerais (TJMG)',
            url: 'https://www.tjmg.jus.br/portal-tjmg/'
          },
          {
            nome: 'Tribunal de Justiça do Pará (TJPA)',
            url: 'https://www.tjpa.jus.br/PortalExterno/'
          },
          {
            nome: 'Tribunal de Justiça da Paraíba (TJPB)',
            url: 'https://www.tjpb.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça do Paraná (TJPR)',
            url: 'https://www.tjpr.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça de Pernambuco (TJPE)',
            url: 'https://www.tjpe.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça do Piauí (TJPI)',
            url: 'https://www.tjpi.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça do Rio de Janeiro (TJRJ)',
            url: 'http://www.tjrj.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça do Rio Grande do Norte (TJRN)',
            url: 'https://www.tjrn.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça do Rio Grande do Sul (TJRS)',
            url: 'https://www.tjrs.jus.br/novo/'
          },
          {
            nome: 'Tribunal de Justiça de Rondônia (TJRO)',
            url: 'https://www.tjro.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça de Roraima (TJRR)',
            url: 'https://www.tjrr.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça de Santa Catarina (TJSC)',
            url: 'https://www.tjsc.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça de São Paulo (TJSP)',
            url: 'https://www.tjsp.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça de Sergipe (TJSE)',
            url: 'https://www.tjsp.jus.br/'
          },
          {
            nome: 'Tribunal de Justiça do Tocantins (TJTO)',
            url: 'https://www.tjto.jus.br/'
          },
        ]
      },
      {
        id: '4',
        titulo: 'Ministérios públicos',
        last: true,
        links: [
          {
            nome: 'Ministério Público da União (MPU)',
            url: '#404'
          },
          {
            nome: 'Ministério Público Federal (MPF)',
            url: '#404'
          },
          {
            nome: 'Ministério Público Militar (MPM)',
            url: '#404'
          },
          {
            nome: 'Ministério Público do Trabalho (MPT)',
            url: '#404'
          },
          {
            nome: 'Ministério Público do Estado do Acre (MPAC)',
            url: 'http://www.mpac.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado de Alagoas (MPAL)',
            url: 'http://www.mpal.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Amapá (MPAP)',
            url: 'http://www.mpap.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Amazonas (MPAM)',
            url: 'http://www.mpam.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado da Bahia (MPBA)',
            url: 'http://www.mpba.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Ceará (MPCE)',
            url: 'http://www.mpce.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Espirito Santo (MPES)',
            url: 'http://www.mpes.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado de Goiás (MPGO)',
            url: 'http://www.mpgo.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Mato Grosso (MPMT)',
            url: 'http://www.mpmt.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Mato Grosso do Sul (MPMS)',
            url: 'http://www.mpms.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado de Minas Gerais (MPMG)',
            url: 'http://www.mpmg.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Maranhão (MPMA)',
            url: 'https://www.mpma.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Pará (MPPA)',
            url: 'http://www.mppa.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado da Paraíba (MPPB)',
            url: 'http://www.mppb.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Paraná (MPPR)',
            url: 'http://www.mppr.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado de Pernambuco (MPPE)',
            url: 'http://www.mppe.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Piauí (MPPI)',
            url: 'http://www.mppi.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Rio de Janeiro (MPRJ)',
            url: 'http://www.mprj.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Rio Grande do Norte (MPRN)',
            url: 'http://www.mprn.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado do Rio Grande do Sul (MPRS)',
            url: 'http://www.mprs.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado de Roraima (MPRR)',
            url: 'http://www.mprr.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado de Santa Catarina (MPSC)',
            url: 'http://www.mpsc.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado de São Paulo (MPSP)',
            url: 'http://www.mpsp.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado de Sergipe (MPSE)',
            url: 'http://www.mpse.mp.br/'
          },
          {
            nome: 'Ministério Público do Estado de Tocantins (MPTO)',
            url: 'http://www.mpto.mp.br/'
          }
        ]
      }
    ]
  }

  
  
}
