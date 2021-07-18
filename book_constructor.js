let ourBooks = [];
var submitButton = document.querySelector('.book-submit')
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    getFormInfo()});

var addButton = document.querySelector('.add-book')
addButton.addEventListener('click', () => {
    toggleBookForm(addButton)});
    
    window.onload = loadBookSaves;

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
        return `${title}, ${author}, ${pages}, ${this.read}`
    }
}

function getFormInfo(){
    let title = document.forms['book-form']['title'].value;
    let author = document.forms['book-form']['author'].value;
    let pageCount = document.forms['book-form']['page-count'].value;
    let read = document.forms['book-form']['is-read'].value;
    addBookToLibrary(title,author,pageCount,read);
    
}

function addBookToLibrary(_title, _author, _pageCount, _read){

    let newBook = new book(_title, _author, _pageCount, _read);
    ourBooks.push(newBook);
    var bookIndex = ourBooks.length - 1;

    let bookList = document.querySelector('.book-list');
    var div = document.createElement('div');
    div.classList.add('book-card', 'book-layout');

    localStorage.setItem(bookIndex, newBook.info());

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

function loadBookSaves(){
    let bookInfo = '';
    let count = 0;
    while (bookInfo != null){
        bookInfo = localStorage.getItem(count);
        if (bookInfo != null){
            let infoArray = bookInfo.split(',');
            addBookToLibrary(infoArray[0],infoArray[1],infoArray[2],infoArray[3]);
        }
        count++;
    }
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
    localStorage.removeItem(bookIndex);
    console.log(bookIndex);
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




