/// <reference path="book.ts" />

$(function () {
    $("#showbooks").click((ev: JQueryEventObject) => {
        $.getJSON("/api/Books/", (books: Array<Book>, status: string, jqXHR: JQueryXHR) => {
            let output = "<ul>";
            for (let book of books) {
                output += `<li>${book.Title}</li>`;
            }
            output += "</ul>";

            $("#output").html(output);
        });
    });

    $("#showbook").click((ev: JQueryEventObject) => {
        let bookid: number = $("#bookid").val();
        $.getJSON("/api/Books/" + bookid, (book: Book, status: string, jqXHR: JQueryXHR) => {
            let output = "<div>";
            output += `<div>${book.Title} ${book.Publisher}</div>`;
            output += "</div>";

            $("#output").html(output);
        });
    });
});