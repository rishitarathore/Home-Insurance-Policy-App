import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-details',
  templateUrl: './other-details.component.html',
  styleUrls: ['./other-details.component.css']
})
export class OtherDetailsComponent implements OnInit {

  build_in_appliances = ['Refrigerator', 'Microwave/Oven', 'Solar Geyser', 'Heating/Cooling System'];
  utilities = ['Borewell', 'Septic Tank', 'Public Water', 'Public Sewer'];
  garage = ['Attached Garage', 'Detached Garage'];
  security_system = ['Monitored Alarm', 'Smoke Alarm', 'Intruder Alarm', 'CCTV Cameras', 'Security Guard'];
  wiring_to_house = ['Cleat Wiring', 'Casing and Capping Wiring', 'Batten Wiring', 'Lead Sheathed Wiring', 'Conduit Wiring'];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  prev()
  {
    this.router.navigate(['home-structure-details']);
  }

  next()
  {
    this.router.navigate(['check-out']);

  }


}
