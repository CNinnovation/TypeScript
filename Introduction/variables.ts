function datatypes() {
    var b1 : Boolean = true;
    var n1 : number = 42;
    var s1 : string = "hello";
    var a1 : Array<string> = new Array<string>(3);
    var a2 : string[];
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
        var x : number = 3;
	    let y : number = 4;
        const z : number = 1234;
    	alert(y);
        alert(z);
    }
    alert(x);
}

datatypes();
// varletconst();