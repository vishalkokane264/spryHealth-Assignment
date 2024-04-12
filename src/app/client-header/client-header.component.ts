import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrl: './client-header.component.scss',
})
export class ClientHeaderComponent {
  @Input() client: string;

  ngOnInit() {}
}
