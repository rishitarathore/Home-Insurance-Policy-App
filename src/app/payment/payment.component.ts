import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentSuccessfulComponent } from '../payment-successful/payment-successful.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  radio: any;
  isChecked: boolean= true;
  public vehicledetails=false;
  constructor(private router:Router,private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.vehicledetails = params["vehicledetails"];
  });
  
   }

  ngOnInit(): void {
    
  }
  next()
  {
    this.router.navigate(['payment-sucessful']);
   
  }
  
}
