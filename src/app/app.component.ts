import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'spryHealth-Assignment';
  themeobj = ['client1', 'client2', 'client3'];

  toggleTheme() {
    document.body.setAttribute(
      'data-theme',
      this.themeobj[Math.floor(Math.random() * this.themeobj.length)]
    );
  }
}
