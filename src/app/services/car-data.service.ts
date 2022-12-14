import { Injectable } from '@angular/core';
import{environment} from'../../environments/environment'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class CarDataService {

  private  API = environment.apiUrl;
  private getCars = '/Car/list';
  private deleteCars = '/Car/';
  private getCarsById = '/Car/';

  private addCars = '/Car';

  constructor(private http:HttpClient) { 
     
  }
  getdata(){  
    return this.http.get(this.API + this.getCars)
  }
  deleteCar(id : any){
    return this.http.delete(this.API + this.deleteCars+id)

  }
  updatecar(id:number,value:any){
     return this.http.put(this.API + this.deleteCars+id,value).subscribe();
  }
  AddCar(car : {name:string,type:string,price:number,color:string}){
    return this.http.post(this.API+this.addCars,car)
  }
  getByID(id:number){
    return this.http.get(this.API + this.getCarsById+id)

  }

}
