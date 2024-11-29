import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  host: {
    '[attr.id]': '"contact"',
    'class': 'd-block p-4 m-4',
    '[style.height]': '"75vh"',
  }
})
export class ContactComponent {

  items = [
    {
      id: 1,
      icon: "bi bi-whatsapp",
      mensaje: "Enviame un mensaje dando click",
      link: "https://wa.me/+525554149576?text=Hola,%20me%20interesa%20tu%20portafolio.%20Quisiera%20saber%20más."
    },
    {
      id: 2,
      icon: "bi bi-envelope",
      mensaje: "Enviame un correo dando click",
      link: "mailto:ericksantillan95.01@gmail.com"
    },
  ]

}
