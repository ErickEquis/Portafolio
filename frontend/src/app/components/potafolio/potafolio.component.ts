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

}
