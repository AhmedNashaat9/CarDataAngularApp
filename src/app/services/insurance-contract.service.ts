import { Injectable } from '@angular/core';
import{environment} from'../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
@Injectable({
  providedIn: 'root'
})
export class InsuranceContractService {
  private  API = environment.apiUrl;
  private getInsurance = '/Insurance/Isurancelist';
  private AddInsurance = '/Insurance/Isurancelist';

  private deleteInsurance = '/Insurance/id?ID=';

  constructor(private http:HttpClient) { 

  }
  getdata(){  
    return this.http.get(this.API + this.getInsurance)
  }
  adddata(Insurancedata : {insuranceName:string,insuranceAmount:number,carId:number}){
    return this.http.post(this.API+this.AddInsurance,Insurancedata)
  }
  deleteinsurance(id:number){
    return this.http.delete(this.API+this.deleteInsurance+id)

  }
}
