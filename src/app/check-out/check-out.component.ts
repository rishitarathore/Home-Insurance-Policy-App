import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  public textShow1 =false;
  public textShow2 =false;

  constructor() { }

  ngOnInit(): void {
  }
  yes(){
    this.textShow2 = false;
   this.textShow1 = true;
  }
  no(){
    this.textShow1 = false;
   this.textShow2 = true;
  }
}
