import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-consent',
  templateUrl: './customer-consent.component.html',
  styleUrls: ['./customer-consent.component.css']
})
export class CustomerConsentComponent implements OnInit {
  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  prev()
  {
    this.router.navigate(['get-started']);
  }
  next()
  {
    this.router.navigate(['home-structure-details']);

  }

}
