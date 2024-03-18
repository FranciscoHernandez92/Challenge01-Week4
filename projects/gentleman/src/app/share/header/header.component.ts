import { Component } from '@angular/core';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'The pointing gentlemen';
  info = '0 gentlemen pointing at you';
}
