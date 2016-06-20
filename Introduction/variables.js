function datatypes() {
    var b1 = true;
    var n1 = 42;
    var s1 = "hello";
    var a1 = new Array(3);
    var a2;
    a1[0] = "1";
    a1[1] = "2";
    a1[2] = "3";
    a1[3] = "4";
    a1[4] = "5";
    a2[3] = "11";
    alert(a1[2]);
    alert(a1[3]);
    alert(a1[4]);
}
function varletconst() {
    {
        var x = 3;
        var y = 4;
        var z = 1234;
        alert(y);
        alert(z);
    }
    alert(x);
}
datatypes();
// varletconst(); 
