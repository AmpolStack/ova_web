import { Component } from '@angular/core';

@Component({
  selector: 'app-act-pi',
  templateUrl: './act-pi.component.html',
  styleUrls: ['./act-pi.component.css']
})
export class ActPIComponent {
  public isActive : boolean = false;
  public Activation(){
    this.isActive = true;
  }
}
