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
        this.read = "not read yet"
    }

    this.info = function(){
        return `${title}, ${author}, ${pages}, ${this.read}`
    }
}


let hobbit = new book("The Hobbit", "J.R.R. Tolkien", "295 pages", false)
console.log(hobbit.info())