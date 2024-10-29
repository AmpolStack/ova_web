import { Component } from '@angular/core';
import { IQuestionHandler, Question, QuestionsHandlerService } from '../questions-handler.service';

@Component({
  selector: 'app-act-rdm',
  templateUrl: './act-rdm.component.html',
  styleUrls: ['./act-rdm.component.css']
})
export class ActRdmComponent {
  public isExecuted : boolean = false;
  public currentQuestionIndex : number = 0;
  public currentResponseIndex : number | null = null;
  public score : number=0;
  public isInStatusChange : boolean = false;
  public Questions : Question[] = [
    {
      question: "¿Cuál es el tipo de artículo del siguiente texto?\nPérez Carrero, C., Rodríguez Moreno, S. M., & Sánchez Mayorga, L. D. P. (2015). El cerebro tríadico y su relación con la curiosidad, el trabajo en equipo y la explicación de fenómenos para el desarrollo de actitud científica. Rastros Rostros, 17(31). https://doi.org/10.16925/ra.v17i31.1106",
      responses: [
        "Artículo Científico: Introducción, metodología, resultados, discusión y conclusiones.",
        "Artículo de reflexión: Más flexible, no sigue necesariamente la estructura formal de un artículo científico.",
        "Editorial: Generalmente breve, con un análisis conciso del tema y una postura clara.",
        "Ensayo: Libre, sin una estructura formal estricta. Introducción, desarrollo y conclusión son comunes, pero no obligatorios."
      ],
      answer: 0
    },
    {
      question: "¿Cuál es el tipo de artículo del siguiente texto?\nTéllez Fajardo, A. (2012). Editorial: Coordenadas hacia la educación de alta calidad. Rastros Rostros, 14(27). https://revistas.ucc.edu.co/index.php/ra/article/view/438",
      responses: [
        "Reseña: Breve descripción de la obra seguida de una crítica o valoración.",
        "Artículo de sistematización: Combina elementos teóricos con la práctica, detallando metodologías y lecciones aprendidas.",
        "Editorial: Generalmente breve, con un análisis conciso del tema y una postura clara.",
        "Artículo Científico: Introducción, metodología, resultados, discusión y conclusiones."
      ],
      answer: 2
    },
    {
      question: "¿Cuál es el tipo de artículo del siguiente texto?\nMosquera Mosquera, C. E., & Bustamante Zamudio, G. (2023). Condiciones de posibilidad en la formación del sujeto: una reflexión teórica más allá de lo educativo. Rastros Rostros, 26(1), 1-39. https://doi.org/10.16925/2382-4921.2024.01.13",
      responses: [
        "Artículo de sistematización: Combina elementos teóricos con la práctica, detallando metodologías y lecciones aprendidas.",
        "Artículo de reflexión: Más flexible, no sigue necesariamente la estructura formal de un artículo científico.",
        "Editorial: Generalmente breve, con un análisis conciso del tema y una postura clara.",
        "Reseña: Breve descripción de la obra seguida de una crítica o valoración."
      ],
      answer: 1
    },
    {
      question: "¿Cuál es el tipo de artículo del siguiente texto?\nOlaya, M. C., Gualdrón, E., Gómez, L. F., & Fernández Umaña, D. I. (2013). Enseñanza y aprendizaje de idiomas con metodología Blended Learning: evaluación de una experiencia piloto en la Universidad Cooperativa de Colombia. Rastros Rostros, 15(29). https://doi.org/10.16925/ra.v15i29.696",
      responses: [
        "Artículo de reflexión: Más flexible, no sigue necesariamente la estructura formal de un artículo científico.",
        "Artículo Científico: Introducción, metodología, resultados, discusión y conclusiones.",
        "Reseña: Breve descripción de la obra seguida de una crítica o valoración.",
        "Artículo de sistematización: Combina elementos teóricos con la práctica, detallando metodologías y lecciones aprendidas."
      ],
      answer: 3
    },
    {
      question: "¿Cuál es el tipo de artículo del siguiente texto?\nLuques Álvarez, L. (2016). Mark Twain, la argumentación y la persuasión: reseña del capítulo “From Conceptual Meaning to Intentional Meaning in Argumentative Persuasion: A Literary Case”. Rastros Rostros, 18(32). https://doi.org/10.16925/ra.v18i32.1320",
      responses: [
        "Editorial: Generalmente breve, con un análisis conciso del tema y una postura clara.",
        "Reseña: Breve descripción de la obra seguida de una crítica o valoración.",
        "Artículo Científico: Introducción, metodología, resultados, discusión y conclusiones.",
        "Artículo de sistematización: Combina elementos teóricos con la práctica, detallando metodologías y lecciones aprendidas."
      ],
      answer: 1
    },
    {
      question: "¿Cuál es el tipo de artículo del siguiente texto?\nMarín Palacio, N., Duque Rodas, V., & Henao García, L. S. (2011). Una secuencia didáctica para la producción de textos argumentativos tipo ensayo mediado por la fotografía. Rastros Rostros, 22(1), 1-28. https://doi.org/10.16925/2382-4921.2020.01.03",
      responses: [
        "Ensayo: Libre, sin una estructura formal estricta. Introducción, desarrollo y conclusión son comunes, pero no obligatorios.",
        "Reseña: Breve descripción de la obra seguida de una crítica o valoración.",
        "Editorial: Generalmente breve, con un análisis conciso del tema y una postura clara.",
        "Artículo de reflexión: Más flexible, no sigue necesariamente la estructura formal de un artículo científico."
      ],
      answer: 0
    }
  ];

  private readonly _questionHandler : IQuestionHandler;

  constructor(questionHandlerService : QuestionsHandlerService){
    this._questionHandler = questionHandlerService;
  }

  public exe(){
    this.isExecuted = true;
  }
  public changesCurrentQuestionIndex(){
    if(this.currentQuestionIndex>=this.Questions.length-1){
      return;
    }
    this.isInStatusChange = true;
    setTimeout(()=>{
      this.isInStatusChange=false;
      if(this.getResults()==true){
        this.score +=100;
      }
      this.currentResponseIndex=null;
      this.currentQuestionIndex +=1;
      console.log("xd")

    },1500)
  }
  public changesCurrentResponseIndex(index : number){
    if(index==null){
      return;
    }
    if(index<=this.Questions[this.currentQuestionIndex].responses.length-1){
      this.currentResponseIndex = index;
      console.log(index);
    }
  }

  public getResults(){
    if(this.currentResponseIndex==null){
      return;
    }
    return this._questionHandler.defineOption(this.Questions[this.currentQuestionIndex], this.currentResponseIndex);
  }
}
