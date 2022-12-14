import { Component, OnInit, ViewChild , Input} from '@angular/core';
import { CarDataService } from '../services/car-data.service';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlatedataService } from '../services/platedata.service';
import { InsuranceContractComponent } from '../insurance-contract/insurance-contract.component';
import { InsuranceContractService } from '../services/insurance-contract.service';

@Component({
  selector: 'app-cartable',
  templateUrl: './cartable.component.html',
  styleUrls: ['./cartable.component.css']
})
export class CartableComponent implements OnInit {

  Cardata : any;
  cardata$:any;
  getcar:any;
  currentcarid:any;
  editmode: boolean=false;
  @Input() SentCarId!: number;

  
  constructor(private cardataservice: CarDataService,private InsuranceDataService: InsuranceContractService,private router: Router,private http:HttpClient) {
    this.cardata$=[];
    
  }
  
  
    ngOnInit(): void {

    this.cardataservice.getdata().subscribe((data:any)=>{
      this.cardata$=data;
      
    }
    
    );
}
onDeleteCar(id: number)
{
  this.cardataservice.deleteCar(id).subscribe();
}
onAddClick()
{
  this.router.navigateByUrl('addform');
}
OnCarCreate(car : {name:string,type:string,price:number,color:string}){
  if(!this.editmode)
  this.cardataservice.AddCar(car).subscribe();
  else
  this.cardataservice.updatecar(this.currentcarid,car);
}
onEditcar(id: number){
  this.router.navigate(['/addform'])
  this.currentcarid=id;
let currentCar=this.cardata$.find((c:any)=>{return c.id===id})
//console.log(currentCar);
 //this.form.setValue({
  //name:currentCar.name,
  //type:currentCar.type,
  //price:currentCar.price,
//})
this.editmode=true;
};

getById(id:number){
 this.cardataservice.getByID(id).subscribe((data:any) => {this.getcar=data});

console.log(this.getcar);
}

addcar(){
  this.router.navigate(['/addform'])
}
ViewInsurance(CarId:number){
  this.router.navigate(['/viewPlate'])

  
}

}
