import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  selectedValue: string = '';

  foods: Food[] = [
    {value: 'steak-0', viewValue: '0'},
    {value: 'pizza-1', viewValue: '1'},
    {value: 'tacos-2', viewValue: '2'},
    {value: 'tacos-4', viewValue: '3'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
