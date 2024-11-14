import { Component, OnDestroy } from '@angular/core';
import { Question, QuestionHandlerService } from '../question-handler.service';
import { CommunicationService } from '../communication.service';
import { ActivityHandlerService } from '../activity-handler.service';

@Component({
  selector: 'app-act-rdm',
  templateUrl: './act-rdm.component.html',
  styleUrls: ['./act-rdm.component.css']
})
export class ActRdmComponent implements OnDestroy {

  public isInit : boolean = false;
  public readonly _questionHandlerService : QuestionHandlerService;
  constructor(questionHandler : QuestionHandlerService, private communicationService : CommunicationService, private activityHandler : ActivityHandlerService ){
    this._questionHandlerService = questionHandler;
    this. fillQuestionList();
    this._questionHandlerService.setDelayTime(1000);
    this._questionHandlerService.setScoreMultiplier(100);
  }

  private texts: string[] = [
    "¡Felicidades, camarada!",
    "Has adquirido conocimientos sobre cómo clasificar artículos.",
    "En general, clasificar la información es un aspecto importantísimo para nosotros, los investigadores.",
    "Ahora, mi camarada, hasta aquí llega nuestro camino. No hay nada más que te pueda enseñar.",
    "Oh, bueno... que tú me puedas enseñar.",
    "Recuerda que la labor investigativa es lo que nos lleva al éxito.",
    "Te invito a visitar la página oficial de la revista 'Rastros y Rostros'.",
    "Allí podrás encontrar toda su base de datos e información importante que puede serte de gran ayuda.",
    "Hasta luego, camarada. ¡Mucha suerte!"
  ];
  
  public fillQuestionList(){
    let questions : Question[] =[
      new Question(
        "¿Cuál es el tipo de artículo del siguiente texto?\nPérez Carrero, C., Rodríguez Moreno, S. M., & Sánchez Mayorga, L. D. P. (2015). El cerebro tríadico y su relación con la curiosidad, el trabajo en equipo y la explicación de fenómenos para el desarrollo de actitud científica. Rastros Rostros, 17(31). https://doi.org/10.16925/ra.v17i31.1106",
        [
          "Artículo Científico: Introducción, metodología, resultados, discusión y conclusiones.",
          "Artículo de reflexión: Más flexible, no sigue necesariamente la estructura formal de un artículo científico.",
          "Editorial: Generalmente breve, con un análisis conciso del tema y una postura clara.",
          "Ensayo: Libre, sin una estructura formal estricta. Introducción, desarrollo y conclusión son comunes, pero no obligatorios."
        ],
        0
      ),
      new Question(
        "¿Cuál es el tipo de artículo del siguiente texto?\nTéllez Fajardo, A. (2012). Editorial: Coordenadas hacia la educación de alta calidad. Rastros Rostros, 14(27). https://revistas.ucc.edu.co/index.php/ra/article/view/438",
        [
          "Reseña: Breve descripción de la obra seguida de una crítica o valoración.",
          "Artículo de sistematización: Combina elementos teóricos con la práctica, detallando metodologías y lecciones aprendidas.",
          "Editorial: Generalmente breve, con un análisis conciso del tema y una postura clara.",
          "Artículo Científico: Introducción, metodología, resultados, discusión y conclusiones."
        ],
        2
      ),
      new Question(
        "¿Cuál es el tipo de artículo del siguiente texto?\nMosquera Mosquera, C. E., & Bustamante Zamudio, G. (2023). Condiciones de posibilidad en la formación del sujeto: una reflexión teórica más allá de lo educativo. Rastros Rostros, 26(1), 1-39. https://doi.org/10.16925/2382-4921.2024.01.13",
        [
          "Artículo de sistematización: Combina elementos teóricos con la práctica, detallando metodologías y lecciones aprendidas.",
          "Artículo de reflexión: Más flexible, no sigue necesariamente la estructura formal de un artículo científico.",
          "Editorial: Generalmente breve, con un análisis conciso del tema y una postura clara.",
          "Reseña: Breve descripción de la obra seguida de una crítica o valoración."
        ],
        1
      ),
      new Question(
        "¿Cuál es el tipo de artículo del siguiente texto?\nOlaya, M. C., Gualdrón, E., Gómez, L. F., & Fernández Umaña, D. I. (2013). Enseñanza y aprendizaje de idiomas con metodología Blended Learning: evaluación de una experiencia piloto en la Universidad Cooperativa de Colombia. Rastros Rostros, 15(29). https://doi.org/10.16925/ra.v15i29.696",
        [
          "Artículo de reflexión: Más flexible, no sigue necesariamente la estructura formal de un artículo científico.",
          "Artículo Científico: Introducción, metodología, resultados, discusión y conclusiones.",
          "Reseña: Breve descripción de la obra seguida de una crítica o valoración.",
          "Artículo de sistematización: Combina elementos teóricos con la práctica, detallando metodologías y lecciones aprendidas."
        ],
        3
      ),
      new Question(
        "¿Cuál es el tipo de artículo del siguiente texto?\nLuques Álvarez, L. (2016). Mark Twain, la argumentación y la persuasión: reseña del capítulo “From Conceptual Meaning to Intentional Meaning in Argumentative Persuasion: A Literary Case”. Rastros Rostros, 18(32). https://doi.org/10.16925/ra.v18i32.1320",
        [
          "Editorial: Generalmente breve, con un análisis conciso del tema y una postura clara.",
          "Reseña: Breve descripción de la obra seguida de una crítica o valoración.",
          "Artículo Científico: Introducción, metodología, resultados, discusión y conclusiones.",
          "Artículo de sistematización: Combina elementos teóricos con la práctica, detallando metodologías y lecciones aprendidas."
        ],
        1
      ),
      new Question(
        "¿Cuál es el tipo de artículo del siguiente texto?\nMarín Palacio, N., Duque Rodas, V., & Henao García, L. S. (2011). Una secuencia didáctica para la producción de textos argumentativos tipo ensayo mediado por la fotografía. Rastros Rostros, 22(1), 1-28. https://doi.org/10.16925/2382-4921.2020.01.03",
        [
          "Ensayo: Libre, sin una estructura formal estricta. Introducción, desarrollo y conclusión son comunes, pero no obligatorios.",
          "Reseña: Breve descripción de la obra seguida de una crítica o valoración.",
          "Editorial: Generalmente breve, con un análisis conciso del tema y una postura clara.",
          "Artículo de reflexión: Más flexible, no sigue necesariamente la estructura formal de un artículo científico."
        ],
        0
      )
    ]

    questions.forEach(x =>
      this._questionHandlerService.addQuestion(x)
    )
  }


  public Init(){
    this.isInit = true;
  }

  ngOnDestroy(): void {
      this._questionHandlerService.ngOnDestroy();
      this.isInit = false;
  }
  public provee(index : number){
    if(index == this._questionHandlerService.getLenghtQuestions()-1){
      this.usingWhenEnds();
    }
  }

  private usingWhenEnds(){
    this.activityHandler.changeAScore(3,this._questionHandlerService.getScore())
    this.communicationService.startPropertiesAndShows(this.texts, 'TALLER #4 TERMINADO!!');
  }

}
