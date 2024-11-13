import { Component, Inject, OnDestroy } from '@angular/core';
import { QuestionHandlerService } from '../question-handler.service';

@Component({
  selector: 'app-act-rnr',
  templateUrl: './act-rnr.component.html',
  styleUrls: ['./act-rnr.component.css']
})
export class ActRnrComponent{

  public i : number[]= [1,1,1,1];
  public index : number = 3;
  
}
