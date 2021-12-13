import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

import { OneComponent } from './one/one.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerslistComponent } from './customerslist/customerslist.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleslistComponent } from './vehicleslist/vehicleslist.component';
const routes: Routes = [
  {path:'dashboard',component:OneComponent},
  {path:'customer',component:CustomerComponent},
  {path:'customerslist',component:CustomerslistComponent},
  {path:'vehicle',component:VehicleComponent},
  {path:'vehicleslist',component:VehicleslistComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    CustomerComponent,
    CustomerslistComponent,
    VehicleComponent,
    VehicleslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,MatFormFieldModule,MatInputModule,MatTableModule,MatSelectModule,
    MatCardModule, MatIconModule, MatToolbarModule,MatSidenavModule,MatListModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
