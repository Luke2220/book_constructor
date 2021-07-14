let ourBooks = [];

function book(title, author, pages, is_read)
{
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false
    if (is_read == true)
    {
        this.read = 'true'
    }else
    {
        this.read = "false"
    }

    this.info = function(){
        return `${title}, ${author}, ${pages}, ${this.read}`
    }
}


function addBookToLibaray(){
    var title = document.forms['book-form']['title'].value;
    var author = document.forms['book-form']['author'].value;
    var pageCount = document.forms['book-form']['page-count'].value;
    var read = document.forms['book-form']['is-read'].value;
    
    var newBook = new book(title, author, pageCount, read);
    ourBooks.push(newBook);
    var bookList = document.getElementsByClassName('book-list')[0];
    var div = document.createElement('div');

    var p = document.createElement('p');
    p.innerHTML = newBook.info();
    console.log(newBook.info())
    div.append(p);

    bookList.append(div)
}




