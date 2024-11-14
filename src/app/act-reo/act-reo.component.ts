import { Component, OnDestroy, OnInit } from '@angular/core';
import { Question, QuestionHandlerService } from '../question-handler.service';
import { CommunicationService } from '../communication.service';
import { ActivityHandlerService } from '../activity-handler.service';

@Component({
  selector: 'app-act-reo',
  templateUrl: './act-reo.component.html',
  styleUrls: ['./act-reo.component.css']
})
export class ActReoComponent implements OnInit, OnDestroy {

  public  _questionHandlerService : QuestionHandlerService;
  public isInit : boolean = false;

  constructor(questionHandler : QuestionHandlerService, private communicationService : CommunicationService, private activityHandler : ActivityHandlerService){
    this._questionHandlerService = questionHandler;
  }

  private FillList(){
    this._questionHandlerService.addQuestion(
      new Question("¿La revista Rastros Rostros es una revista?",
        ["Científica", "Moda", "Entretenimiento"],
        0
      ));
    
    this._questionHandlerService.addQuestion(
      new Question("¿En qué año surgió la revista Rastros Rostros?",
        ["1552", "1989", "1995"],
        2
      )
    );

    this._questionHandlerService.addQuestion(
      new Question("¿En cuántos idiomas publica artículos originales e inéditos la revista Rastros Rostros?",
        ["4", "3", "5"],
        0
      )
    );

    this._questionHandlerService.addQuestion(
      new Question("¿Qué costo tiene para los autores el envío y proceso de edición de artículos en la revista Rastros y Rostros?",
        ["Un costo de $5.000", "Ningún costo", "Financiado en su totalidad por Ediciones Ucc"],
        2
      )
    );

    this._questionHandlerService.addQuestion(
      new Question("¿Con qué frecuencia se publica la revista Rastros y Rostros?",
        ["Trimestral", "Anual", "Semestral"],
        2
      )
    );

    this._questionHandlerService.addQuestion(
      new Question("¿La revista Rastros Rostros fue creada por?",
        ["Estudiantes", "Docentes", "Decanos"],
        0
      )
    );

    this._questionHandlerService.addQuestion(
      new Question("¿La revista publica sus contenidos en acceso?",
        ["Cerrado", "Abierto", "Restringido para algunos"],
        1
      )
    );

    this._questionHandlerService.addQuestion(
      new Question("¿Qué busca propiciar la revista y su equipo editorial a través de sus políticas y actuaciones?",
        [
          "La rapidez en la publicación de los artículos sin revisión",
          "La ética en los procesos de investigación y el uso adecuado de contenidos protegidos por derechos de autor.",
          "La competencia entre los colaboradores para aumentar la cantidad de trabajos publicados."
        ],
        1
      )
    );

    this._questionHandlerService.addQuestion(
      new Question("¿En qué año la revista Rastros y Rostros adquirió un formato digital?",
        ["1995", "2016", "2006"],
        2
      )
    );

    this._questionHandlerService.addQuestion(
      new Question("¿Cuál es el principal tema de aporte de la revista Rastros y Rostros?",
        ["Educación del Lenguaje", "Tecnologías de la Información", "Ciencias Naturales"],
        0
      )
    );

  }

  
  private texts: string[] = [
    "¡Felicidades!",
    "El rigor investigativo es muy importante, y con este taller terminado has aprendido sobre los orígenes de la revista 'Rastros y Rostros'.",
    "Así como también algunas curiosidades sobre ella.",
    "Pero no cantes victoria aún; el siguiente paradero nos espera."
  ];
  

  ngOnInit(): void {

    this.FillList();
    this._questionHandlerService.setDelayTime(1000)
    this._questionHandlerService.setScoreMultiplier(100);
  }

  ngOnDestroy(): void {
      console.log("a")
      this._questionHandlerService.ngOnDestroy();
  }

  public changeIsInit(){
    this.isInit = true;
  }
  public provee(index : number){
    if(index == this._questionHandlerService.getLenghtQuestions()-1){
      this.usingWhenEnds();
    }
  }

  private usingWhenEnds(){
    this.activityHandler.changeAScore(0, this._questionHandlerService.getScore());
    this.activityHandler.changeAblock(1, false)
    this.communicationService.startPropertiesAndShows(this.texts, 'TALLER #1 TERMINADO!!');
  }
}
