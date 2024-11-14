import { Component, Inject, OnDestroy } from '@angular/core';
import { QuestionHandlerService } from '../question-handler.service';
import { ActivityHandlerService } from '../activity-handler.service';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-act-rnr',
  templateUrl: './act-rnr.component.html',
  styleUrls: ['./act-rnr.component.css']
})
export class ActRnrComponent{
  public roomLength : number = 8;
  public roomIndex : number = 2;
  public urlTemplate : string = 'assets/images/portadas/Portada';
  public urlExtension : string = '.webp';
  public message : string = '';
  public isValid : boolean = false;

  constructor(public activityHandler : ActivityHandlerService, private communicationHandler : CommunicationService){}
  private texts: string[] = [
    "¡Felicidades, camarada!",
    "Investigador y artista: vaya perfil tan peculiar.",
    "Con esta actividad finalizada, tenemos acceso a la siguiente.",
    "No perdamos tiempo, ¡adentrémonos rápidamente en el siguiente destino!"
  ];  
  // if increment variable is true, increases the roomIndex value, but if are false, decreases the room index value
  public changesIndexValue(increment : boolean){
    
    if(increment && this.roomIndex<this.roomLength*2){
      this.roomIndex += 2;
    }
    else if(!increment && this.roomIndex>=4){
      this.roomIndex-=2;
    }
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input?.files && input.files.length > 0) {
      const file = input.files[0];
      const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];

      if (!validTypes.includes(file.type)) {
        this.message = 'Archivo no válido. Por favor selecciona un archivo JPG, PNG, SVG o WEBP.';
        this.isValid = false;
      } 
      else{
        this.isValid = true;
      }
    }
  }

  public whenEnds(){
    if(this.isValid){
      this.communicationHandler.startPropertiesAndShows(this.texts, 'TALLER #2 FINALIZADO!!!');
      this.activityHandler.changeAScore(1, 1000);
      this.activityHandler.changeAblock(2, false);
    }
  }
}
