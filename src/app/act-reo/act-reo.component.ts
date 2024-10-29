import { Component } from '@angular/core';
import { Question, QuestionsHandlerService, IQuestionHandler } from '../questions-handler.service';

@Component({
  selector: 'app-act-reo',
  templateUrl: './act-reo.component.html',
  styleUrls: ['./act-reo.component.css']
})
export class ActReoComponent {

  private readonly _questionHandler : IQuestionHandler;
  constructor(questionHandlerService : QuestionsHandlerService){
    this._questionHandler = questionHandlerService;
  }
  public isInit : boolean = false;
  public score : number = 0;
  public inStatusChange : boolean = false;
  public currentQuestion : number = 0;
  public currentResponseIndex : number | null= null;
  public Questions : Question[] = [
    {
      question: "¿La revista Rastros Rostros es una revista?",
      responses: ["Científica", "Moda", "Entretenimiento"],
      answer: 0
    },
    {
      question: "¿En qué año surgió la revista Rastros Rostros?",
      responses: ["1552", "1989", "1995"],
      answer: 2
    },
    {
      question: "¿En cuántos idiomas publica artículos originales e inéditos la revista Rastros Rostros?",
      responses: ["4", "3", "5"],
      answer: 0
    },
    {
      question: "¿Qué costo tiene para los autores el envío y proceso de edición de artículos en la revista Rastros y Rostros?",
      responses: ["Un costo de $5.000", "Ningún costo", "Financiado en su totalidad por Ediciones Ucc"],
      answer: 2
    },
    {
      question: "¿Con qué frecuencia se publica la revista Rastros y Rostros?",
      responses: ["Trimestral", "Anual", "Semestral"],
      answer: 2
    },
    {
      question: "¿La revista Rastros Rostros fue creada por?",
      responses: ["Estudiantes", "Docentes", "Decanos"],
      answer: 0
    },
    {
      question: "¿La revista publica sus contenidos en acceso?",
      responses: ["Cerrado", "Abierto", "Restringido para algunos"],
      answer: 1
    },
    {
      question: "¿Qué busca propiciar la revista y su equipo editorial a través de sus políticas y actuaciones?",
      responses: [
        "La rapidez en la publicación de los artículos sin revisión",
        "La ética en los procesos de investigación y el uso adecuado de contenidos protegidos por derechos de autor.",
        "La competencia entre los colaboradores para aumentar la cantidad de trabajos publicados."
      ],
      answer: 1
    },
    {
      question: "¿En qué año la revista Rastros y Rostros adquirió un formato digital?",
      responses: ["1995", "2016", "2006"],
      answer: 2
    },
    {
      question: "¿Cuál es el principal tema de aporte de la revista Rastros y Rostros?",
      responses: ["Educación del Lenguaje", "Tecnologías de la Información", "Ciencias Naturales"],
      answer: 0
    }
  ]


  public changeCurrentResponseIndex(index : number) {
    this.currentResponseIndex = index;
  }

  public changeIsInit(){
    this.isInit = true;
  }
  
  //Function for 
  public nextQuestion(): void {
    const isCorrect = this._questionHandler.defineOption(this.Questions[this.currentQuestion], this.currentResponseIndex!);
    this.inStatusChange = true;

    if (this.currentQuestion <= this.Questions.length - 1) {
        if (isCorrect) {
            this.score += 100;
        }

        setTimeout(() => {
            this.currentResponseIndex = null;
            this.inStatusChange = false;

            if (this.currentQuestion < this.Questions.length - 1) {
                this.currentQuestion++;
            }
        }, 1500);
    }
  }

}
