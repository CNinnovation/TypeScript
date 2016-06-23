/// <reference path="./Displayable.ts" />

class Person implements Displayable {
    private _firstname : string;
    private _lastname : string;

    constructor(firstname : string = "unknown", lastname : string = "unknown") {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    getfirstname() : string {
        return this._firstname;
    }
    setfirstname(firstname : string) : void {
        this._firstname = firstname;
    }

    getlastname() : string {
        return this._lastname;
    }
    setlastname(lastname : string) : void {
        this._lastname = lastname;
    }

    getname() : string {
        return `${this._firstname} ${this._lastname}`;
    }


    display() {
        console.log(this._firstname + " " + this._lastname);
    }

    driveacar() {
        console.log(`${this.getname()} drives slow`);
    }

}
