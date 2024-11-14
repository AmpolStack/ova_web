import { Injectable } from '@angular/core';
import { Activity } from './menu/menu.component';

@Injectable({
  providedIn: 'root'
})
export class ActivityHandlerService {

  constructor() { }
  public activitysList : Activity[] = [
    {Name:'Rastreando el origen', Description:'¡Bienvenido a "Rastreando el Origen"! Embárcate en un viaje fascinante a través del tiempo para descubrir los misteriosos orígenes de la revista Rastros Rostros. En esta primera pista, te sumergirás en la historia detrás de la creación de esta icónica publicación, explorando los eventos y las figuras clave que la hicieron posible. Prepárate para desenterrar secretos ocultos y desvelar el camino que llevó al nacimiento de una revista que ha dejado una huella indeleble en la historia. ¡El viaje hacia el pasado comienza aquí!',UrlLink:'REO', UrlImage:'../../../assets/images/Icono tiempo.svg', score:0, isBlocked:false},
    {Name:'Rastros de nuestros rostros', Description:'¡Te damos la bienvenida a “Rastros de nuestros rostros”! En este pequeño apartado queremos mostrarte algunas de las diferentes galas que llevó con orgullo nuestra amada Revista. ¡Conoce el estilo del ayer para saber la moda del mañana!',UrlLink:'RNR', UrlImage:'../../../assets/images/Icono pintura.svg', score:0, isBlocked: true},
    {Name:'pescando ideas', Description:'¡Bienvenido a “pescando ideas”! Sumérgete en esta aventura donde podrás pescar palabras que te ayudarán a crear frases y conocer diferentes temáticas de nuestra revista “rastros rostros” y así apropiarse del conocimiento de ésta.',UrlLink:'PI', UrlImage:'../../../assets/images/Icono pesca.svg',score:0, isBlocked: true},
    {Name:'El Rastro del Millón', Description:'¡Bienvenidos a "El Rastro del Millón"! Prepárate para un desafío lleno de conocimientos, donde tu capacidad para identificar y clasificar correctamente diferentes tipos de artículos te llevará a lo más alto. ¿Estás listo para poner a prueba tu habilidad con las citas? ¡Esta es tu oportunidad de demostrar cuánto sabes!',UrlLink:'RDM', UrlImage:'../../../assets/images/Icono idea.svg',score:0, isBlocked: true},
  ]

  public changeAblock(index : number, value : boolean){
    this.activitysList[index].isBlocked = value;
  }

  public changeAScore(index: number, value : number){
    this.activitysList[index].score = value;
  }

  public everyIsUnlocked(): boolean{
    return this.activitysList.every(x =>{
      x.isBlocked == false;
    });
  }

  public getGlobalScore(){
    let temp = 0;
    this.activitysList.forEach(x =>{
      temp+=x.score;
    })
    return temp;
  }



}
