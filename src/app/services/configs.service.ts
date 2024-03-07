import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  private backendUrl = "https://backend.0ti.com.br/public/api";

  private registerView:boolean = false;

  constructor() { }

  public getUrl():string {
    return this.backendUrl;
  }
  public getRegisterView():boolean {
    return this.registerView;
  }

  public setRegisterView(value:boolean):void { 
    this.registerView=value;
  }
}
