import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  // general variables
  private transitionStatus : boolean = false;
  private showsFixed : boolean = false;
  private textList : string[] = [];
  private title : string | null= null;

  // getters and setters for transitionStatus variable
  public startTransition(){
    this.transitionStatus = true;
  }

  public stopTransition(){
    this.transitionStatus = false;
  }

  public getTransitionStatus(){
    return this.transitionStatus;
  }

  // getters and setters for showFixed variable
  public startShowsFixed(){
    this.showsFixed = true;
  }

  public stopShowsFixed(){
    this.showsFixed = false;
  }

  public getShowsFixedStatus(){
    return this.showsFixed;
  }

  // logic functions for showFixed pagination
  public setTextList(list : string[]){
    this.textList = list;
  }

  public setTitle(title : string|null = null){
    this.title = title;
  }

  public getTitle(){
    return this.title;
  }

  public getTextList(){
    return this.textList;
  }

  public startPropertiesAndShows(list : string[], title : string | null = null){
    this.title = title;
    this.textList = list;
    this.startShowsFixed();
  }
}
