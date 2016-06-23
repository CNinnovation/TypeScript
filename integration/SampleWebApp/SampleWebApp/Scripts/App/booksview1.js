/// <reference path="book1.ts" />
$(function () {
    $("#showbooks").click(function (ev) {
        $.getJSON("/api/Books/", function (books, status, jqxhr) {
            var output = "<ul>";
            for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
                var b = books_1[_i];
                output += "<li>" + b.Title + "</li>";
            }
            output += "</ul>";
            $("#output").html(output);
        });
    });
    $("#showbook").click(function (ev) {
        var bookid = $("#bookid").val();
        $.getJSON("/api/Books/" + bookid, function (book, status, jqxhr) {
            var output = "<div>";
            output += "<div>" + book.Title + " " + book.Publisher + "</div>";
            $("#output").html(output);
        });
    });
    $("#addbook").click(function (ev) {
        var bookid = $("#bookid2").val();
        var title = $("#title").val();
        var publisher = $("#publisher").val();
        var book = new Book1();
        book.Title = title;
        book.Publisher = publisher;
        book.BookId = bookid;
        var json = JSON.stringify(book);
        $.post("/api/Books/", json, function (data, status, jqxhr) {
            alert("uploaded");
        });
    });
});
//# sourceMappingURL=booksview1.js.map