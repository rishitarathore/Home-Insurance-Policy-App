import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { CheckOutComponent } from '../check-out/check-out.component';

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
  values:string[]=['Yes','No']

  ngOnInit(){
  }

  
  next()
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "userform": true,
      }
  };
    this.router.navigate(['check-out'],navigationExtras);
  }
   prev(){
    this.router.navigate(['check-out']);
   }  


}
