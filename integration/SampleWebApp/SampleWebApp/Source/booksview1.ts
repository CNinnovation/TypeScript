/// <reference path="book1.ts" />

$(function () {
    $("#showbooks").click((ev: JQueryEventObject) => {
        $.getJSON("/api/Books/", (books: Array<Book1>, status, jqxhr) => {
            let output = "<ul>";
            for (let b of books) {
                output += `<li>${b.Title}</li>`;
            }
            output += "</ul>";
            $("#output").html(output);
        });
    });

    $("#showbook").click((ev: JQueryEventObject) => {
        var bookid: string = $("#bookid").val();
        $.getJSON("/api/Books/" + bookid, (book: Book1, status, jqxhr) => {
            let output = "<div>";
            output += `<div>${book.Title} ${book.Publisher}</div>`;
            $("#output").html(output);
        });
    });

    $("#addbook").click((ev: JQueryEventObject) => {
        var bookid: number = $("#bookid2").val();
        var title: string = $("#title").val();
        var publisher: string = $("#publisher").val();
        var book = new Book1();
        book.Title = title;
        book.Publisher = publisher;
        book.BookId = bookid;
        var json: string = JSON.stringify(book);
        $.post("/api/Books/", json, (data, status, jqxhr) => {
            alert("uploaded");
        }); 
    });
});