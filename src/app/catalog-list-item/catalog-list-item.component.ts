import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-list-item',
  templateUrl: './catalog-list-item.component.html',
  styleUrls: ['./catalog-list-item.component.scss']
})
export class CatalogListItemComponent implements OnInit {
  @Input() title: string = '';
  @Input() image: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
