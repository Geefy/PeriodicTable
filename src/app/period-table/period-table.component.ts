import { Component, OnInit } from '@angular/core';
import { Element } from "./Element";
import Elements from './elementData.json';
import { Category } from '../category/Category';


@Component({
  selector: 'app-period-table',
  templateUrl: './period-table.component.html',
  styleUrls: ['./period-table.component.css']
})
export class PeriodTableComponent implements OnInit {
  elementsJson: [] = Elements;
  elements: Element[] = [];
  elementsSpecial: Element[] = [];
  elementsCategory: Category[] = [];
  constructor() { }

  ngOnInit(): void {
    this.fillElements();
    this.fillCategory();
  }

  fillElements() {
    for (var i = 0; i < this.elementsJson.length; i++) {
      let tempObj = new Element(this.elementsJson[i].name,
        this.elementsJson[i].atomic_mass,
        this.elementsJson[i].category,
        this.elementsJson[i].number,
        this.elementsJson[i].symbol,
        this.elementsJson[i].xpos - 1,
        this.elementsJson[i].ypos - 1
      );
      if (tempObj.category == "lanthanide" || tempObj.category == "actinide") {
        this.elementsSpecial.push(tempObj);
      }
      else {

        this.elements.push(tempObj);
      }

    }
  }

  fillCategory() {

    this.elementsCategory.push(new Category("Noble Gas","noble-gas", 3, 9));
    this.elementsCategory.push(new Category("Non-Metal","nonmetal", 4, 9));
    this.elementsCategory.push(new Category("Transition Metal","transition-metal", 5, 9));
    this.elementsCategory.push(new Category("Alkali Metal","alkali-metal", 6, 9));
    this.elementsCategory.push(new Category("Alkaline Earth Metal","alkaline-earth-metal", 7, 9));
    this.elementsCategory.push(new Category("Metalloid","metalloid", 3, 10));
    this.elementsCategory.push(new Category("Post Transition Metal","post-transition-metal", 4, 10));
    this.elementsCategory.push(new Category("Lanthanide","lanthanide", 5, 10));
    this.elementsCategory.push(new Category("Actinide","actinide", 6, 10));
    this.elementsCategory.push(new Category("Unknown Metal","unknown-metal", 7, 10));
  }
}
