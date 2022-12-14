import { Injectable } from '@angular/core';
import{environment} from'../../environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlatedataService {
  private  API = environment.apiUrl;
  private getCars = '/Plate/platelist';
  private deleteplates = '/Plate/deleteplateid?ID=';
  private createplates = '/Plate/plate';

  constructor(private http:HttpClient) { 
  }
  deletePlate(ID : any){
    return this.http.delete(this.API + this.deleteplates+ID)
  }
  getdata(){  
    return this.http.get(this.API + this.getCars)
  }
  AddPlate(Platedata : {Frontplate:string,Rearplate:string,CarId:number}){
    return this.http.post(this.API+this.createplates,Platedata)
  }
}
