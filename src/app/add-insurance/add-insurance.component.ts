import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
import { EventEmitter } from 'stream';
import { InsuranceContractService } from '../services/insurance-contract.service';
import * as internal from 'stream';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnInit {

  constructor(private Insurancedataservice:InsuranceContractService,private router: Router,private http:HttpClient) {

   }

  ngOnInit(): void {
  }
  OnInsuranceCreate(Insurancedata : {insuranceName:string,insuranceAmount:number,carId:number}){
    
    this.Insurancedataservice.adddata(Insurancedata).subscribe();
    this.router.navigate(['/InsuranceForm'])

  
      
  }

}
