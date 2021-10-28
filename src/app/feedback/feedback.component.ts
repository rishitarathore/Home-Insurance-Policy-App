import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  prev()
  {
    this.router.navigate(['payment-sucessful']);
   
    alert("Thanks for the feedback...");
  }
}
