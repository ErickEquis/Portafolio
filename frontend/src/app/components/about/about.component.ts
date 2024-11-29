import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  host: {
    '[attr.id]': '"about"',
    'class': 'd-block p-4 m-4',
    '[style.height]': '"75vh"',
  }
})
export class AboutComponent {

}
