using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SampleWebApp.Models
{
    public class BooksRepository
    {
        private readonly IList<Book> _books = new List<Book>();

        private BooksRepository()
        {
            _books.Add(new Book { BookId = 1, Title = "Professional C# 6", Publisher = "Wrox Press" });
            _books.Add(new Book { BookId = 2, Title = "Enterprise Services", Publisher = "AWL" });
            _books.Add(new Book { BookId = 3, Title = "Learning TypeScript", Publisher = "Packt Publishing" });
        }

        public static BooksRepository Instance => new BooksRepository();

        public IEnumerable<Book> GetAllBooks() => _books;

        public Book GetBookById(int bookId) => _books.SingleOrDefault(b => b.BookId == bookId);

        public void UpdateBook(int bookId, Book book)
        {
            if (book == null) throw new ArgumentNullException(nameof(book));
            if (bookId != book.BookId) throw new InvalidOperationException("invalid request");

            var selectedBook = _books.SingleOrDefault(b => b.BookId == bookId);
            if (selectedBook == null) throw new InvalidOperationException("book not found");

            _books.Remove(selectedBook);
            _books.Add(book);
        }

        public void AddBook(Book book)
        {
            _books.Add(book);
        }

        public bool DeleteBook(int bookId)
        {
            var selectedBook = _books.SingleOrDefault(b => b.BookId == bookId);
            if (selectedBook == null) return false;

            return _books.Remove(selectedBook);
        }


    }
}