import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  customerModel = new Customer('','','');

  ngOnInit(): void {
  }
  prev()
  {
    this.router.navigate(['home-structure-details']);
 
  }
next(){
  localStorage.setItem('fname', this.customerModel.fname);
  localStorage.setItem('lname', this.customerModel.lname);
  localStorage.setItem('email', this.customerModel.email);
  this.router.navigate(['customer-details-two']);
  console.log(this.customerModel);
}
}
