import { Component, OnInit, ViewChild } from '@angular/core';
import { CarDataService } from '../services/car-data.service';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlatedataService } from '../services/platedata.service';
@Component({
  selector: 'app-plate-table',
  templateUrl: './plate-table.component.html',
  styleUrls: ['./plate-table.component.css']
})
export class PlateTableComponent implements OnInit {
  Platedata:any

  constructor(private PlateDataService: PlatedataService,private router: Router,private http:HttpClient)
   { 
    this.Platedata=[];

  }

  ngOnInit(): void {

    this.PlateDataService.getdata().subscribe((data:any)=>{
      this.Platedata=data;
    });
  }
  addPlate(){
  this.router.navigate(['/addPlate'])

  }
  onDeleteplate(ID: number)
{
  this.PlateDataService.deletePlate(ID).subscribe();
}
}


