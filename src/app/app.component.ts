import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

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

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor(){}

  ngOnInit(): void {
  }

  tableClicked(){
    console.log('clicked');
    this.clicked = !this.clicked;
  }

  listSelect(event: MatSelectionListChange){
    console.log(event);
  }
}
