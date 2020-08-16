export class Category {
  name: string;
  category: string;
  xpos: number;
  ypos: number;
  constructor(name: string, cat: string, xpos: number, ypos: number) {
    this.name = name;
    this.category = cat;
    this.xpos = xpos;
    this.ypos = ypos;
  }
}
