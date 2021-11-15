import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-structure-details',
  templateUrl: './home-structure-details.component.html',
  styleUrls: ['./home-structure-details.component.css']
})

export class HomeStructureDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  prev()
  {
    this.router.navigate(['home-details']);
  }
  
  next()
  {
    this.router.navigate(['other-details'])
  }
}
