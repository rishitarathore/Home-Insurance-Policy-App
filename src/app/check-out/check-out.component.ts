import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleInsuranceComponent } from '../vehicle-insurance/vehicle-insurance.component';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HomeDetailsComponent } from '../home-details/home-details.component';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  public textShow1 =false;
  public textShow2 =false;
  public vehicledetails=false;

  constructor(private router:Router,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.vehicledetails = params["userform"];
  });
  }
  ngOnInit()  {
    
  }
  
  yes(){
    this.textShow2 = false;
   this.textShow1 = true;
  }
  no(){
    this.textShow1 = false;
   this.textShow2 = true;
  }

  next()
  {
    this.router.navigate(['payment-sucessful']);
   
  }
  
}
