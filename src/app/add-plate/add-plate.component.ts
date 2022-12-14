import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
import { EventEmitter } from 'stream';
import { PlatedataService } from '../services/platedata.service';

@Component({
  selector: 'app-add-plate',
  templateUrl: './add-plate.component.html',
  styleUrls: ['./add-plate.component.css']
})
export class AddPlateComponent implements OnInit {

  constructor(private Platedataservice:PlatedataService,private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  OnPlateCreate(Platedata : {Frontplate:string,Rearplate:string,CarId:number}){
    
  this.Platedataservice.AddPlate(Platedata).subscribe();
  this.router.navigate(['/Plateform'])

    
}


}
