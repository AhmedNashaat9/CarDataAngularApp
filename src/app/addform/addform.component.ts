import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
import { CarDataService } from '../services/car-data.service';
import { EventEmitter } from 'stream';



@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {

  @Input() form !: EventEmitter;
  constructor(private cardataservice: CarDataService,private router: Router,private http:HttpClient) { }
  currentcarid:any;
  editmode: boolean=false;

  ngOnInit(): void {


  }
  OnCarCreate(car : {name:string,type:string,price:number,color:string}){
    if(!this.editmode)
    this.cardataservice.AddCar(car).subscribe();
    else
    this.cardataservice.updatecar(this.currentcarid,car);
    this.router.navigate(['/'])
  
  
  }

}
