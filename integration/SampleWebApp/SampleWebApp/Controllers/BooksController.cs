using SampleWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SampleWebApp.Controllers
{
    public class BooksController : ApiController
    {
        // GET: api/Books
        public IEnumerable<Book> Get()
        {
            return BooksRepository.Instance.GetAllBooks();
        }

        // GET: api/Books/5
        public Book Get(int id)
        {
            return BooksRepository.Instance.GetBookById(id);
        }

        // POST: api/Books
        public void Post([FromBody]Book book)
        {
            BooksRepository.Instance.AddBook(book);
        }

        // PUT: api/Books/5
        public void Put(int id, [FromBody]Book book)
        {
            BooksRepository.Instance.UpdateBook(id, book);
        }

        // DELETE: api/Books/5
        public void Delete(int id)
        {
            BooksRepository.Instance.DeleteBook(id);
        }
    }
}
