import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsHandlerService implements IQuestionHandler{
  defineOption(question: Question, responseIndex: number): boolean {
    return question.answer == responseIndex;
  }
  
}
export interface Question{
  question : string;
  responses : string[];
  answer : number,
}
export interface IQuestionHandler{
  defineOption(question : Question, responseIndex : number) : boolean;
}
