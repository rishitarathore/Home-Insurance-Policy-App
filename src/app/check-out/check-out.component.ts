import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { VehicleInsuranceComponent } from '../vehicle-insurance/vehicle-insurance.component';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HomeDetailsComponent } from '../home-details/home-details.component';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  public textShow1 =false;
  public textShow2 =false;
  public vehicledetails=false;
   public promocode=false;
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
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "vehicledetails": this.vehicledetails,
      }
    };
    this.router.navigate(['payment'],navigationExtras);
   
  }
  apply(){
    
  this.promocode=true;
  let navigationExtras: NavigationExtras = {
    queryParams: {
        "vehicledetails": this.vehicledetails,
        "promocode":this.promocode
    }
  };
this.router.navigate(['payment'],navigationExtras);
  }
  
}
