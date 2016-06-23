/// <reference path="helloworld.ts" />
$(function () {
    $("#button1").click(function (ev) {
        var name = $("#name").val();
        var greeting = new helloworld().greet(name);
        $("#div1").html(greeting);
    });
});
//# sourceMappingURL=hello.js.map