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

var racer : Person = new Racer("Seb", "Vettel", "Ferrari");
racer.driveacar();

function displaySomething(d : Displayable) : void {
    d.display();
}



