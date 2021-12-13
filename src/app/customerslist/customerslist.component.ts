import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id:number;
  name: string;
  email: string;
  mob: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Arul Selvam P', email: 'arulselvamme@gmail.com', mob: '9994624231', address:'3/91, Kovaipudur Main Road, Perur Chettipalayam, Coimbatore-10.'},
  {id: 2, name: 'Harish Arumugam', email: 'arulselvamerp@gmail.com', mob: '99256316562', address:'66A, Maruthamalai Main Road, Vadavalli, Coimbatore-22.'},
];

@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.css']
})
export class CustomerslistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id', 'name', 'email', 'mob','address'];
  dataSource = ELEMENT_DATA;

}
