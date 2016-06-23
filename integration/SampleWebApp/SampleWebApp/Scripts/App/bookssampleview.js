/// <reference path="book.ts" />
$(function () {
    $("#showbooks").click(function (ev) {
        $.getJSON("/api/Books/", function (books, status, jqXHR) {
            var output = "<ul>";
            for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
                var book = books_1[_i];
                output += "<li>" + book.Title + "</li>";
            }
            output += "</ul>";
            $("#output").html(output);
        });
    });
    $("#showbook").click(function (ev) {
        var bookid = $("#bookid").val();
        $.getJSON("/api/Books/" + bookid, function (book, status, jqXHR) {
            var output = "<div>";
            output += "<div>" + book.Title + " " + book.Publisher + "</div>";
            output += "</div>";
            $("#output").html(output);
        });
    });
});
//# sourceMappingURL=bookssampleview.js.map