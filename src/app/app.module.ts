import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddformComponent } from './addform/addform.component';
import { FormsModule } from '@angular/forms'; 
import {Component} from '@angular/core';
import { CartableComponent } from './cartable/cartable.component';
import { PlateTableComponent } from './plate-table/plate-table.component';
import { InsuranceContractComponent } from './insurance-contract/insurance-contract.component';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { AddPlateComponent } from './add-plate/add-plate.component';
import { ViewPlateComponent } from './view-plate/view-plate.component';

@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    CartableComponent,
    PlateTableComponent,
    InsuranceContractComponent,
    AddInsuranceComponent,
    AddPlateComponent,
    ViewPlateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
