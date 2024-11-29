import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: {
    '[attr.id]': '"home"',
    'class': 'd-block p-4 m-4',
    '[style.height]': '"75vh"',
  }
})
export class HomeComponent {

}
