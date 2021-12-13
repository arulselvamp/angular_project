import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  foods: Food[] = [
    {value: '0', viewValue: 'Arul Selvam P'},
    {value: '1', viewValue: 'Harish A'},
    {value: '2', viewValue: 'Tacos'},
  ];

}
