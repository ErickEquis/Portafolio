import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { PotafolioComponent } from './components/potafolio/potafolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    PotafolioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '<Erick/>';

  changeTheme() {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
      document.documentElement.style.setProperty("--bs-body-bg", "#f8f9fa");
      document.documentElement.setAttribute('data-bs-theme', 'light')
    }
    else {
      document.documentElement.style.setProperty("--bs-body-bg", "#212529");
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    }
  }

}
