export class Element {
    name: string;
    atomic_mass: number;
    category: string;
    number: number;
    symbol: string;
    xpos: number;
    ypos: number;
    constructor(name: string, atomic_mass: number, category: string, number: number,
        symbol: string, xpos: number, ypos: number) {
        this.name = name;
        this.atomic_mass = atomic_mass;
        this.category = category;
        this.number = number;
        this.symbol = symbol;
        this.xpos = xpos;
        this.ypos = ypos;
    }
}