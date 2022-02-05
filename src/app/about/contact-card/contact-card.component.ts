import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  contacts = [
    { text: '(614) 615-9502', icon: 'phone'},
    { text: 'Live Chat ', icon: 'chat'},
    { text: 'Message us', icon: 'message'},
    { text: 'Make an appointment', icon: 'date_range'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
