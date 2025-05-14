import { Component, Input } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chiro-interlude',
  templateUrl: './chiro-interlude.component.html',
  styleUrls: ['./chiro-interlude.component.css']
})
export class ChiroInterludeComponent {
  constructor(public communicationService : CommunicationService, private _routerService : Router){

  }
  public currentTextIndex : number = 0;

  public nextTextTarget(){
    if(this.communicationService.getTextList().length==0){
      return;
    }
    if(this.currentTextIndex < this.communicationService.getTextList().length-1){
      this.currentTextIndex+=1;
    }
    else{
      this.communicationService.stopShowsFixed();
      this.currentTextIndex = 0;
      if(this.communicationService.getTitle()!=null){
        this._routerService.navigate(['home'])
      }
      // this.textTargets=[];
    }
  }
}
