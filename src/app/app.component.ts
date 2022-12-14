import { Component, OnInit, ViewChild } from '@angular/core';
import { CarDataService } from './services/car-data.service';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  Cardata : any;
  cardata$:any;
  getcar:any;
  currentcarid:any;
  editmode: boolean=false;
  @ViewChild('carform') form!: NgForm;
  
  constructor(private cardataservice: CarDataService,private router: Router,private http:HttpClient) {
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
OnCarCreate(car : {name:string,type:string,price:number}){
  if(!this.editmode)
  this.http.post("https://localhost:7144/api/Car",car).subscribe();
  else
  this.cardataservice.updatecar(this.currentcarid,car);


}
onEditcar(id: number){
  this.currentcarid=id;
let currentCar=this.cardata$.find((c:any)=>{return c.id===id})
//console.log(currentCar);
this.form.setValue({
  name:currentCar.name,
  type:currentCar.type,
  price:currentCar.price,

})
this.editmode=true;
};

getById(id:number){
 this.http.get("https://localhost:7144/api/Car/"+id).subscribe((data:any) => {this.getcar=data});

console.log(this.getcar);
}
PlateForm(){
  this.router.navigate(['/Plateform'])
}
InsuranceForm(){
  this.router.navigate(['/InsuranceForm'])

}



}
