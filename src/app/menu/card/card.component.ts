import { Component, Input } from '@angular/core';
import { Activity } from '../menu.component';
import { CommunicationService } from 'src/app/communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() Activity? : Activity;
  @Input() number : number = 0;
  constructor(public communicationService : CommunicationService,
    private router : Router
  ){};

  public usingTransition(){
    this.communicationService.startTransition();
    setTimeout(() => {
      this.communicationService.stopTransition();
      this.router.navigate(['home/'+this.Activity?.UrlLink]);
    }, 2000);
  }
}
