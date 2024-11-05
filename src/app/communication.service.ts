import { Injectable } from '@angular/core';
import { ExtendedQuestion } from './act-pi/act-pi.component';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public question : ExtendedQuestion | null= null;
  public score : number = 0;
  constructor() { }

  public SetMostScore(){
    this.score +=100;
  }
}
