/// <reference path="./Displayable.ts" />
/// <reference path="./Person.ts" />

class Racer extends Person implements Displayable {
    private _car : string;

    constructor(firstname : string = "unknown", lastname : string = "unknown", car : string = "unknown") {
        super(firstname, lastname);
        this._car = car;
    }

    getcar() : string {
        return this._car;
    }
    setcar(car : string) : void {
        this._car = car;
    }

    display() {
        super.display();
        console.log(`and the car ${this._car}`);
    }

    driveacar() {
        console.log(`${this.getname()} drives fast`);
    }

}