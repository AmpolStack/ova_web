import { Injectable, OnDestroy, Query } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionHandlerService implements OnDestroy{

  private questionList : Question[] = [];
  private questionLength : number = 0;
  private questionIndex : number = 0;
  private currentResponseIndex : number | null = null;
  private score = 0;
  private scoreMultiplier = 0;
  private inStatusChanges = false;
  private delayTime = 0;
  //RETURNS A CURRENT QUESTION
  public getCurrentQuestion(){
    return this.questionList[this.questionIndex];
  }

  public getStatus(){
    return this.inStatusChanges;
  }

  public changesCurentQuestion(index : number){
    this.questionIndex=index;
  }
  ngOnDestroy(): void {
      this.questionList = [];
      this.questionLength = 0;
      this.questionIndex = 0;
      this.currentResponseIndex = null;
      this.score = 0;
      this.scoreMultiplier=0;
  }

  public executeChanges(gotoNext : boolean = true) : void{
    this.defineAnswerValidity();
    this.inStatusChanges = true;
    
    setTimeout(()=>{
      this.changeCurrentResponseIndex(null);
      this.inStatusChanges = false;
      if(gotoNext){
        this.goToNextQuestion();
      }
    }, this.delayTime)
  }
  
  public setScoreMultiplier(multiplier : number){
    this.scoreMultiplier = multiplier;
  }
  
  public setDelayTime(time : number){
    this.delayTime = time;
  }
  public getScore(){
    return this.score;
  }
  public changeCurrentResponseIndex(index : number | null){
    this.currentResponseIndex = index;
  }

  public getCurrentQuestionIndex(){
    return this.questionIndex;

  }

  public getLenghtQuestions(){
    return this.questionLength;
  }
  public getCurrentResponseIndex(){
    return this.currentResponseIndex;
  }
  //ADD A QUESTION OBJETC IN A PRIVATE LIST, LIKE A SETTER
  public addQuestion(object : Question): void | null{
    if(object==null){
      return;
    }
    this.questionList.push(object);
    this.questionLength+=1;
  }

  //Changes for the next question
  public goToNextQuestion(): void | null{
    if(this.questionIndex >= this.questionLength-1){
      return null;
    }
    this.questionIndex = this.questionIndex + 1;
  }

  //Define if the selected asnwer is the correct answer
  public defineAnswerValidity(): boolean{
    console.log(this.currentResponseIndex );
    console.log(this.questionList[this.questionIndex].getAnswerIndex());
    if(this.currentResponseIndex == this.questionList[this.questionIndex].getAnswerIndex()){
      console.log("eso pasó por aquí, si no se reflejó no es problema mio")
      this.score = this.score + (1 * this.scoreMultiplier);
      return true;
    }
    return false;
  }

  public isFinaliced(): boolean{
    return (this.score==this.questionLength);
  }

}


export class Question{
  private question : string = '';
  private responses : string[] = [];
  private answer : number = 0;

  constructor(question: string, responses : string[], answer : number){
    this.question = question;
    this.responses = responses;
    this.answer = answer;
  }

  //SETTERS
  public setQuestion(value : string){
    this.question = value;
  }

  public setResponses(values : string[], aswerIndex : number){
    if(values.length=0){
      return;
    }
    if(aswerIndex==0 || values.length < aswerIndex){
      return;
    }
    this.responses = values;
    this.answer = aswerIndex;
  }

  //GETTERS
  public getQuestion(){
    return this.question;
  }

  public getResponses(){
    return this.responses;
  }

  public getAnswerIndex(){
    return this.answer;
  }

}