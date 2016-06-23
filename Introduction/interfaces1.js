var MyFoo = (function () {
    function MyFoo() {
    }
    MyFoo.prototype.foo = function (name) {
        return "Foo";
    };
    return MyFoo;
}());
var f1 = new MyFoo();
var result = f1.foo("bar");
function Doit(f) {
    var r1 = f.foo("foobar");
    console.log(r1);
}
var MyBetterFoo = (function () {
    function MyBetterFoo() {
    }
    MyBetterFoo.prototype.foo = function (name) {
        return "Hello, " + name;
    };
    return MyBetterFoo;
}());
Doit(f1);
var better = new MyBetterFoo();
Doit(better);
