/// <reference path="./Displayable.ts" />

class Rectangle implements Displayable {
    constructor(public width : number, public height : number)  {
    }

    display() : void {
        console.log(`rectangle - ${this.width} * ${this.height}`);
    }
}