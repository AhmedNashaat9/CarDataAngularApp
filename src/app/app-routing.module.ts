import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { AddPlateComponent } from './add-plate/add-plate.component';
import { AddformComponent } from './addform/addform.component';
import { AppComponent } from './app.component';
import { CartableComponent } from './cartable/cartable.component';
import { InsuranceContractComponent } from './insurance-contract/insurance-contract.component';
import { PlateTableComponent } from './plate-table/plate-table.component';
import { ViewPlateComponent } from './view-plate/view-plate.component';

const routes: Routes = [

  {path: '', component : CartableComponent },
  {path:'addform', component : AddformComponent},
  {path:'Plateform', component : PlateTableComponent},
  {path:'InsuranceForm', component : InsuranceContractComponent},
  {path:'addPlate', component : AddPlateComponent},
  {path:'addInsurance', component : AddInsuranceComponent},
  {path:'viewPlate', component : ViewPlateComponent},

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
