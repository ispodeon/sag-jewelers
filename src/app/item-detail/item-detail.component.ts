import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  sizes: string[] = ['00','02','04','06','08','10','12'];
  colors: string[] = ['red','blue','green','purple','yellow','black','grey'];

  constructor() { }

  ngOnInit(): void {
  }

}
