import { Component, OnInit } from '@angular/core';
import { JsonConvert, OperationMode, ValueCheckingMode } from "json2typescript";
import { Element } from "./Element";
import Elements from './elementData.json';


@Component({
  selector: 'app-period-table',
  templateUrl: './period-table.component.html',
  styleUrls: ['./period-table.component.css']
})
export class PeriodTableComponent implements OnInit {
  elementsJson: [] = Elements;
  elements: Element[] = [];

  constructor() { }

  ngOnInit(): void {
    for (var i = 0; i < this.elementsJson.length; i++) {
      let tempObj = new Element(this.elementsJson[i].name,
        this.elementsJson[i].atomic_mass,
        this.elementsJson[i].category,
        this.elementsJson[i].number,
        this.elementsJson[i].symbol,
        this.elementsJson[i].xpos,
        this.elementsJson[i].ypos
      );
      this.elements.push(tempObj);
    }
    console.log(this.elements);
  }
}
