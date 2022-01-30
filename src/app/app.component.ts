import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sag-jewelers';

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  clicked = true;

  constructor(){}

  ngOnInit(): void {
  }

  tableClicked(){
    console.log('clicked');
    this.clicked = !this.clicked;
  }
}
