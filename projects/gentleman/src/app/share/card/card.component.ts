import { Component, Input } from '@angular/core';
import { GentlemanList } from '../../model/list';

@Component({
  selector: 'isdi-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() gentleman;
  constructor() {
    this.gentleman = {} as GentlemanList;
  }
}
