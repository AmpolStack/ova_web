import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/app/questions-handler.service';
import { ExtendedQuestion } from '../act-pi.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question : ExtendedQuestion |null = null;
  @Output() notifyScore : EventEmitter<boolean> = new EventEmitter<boolean>()
  public indexResponse : number|null = null;

  public isCorrect(index : number){
    return index == this.question?.answer;
  }

  public execute(index : number){
    this.notifyScore.emit(this.isCorrect(index));
  }

  public ChangeIndexResponse(index : number){
    this.indexResponse = index;
  }
}
