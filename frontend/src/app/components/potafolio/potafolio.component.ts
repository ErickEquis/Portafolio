import { Component } from '@angular/core';

@Component({
  selector: 'app-potafolio',
  standalone: true,
  imports: [],
  templateUrl: './potafolio.component.html',
  styleUrl: './potafolio.component.css',
  host: {
    '[attr.id]': '"portafolio"',
    'class': 'd-block p-4 m-4',
    '[style.height]': '"75vh"',
  }
})
export class PotafolioComponent {

  items = [
    {
      id: 1,
      titulo: "Inventario CFE-TEIT",
      descripcion: "Plataforma diseñada para automatizar el control de inventarios de la compañía, permitiendo un seguimiento rápido y eficiente de las cantidades de producto y la generación de informes detallados.",
      imagen: "./image1.jpg",
      url: "https://inventario.cfeteit.gob.mx/",
      estatus: "active"
    },
    {
      id: 2,
      titulo: "Herramienta de Gestión de Política TIC 2.0",
      descripcion: "Plataforma desarrollada para la detección de riesgos, el monitoreo del cumplimiento y la realización de auditorías federales, conforme a las normativas emitidas por las autoridades gubernamentales.",
      imagen: "./image2.jpg",
      url: "https://hgptic.presidencia.gob.mx/hgptic/",
      estatus: ""
    },
    {
      id: 3,
      titulo: "Sistema de Acreditación de Prensa de Presidencia",
      descripcion: "Plataforma diseñada para la gestión y control de asistentes en eventos organizados por el gobierno federal.",
      imagen: "./image3.jpg",
      url: "https://acreditaciones.comsoc.gob.mx/",
      estatus: ""
    },
    {
      id: 4,
      titulo: "Minutas en linea para CIDGE",
      descripcion: "Plataforma diseñada para la elaboración de minutas por parte del CIDGE.",
      imagen: "./image4.jpg",
      url: "https://servicios.gob.mx/cidge",
      estatus: ""
    },
    {
      id: 5,
      titulo: "Point",
      descripcion: "Plataforma diseñada para la gestión de inventarios, usuarios y ventas.",
      imagen: "./image5.jpg",
      url: "https://erickdev.duckdns.org/auth/log-in",
      estatus: ""
    },
  ]

}
