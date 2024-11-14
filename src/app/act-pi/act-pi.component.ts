import { Component, OnDestroy, Output } from '@angular/core';
import { Question, QuestionHandlerService } from '../question-handler.service';
import { CommunicationService } from '../communication.service';
import { ActivityHandlerService } from '../activity-handler.service';

@Component({
  selector: 'app-act-pi',
  templateUrl: './act-pi.component.html',
  styleUrls: ['./act-pi.component.css']
})
export class ActPIComponent implements OnDestroy{
  public isActive : boolean = false;
  public readonly _questionHandlerService : QuestionHandlerService;
  public showQuestion : boolean = false;
  public isComplete : boolean = false;
  public counter : number = 0;
  
  public objects: extendedQuestion[] = [
    {
      question: new Question(
        "¿Cuál es el nombre del artículo que está en sexta posición?",
        [
          "La lectura y escritura desde la discapacidad intelectual leve. 2023-01-16",
          "Las TIC en la enseñanza de la lengua castellana a niños con discapacidad auditiva. null.",
          "Procesos de enseñanza-aprendizaje en la universidad: perspectiva de los estudiantes. 2016-12-01"
        ],
        2
      ),
      name: "APRENDIZAJE",
      touched : false
    },
    {
      question: new Question(
        "¿Qué género literario utilizan para aumentar la creatividad según el título del artículo N 2?",
        ["Narrativo","Poético", "Dramático"],
        1
      ),
      name: "CREATIVIDAD",
      touched : false

    },
    {
      question: new Question(
        "¿Qué nombre aparece en el título del artículo N 2 que habla sobre los aportes a la educación bilingüe?",
        ["Stephen Krashen", "Paulo Freire"],
        0
      ),
      name: "EDUCACIÓN",
      touched : false

    },
    {
      question: new Question(
        "¿Quién es el autor del artículo que está ubicado en la séptima posición?",
        ["Orlando Parra", "Laura Milena Arias", "Gerardo Cardozo Rincón"],
        2
      ),
      name: "LECTURA",
      touched : false

    },
    {
      question: new Question(
        "¿Cuál es el fin del artículo N 5 que se trabaja en la licenciatura de educación infantil?",
        [
          "La búsqueda de nuevas lógicas",
          "El ser humano investigador",
          "Vive la investigación"
        ],
        0
      ),
      name: "INVESTIGACIÓN",
      touched : false

    },
    {
      question: new Question(
        "¿Cuál es la pregunta que hacen en nombre del artículo N 32?",
        ["¿Aprender a leer y a escribir?", "¿Qué es escribir?", "¿Qué podemos aprender?"],
        0
      ),
      name: "ESCRITURA",
      touched : false
    }
  ];
  private texts: string[] = [
    "¡Felicitaciones!",
    "Has terminado el taller #3 y has aprendido sobre los temas tratados en la revista 'Rastros y Rostros'.",
    "Recuerda que los investigadores, como yo, necesitamos conocer a fondo las temáticas de nuestros casos.",
    "Ahora, sin más, vamos a la última parada. ¡Ánimos!"
  ];
  

  constructor(questionHandler : QuestionHandlerService, public communicationService : CommunicationService, private activityService : ActivityHandlerService){
    this._questionHandlerService = questionHandler;
    this.fillQuestionList();
    this._questionHandlerService.setDelayTime(1200);
    this._questionHandlerService.setScoreMultiplier(100);
  }
  
  public fillQuestionList() {
    this.objects.forEach(x =>{
      this._questionHandlerService.addQuestion(x.question);
    })
  }

  public touchButton(index : number){
    this.objects[index].touched = true;
    this.counter+=1;
    if(this.counter>=6){
      this.isComplete = true;
      this.trigger();
    }
  }

  public isTouched(index : number){
    return this.objects[index].touched;
  }
  public Activation(){
    this.isActive = true;
  }

  public changesShowQuestion(shows : boolean){
    this.showQuestion = shows;
  }

  public getQuestionsName(){
    let tempList: string[] = [];
    this.objects.forEach(x =>{
      tempList.push(x.name);
    })
    return tempList;
  }

  public trigger(){
    this.communicationService.startPropertiesAndShows(this.texts, 'TALLER #3 COMPLETADO!!');
    this.activityService.changeAScore(2, this._questionHandlerService.getScore());
    this.activityService.changeAblock(3, false);
  }


  onSubmit(event: Event): void {
    event.preventDefault(); // Evitar que el formulario se envíe si es necesario
    this._questionHandlerService.executeChanges(false);
    setTimeout(() => {
      this.isActive = false;
      this.showQuestion = false;
    }, 1200);
  }


  ngOnDestroy(): void {
      console.log("me destruií PI");
      this._questionHandlerService.ngOnDestroy();
      this.isActive = false;
      this.showQuestion = false;
      this.objects.forEach(x =>{
        x.touched = false;
      })
  }


}

export interface extendedQuestion{
  question : Question,
  name : string,
  touched : boolean
}
