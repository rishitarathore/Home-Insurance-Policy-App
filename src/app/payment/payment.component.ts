import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentSuccessfulComponent } from '../payment-successful/payment-successful.component';
import { Input } from '@angular/core';
import { CheckOutComponent } from '../check-out/check-out.component';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  radio: any;
  isChecked: boolean= true;
  public promocode=false;
  public vehicledetails=false;
  constructor(private router:Router,private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.vehicledetails = params["vehicledetails"];
      this.promocode=params["promocode"];
  });
  
   }

  ngOnInit(): void {
    
  }
  next()
  {
    this.router.navigate(['payment-sucessful']);
   
  }
  
}
