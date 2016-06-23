/// <reference path="helloworld.ts" />

$(function () {
    $("#button1").click((ev : JQueryEventObject) => {
        let name: string = $("#name").val();
        let greeting: string = new helloworld().greet(name);
        $("#div1").html(greeting);
    });
});

//jQuery(document).ready(function () {
//});