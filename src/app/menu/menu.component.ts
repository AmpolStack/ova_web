import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(public communicationService : CommunicationService){}
  //Activity implementation
  //Activity objects contain the properties needed for workshop cards
  public Activitys : Activity[] =[
    {Name:'Rastreando el origen', Description:'¡Bienvenido a "Rastreando el Origen"! Embárcate en un viaje fascinante a través del tiempo para descubrir los misteriosos orígenes de la revista Rastros Rostros. En esta primera pista, te sumergirás en la historia detrás de la creación de esta icónica publicación, explorando los eventos y las figuras clave que la hicieron posible. Prepárate para desenterrar secretos ocultos y desvelar el camino que llevó al nacimiento de una revista que ha dejado una huella indeleble en la historia. ¡El viaje hacia el pasado comienza aquí!',UrlLink:'REO', UrlImage:'../../../assets/images/Icono tiempo.svg'},
    {Name:'Rastros de nuestros rostros', Description:'¡Te damos la bienvenida a “Rastros de nuestros rostros”! En este pequeño apartado queremos mostrarte algunas de las diferentes galas que llevó con orgullo nuestra amada Revista. ¡Conoce el estilo del ayer para saber la moda del mañana!',UrlLink:'RNR', UrlImage:'../../../assets/images/Icono pintura.svg'},
    {Name:'pescando ideas', Description:'¡Bienvenido a “pescando ideas”! Sumérgete en esta aventura donde podrás pescar palabras que te ayudarán a crear frases y conocer diferentes temáticas de nuestra revista “rastros rostros” y así apropiarse del conocimiento de ésta.',UrlLink:'PI', UrlImage:'../../../assets/images/Icono pesca.svg'},
    {Name:'El Rastro del Millón', Description:'¡Bienvenidos a "El Rastro del Millón"! Prepárate para un desafío lleno de conocimientos, donde tu capacidad para identificar y clasificar correctamente diferentes tipos de artículos te llevará a lo más alto. ¿Estás listo para poner a prueba tu habilidad con las citas? ¡Esta es tu oportunidad de demostrar cuánto sabes!',UrlLink:'RDM', UrlImage:'../../../assets/images/Icono idea.svg'},
  ]
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
}