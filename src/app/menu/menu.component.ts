import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { ActivityHandlerService } from '../activity-handler.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(public communicationService : CommunicationService, public activityHandler : ActivityHandlerService){}
  //Activity implementation
  //Activity objects contain the properties needed for workshop cards
  
  public texts : string[] = [
    "Hola bienvenido a la web de 'Buscando el Rastro'.",
    "Me presento, soy Chiro, soy un investigador novato, y necesitaré de tu ayuda para mejorar mis habilidades",
    "En este caso estoy investigando a la revistra 'Rastros Rostros', esta parece ser un gran recurso para aprender gran cantidad de temas interesantes",
    "Sin embargo, no soy capaz de entenderla en su totalidad.",
    "Así que estaré dando un recorrido a indexes de la revista, acompañame a esta aventura y así aprenderas conmigo sobre la revista 'Rastros Rostros'",
  ]



}

  //Activity definition
export interface Activity{
  Name : string;
  Description : string;
  UrlLink : string;
  UrlImage : string;
  score : number;
  isBlocked : boolean;
}