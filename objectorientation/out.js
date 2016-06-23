var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="./Displayable.ts" />
var Person = (function () {
    function Person(firstname, lastname) {
        if (firstname === void 0) { firstname = "unknown"; }
        if (lastname === void 0) { lastname = "unknown"; }
        this._firstname = firstname;
        this._lastname = lastname;
    }
    Person.prototype.getfirstname = function () {
        return this._firstname;
    };
    Person.prototype.setfirstname = function (firstname) {
        this._firstname = firstname;
    };
    Person.prototype.getlastname = function () {
        return this._lastname;
    };
    Person.prototype.setlastname = function (lastname) {
        this._lastname = lastname;
    };
    Person.prototype.getname = function () {
        return this._firstname + " " + this._lastname;
    };
    Person.prototype.display = function () {
        console.log(this._firstname + " " + this._lastname);
    };
    Person.prototype.driveacar = function () {
        console.log(this.getname() + " drives slow");
    };
    return Person;
}());
/// <reference path="./Displayable.ts" />
/// <reference path="./Person.ts" />
var Racer = (function (_super) {
    __extends(Racer, _super);
    function Racer(firstname, lastname, car) {
        if (firstname === void 0) { firstname = "unknown"; }
        if (lastname === void 0) { lastname = "unknown"; }
        if (car === void 0) { car = "unknown"; }
        _super.call(this, firstname, lastname);
        this._car = car;
    }
    Racer.prototype.getcar = function () {
        return this._car;
    };
    Racer.prototype.setcar = function (car) {
        this._car = car;
    };
    Racer.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("and the car " + this._car);
    };
    Racer.prototype.driveacar = function () {
        console.log(this.getname() + " drives fast");
    };
    return Racer;
}(Person));
/// <reference path="./Displayable.ts" />
var Rectangle = (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.display = function () {
        console.log("rectangle - " + this.width + " * " + this.height);
    };
    return Rectangle;
}());
/// <reference path="./Person.ts" />
/// <reference path="./Racer.ts" />
/// <reference path="./Rectangle.ts" />
/// <reference path="./Displayable.ts" />
var p = new Person("Tom", "Turbo");
p.display();
p.driveacar();
var r = new Rectangle(100, 200);
displaySomething(r);
displaySomething(p);
var racer = new Racer("Seb", "Vettel", "Ferrari");
racer.driveacar();
function displaySomething(d) {
    d.display();
}
