import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id:number;
  cname: string;
  vname: string;
  vmodel: string;
  vvin: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, cname: 'Arul Selvam P', vname: 'Maruthi Benz', vmodel: 'MB12345', vvin:'12345678'},
  {id: 2, cname: 'Harish Arumugam', vname: 'Tata Innova', vmodel: 'TI8765', vvin:'87654321'},
];

@Component({
  selector: 'app-vehicleslist',
  templateUrl: './vehicleslist.component.html',
  styleUrls: ['./vehicleslist.component.css']
})
export class VehicleslistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id', 'cname', 'vname', 'vmodel','vvin'];
  dataSource = ELEMENT_DATA;

}
