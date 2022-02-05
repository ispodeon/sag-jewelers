import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-hours-card',
  templateUrl: './business-hours-card.component.html',
  styleUrls: ['./business-hours-card.component.scss']
})
export class BusinessHoursCardComponent implements OnInit {
  days = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Fridya', 'Saturday'];
  hours = [ '10:00 AM - 8:00 PM', 
            '10:00 AM - 8:00 PM', 
            '10:00 AM - 8:00 PM', 
            '10:00 AM - 8:00 PM', 
            '10:00 AM - 8:00 PM', 
            '10:00 AM - 8:00 PM', 
            '10:00 AM - 8:00 PM' ]
  constructor() { }

  ngOnInit(): void {
  }

}
