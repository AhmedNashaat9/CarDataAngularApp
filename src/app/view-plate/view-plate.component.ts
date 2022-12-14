import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-plate',
  templateUrl: './view-plate.component.html',
  styleUrls: ['./view-plate.component.css']
})
export class ViewPlateComponent implements OnInit {
  @Input() SentCarId!:number;

  Insurancedata:any
  getcar:any;

  constructor(private router: Router,private http:HttpClient) { 
    this.Insurancedata=[];

  }


  ngOnInit(): void {
  

  }



}
