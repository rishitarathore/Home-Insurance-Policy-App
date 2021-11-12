import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details-two',
  templateUrl: './customer-details-two.component.html',
  styleUrls: ['./customer-details-two.component.css']
})
export class CustomerDetailsTwoComponent implements OnInit {
  age: any;
  showAge: any;
  

  constructor(private router:Router) { }


  ngOnInit(): void {
  }
  ageCalculator()
  {
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
    }
  
  next()
  {
    this.router.navigate(['home-details']);

    
  }
  prev(){
    this.router.navigate(['customer-details']);
  }
}

