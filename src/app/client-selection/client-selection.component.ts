import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-client-selection',
  templateUrl: './client-selection.component.html',
  styleUrl: './client-selection.component.scss',
})
export class ClientSelectionComponent {
  clientSelected = 'client1';
  dropDownData = [
    {
      label: 'client1',
      value: 'client1',
    },
    {
      label: 'client2',
      value: 'client2',
    },
    {
      label: 'client3',
      value: 'client3',
    },
  ];
  constructor(private themeService: ThemeService) {}

  getTheme(client: string): string {
    switch (client) {
      case 'client1':
        return 'client1';
      case 'client2':
        return 'client2';
      case 'client3':
        return 'client3';
      default:
        return 'client1';
    }
  }

  onOptionsSelected(client: any) {
    this.clientSelected = client;
    this.themeService.toggleTheme(client);
  }
}
