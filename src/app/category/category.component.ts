import { Component, OnInit, Input } from '@angular/core';
import { Category } from './Category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input('Category')
  category: Category;
  constructor() { }

  ngOnInit(): void {
  }

}
