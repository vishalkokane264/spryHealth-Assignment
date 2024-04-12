import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = 'theme1';
  themeobj = ['client1', 'client2', 'client3'];

  toggleTheme(theme: string) {
    document.body.setAttribute('data-theme', theme);
  }
}
