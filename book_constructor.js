let ourBooks = [];
var addButton = document.querySelector('.book-submit')
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibaray()});

function book(title, author, pages, is_read)
{
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false
    if (is_read == true)
    {
        this.read = 'read'
    }else
    {
        this.read = "Not read yet"
    }

    this.info = function(){
        return `${title}, ${author}, ${pages} pages, ${this.read}`
    }
}


function addBookToLibaray(){
    var title = document.forms['book-form']['title'].value;
    var author = document.forms['book-form']['author'].value;
    var pageCount = document.forms['book-form']['page-count'].value;
    var read = document.forms['book-form']['is-read'].value;
    
    var newBook = new book(title, author, pageCount, read);
    ourBooks.push(newBook);

    var bookList = document.querySelector('.book-list');
    var div = document.createElement('div');
    div.classList.add('book-card');

    newBook.info().split(',').forEach((info) => {createBookCard(div, info)});

    
      
  
    bookList.appendChild(div);
}

function createBookCard(div, info){
    var p = document.createElement('p');
    p.textContent = info;
    div.appendChild(p);

}




