import { Component, OnInit, ViewChild } from '@angular/core';
import { CarDataService } from '../services/car-data.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlatedataService } from '../services/platedata.service';
import { InsuranceContractService } from '../services/insurance-contract.service';
@Component({
  selector: 'app-insurance-contract',
  templateUrl: './insurance-contract.component.html',
  styleUrls: ['./insurance-contract.component.css']
})
export class InsuranceContractComponent implements OnInit {
  Insurancedata:any

  constructor(private InsuranceDataService: InsuranceContractService,private router: Router,private http:HttpClient) { 
    this.Insurancedata=[];

  }

  ngOnInit(): void {
    this.InsuranceDataService.getdata().subscribe((data:any)=>{
      this.Insurancedata=data;
    });
  }
  addPlate(){
  this.router.navigate(['/addInsurance'])
  }
  onDeleteinsurance(id: number)
{
  this.InsuranceDataService.deleteinsurance(id).subscribe();
}


}
