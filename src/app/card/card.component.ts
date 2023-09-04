import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() cardNumber:string |undefined|null;
@Input() name:string|undefined |null;
@Input() expiration:string|undefined|  null;
}
