import { Component, Output } from '@angular/core';
import { Question } from '../questions-handler.service';

@Component({
  selector: 'app-act-pi',
  templateUrl: './act-pi.component.html',
  styleUrls: ['./act-pi.component.css']
})
export class ActPIComponent {
  public isActive : boolean = false;
  public score : number = 200;
  public QuestionIndex : number|null = null; 
  public Questions : ExtendedQuestion[] = [
    {question:'¿Cuàl es el nombre del Artìculo que està en sexta posiciòn?', responses:['La lectura y escritura desde la discapacidad intelectual leve. 2023-01-16','Las tic en la enseñanza de la lengua castellana a niños con discapacidad auditiva. null.', 'Procesos de enseñanza-aprendizaje en la universidad: perspectiva de los estudiantes. 2016-12-01'], answer:0, name:'APRENDIZAJE'},
    {question:'¿Què gènero literario utilizan para aumentar la creatividad segùn el titulo del artìculo N 2?', responses:['Poetico', 'Narrativo', 'Dramatico'], answer:0, name:'CREATIVIDAD'},
    {question:':¿Què nombre aparece en el tìtulo del artìculo N 2 que habla sobre los aportes a la educaciòn bilingue?', responses:['Stephen Krashen', 'Paulo Freire'], answer:0, name:'EDUCACIÓN'},
    {question:'¿Quièn es el autor del artìculo que està ubicado en la septima posiciòn?', responses:['Orlando Parra','Laura Milena Arias','Gerardo Cardozo Rincòn'], answer:0,name:'LECTURA'},
    {question:'¿ Cuàl es el fin del artìculo N 5 que se trabaja en la licenciatura de educaciòn infantil?', responses:['La busqueda de nuevas lògicas', 'El ser humano investigador','Vive la investigaciòn'], answer:0,name:'INVESTIGACIÓN'},
    {question:'¿Cuàl es la pregunta que hacen en nombre del artìculo N 32?', responses:['¿Aprender a leer y a escribir?','¿Què es escribir?', '¿Què podemos aprender?'], answer:0, name:'ESCRITURA'}
  ]

  public Activation(){
    this.isActive = true;
  }

  public ChangesQuestionIndex(num : number){
    this.QuestionIndex=num;
  }
  public addScore(isCorrect : boolean){
    if(isCorrect){
      this.score= this.score+100;
    }
  }
}

export interface ExtendedQuestion extends Question {
  name:string;
}
