interface IFoo {
	foo(name? : string) : string;
}

class MyFoo implements IFoo {
	foo(name? : string) : string {
		return "Foo";
	}	
}

var f1 = new MyFoo();
var result = f1.foo("bar");

// depeendeny injection
// Hollywood principle
function Doit(f : IFoo) {
	var r1 = f.foo("foobar");
	console.log(r1);	
}

class MyBetterFoo implements IFoo {
	foo(name? : string) : string {
		return "Hello, " + name;
	}
}

Doit(f1);

var better = new MyBetterFoo();
Doit(better);
