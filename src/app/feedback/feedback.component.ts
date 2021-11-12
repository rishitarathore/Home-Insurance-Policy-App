import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Customer } from '../customer';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  rating = ['Excellent', 'Good', 'Neutral', 'Poor'];

  constructor(private router:Router) { }
   ngOnInit(): void {
  }


  fname = localStorage.getItem('fname');
  lname = localStorage.getItem('lname');
  email = localStorage.getItem('email');

 
  prev()
  {
    this.router.navigate(['payment-sucessful']);
   
    Swal.fire("Submitted","Thanks for the feedback...","success");
  }
}
