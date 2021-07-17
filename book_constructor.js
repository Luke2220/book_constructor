let ourBooks = [];
var submitButton = document.querySelector('.book-submit')
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibaray()});

var addButton = document.querySelector('.add-book')
addButton.addEventListener('click', () => {
    toggleBookForm(addButton)});
    

function book(title, author, pages, is_read)
{
    this.title = title
    this.author = author
    this.pages = pages
    this.read = 'read'
    if (is_read == 'true')
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
    let title = document.forms['book-form']['title'].value;
    let author = document.forms['book-form']['author'].value;
    let pageCount = document.forms['book-form']['page-count'].value;
    let read = document.forms['book-form']['is-read'].value;
    let newBook = new book(title, author, pageCount, read);
    ourBooks.push(newBook);
    var bookIndex = ourBooks.length - 1;

    let bookList = document.querySelector('.book-list');
    var div = document.createElement('div');
    div.classList.add('book-card');

    newBook.info().split(',').forEach((info) => {createBookCard(div, info)});    
  
    let closeBtn = document.createElement('button');
    closeBtn.classList.add('remove-btn');
    closeBtn.textContent = 'Remove';

    let toggleReadbtn = document.createElement('button');
    toggleReadbtn.classList.add('read-btn');
    toggleReadbtn.textContent = 'Change Read Status';
    

    div.appendChild(toggleReadbtn);
    div.appendChild(closeBtn);
    

    div.setAttribute('book-index', bookIndex);

    toggleReadbtn.addEventListener('click', () => {toggleBookRead(ourBooks[bookIndex], div)});
    closeBtn.addEventListener('click', () => {removeBook(bookIndex, div)});

    bookList.appendChild(div);
}

function createBookCard(div, info){
    let p = document.createElement('p');
    p.textContent = info;
    div.appendChild(p);

}

function toggleBookForm(addButton){
    let form = document.querySelector('.form-toggle');
    if (form.style.display === "none")
    {
        addButton.textContent = 'Close';
        form.style.display = 'block';
    } else {
        addButton.textContent = 'New Book';
        form.style.display = 'none';
    }
}

function removeBook(bookIndex, div){
    ourBooks.splice(bookIndex, bookIndex);
    div.remove();
}

function toggleBookRead(thisBook, div){
    if (thisBook.read == 'read')
    {
        thisBook.read = 'Not read yet';
        div.children[3].textContent = thisBook.read;
        
    }else
    {
        thisBook.read = "read";
        div.children[3].textContent = thisBook.read;
    }

    
}




