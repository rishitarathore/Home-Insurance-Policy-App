import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  constructor(private router:Router) { }
  userModel = new User('','',0,0,'',0);
  ngOnInit(): void {
  }
  prev()
  {
    this.router.navigate(['customer-details-two']);
  }
  
  next()
  {
    this.router.navigate(['home-structure-details'])
  }
  
}
export class User{
  constructor(
    public name:string,
    public address: string,
    public area:number,
    public value:number,
    public near:string,
    public share: number
  ){}
}
