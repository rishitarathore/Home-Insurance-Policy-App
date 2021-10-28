import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-insurance',
  templateUrl: './vehicle-insurance.component.html',
  styleUrls: ['./vehicle-insurance.component.css']
})
export class VehicleInsuranceComponent implements OnInit {

  constructor(private router:Router) { }
  vehicles:string[]=['Car','Bus','Tractor','Bike','Other'];
  parkareas:string[]=['A private garage','The driveway','A quiet residential street','Other'];
  vehicletypes:string[]=['Owned','Leased','Financed'];
  ngOnInit(): void {
  }
  next()
  {
    this.router.navigate(['check-out']);
  }
}
