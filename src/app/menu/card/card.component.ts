import { Component, Input } from '@angular/core';
import { Activity } from '../menu.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() Activity? : Activity;
  @Input() number? : number;
  public tomo : boolean = false;
  public changeTomo(){
    this.tomo = true;
  }
}
