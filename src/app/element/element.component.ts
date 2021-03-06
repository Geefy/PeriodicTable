import { Component, OnInit, Input } from '@angular/core';
import { Element } from '../period-table/Element';
@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input('Element')
  element: Element;

  constructor() { }

  ngOnInit(): void {
  }

}
