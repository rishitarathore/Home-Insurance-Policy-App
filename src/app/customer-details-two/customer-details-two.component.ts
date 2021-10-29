import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details-two',
  templateUrl: './customer-details-two.component.html',
  styleUrls: ['./customer-details-two.component.css']
})
export class CustomerDetailsTwoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  next()
  {
    this.router.navigate(['home-details']);

  }
  prev(){
    this.router.navigate(['customer-details']);
  }
}
