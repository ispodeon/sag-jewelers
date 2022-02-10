import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  contacts = [
    { text: '(614) 615-9502', icon: 'phone'},
    { text: 'Live Chat', icon: 'chat'},
    { text: 'Message us', icon: 'message'},
    { text: 'Make an appointment', icon: 'date_range'}
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(i: number) {
    if(i == 2){
      console.log('message us');
    }
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html'
})
export class DialogContent {

}