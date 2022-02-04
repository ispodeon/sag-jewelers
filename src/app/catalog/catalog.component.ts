import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../data/mock-categories';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  categories: Category[] = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
