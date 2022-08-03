const myLibrary = [];

function Book(name, author, pages,read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read
}

const book1 = new Book("The Hobbit","J.R.R. Tolkien", 295);
const book2= new Book("Of Mice and Men","John Steinbeck", 107);
const book3 = new Book("Black Mamba Mentality", "Kobe Bryan", 208);
myLibrary.push(book1);
myLibrary.push(book2);  
myLibrary.push(book3);

const plotMyBooks = document.querySelector('.myBooks');
//Adds book to the library
function addBookToLibrary(){

    myLibrary.forEach((element, index)=>{

        //Creates the card
        let div = document.createElement('div');
        div.classList.add("card"); //Add idd
        div.setAttribute('id',`card-${index}`);
        plotMyBooks.appendChild(div);

        let getCardId = document.querySelector(`#card-${index}`);
        //Add text to title
        const h3 = document.createElement('h3');
        h3.classList.add("title-book");
        h3.setAttribute('id',`card-title-${index}`);
        h3.textContent = element.name;
        getCardId.appendChild(h3);

        //Ads text to author
        let author = document.createElement('p');
        author.textContent = `Author: ${element.author}`;
        getCardId.appendChild(author);

        //Adds number of pagers
        let pages = document.createElement('p');
        pages.textContent =`Pages: ${element.pages}` ;
        getCardId.appendChild(pages);

        //Adds if read or not
        let isRead= document.createElement('p');
        isRead.textContent = "Finished"
        getCardId.appendChild(isRead);

        let createButton = document.createElement('button')
        createButton.classList.add("delete-button");
        createButton.setAttribute('id',`${index}`);
        createButton.setAttribute('value',`${element.name}`)
        createButton.textContent ="Del";
        getCardId.appendChild(createButton);

        let createReadBtn = document.createElement('button');
        createReadBtn.classList.add("read-button");
        createReadBtn.setAttribute('id',`${index}`);
        createReadBtn.textContent="unread";
        createReadBtn.setAttribute('value',`${element.name}`);
        getCardId.appendChild(createReadBtn);
    });
}
addBookToLibrary();

//Button Functionality 

var getForm = document.querySelector(".create-form");
getForm.addEventListener(("click"),()=>{
    const add= document.getElementById("add");
    add.style.display ="block";
});

var deleteCards = document.querySelectorAll(".delete-button");

function delBook(){
    
}
deleteCards.forEach((button) =>{ 
    button.addEventListener(("click"),(e) =>{
        button.parentNode.remove();
        myLibrary.forEach((element,index)=>{
            if (e.target.value == element.name)
            {
                myLibrary.splice(index,1);
                console.log(myLibrary);
            }
        });       
     
    });
});

var readBtns = document.querySelectorAll(".read-button");
readBtns.forEach((button) =>{
    button.addEventListener(("click"),(e)=>{
        myLibrary.forEach((book,index)=>{
            var getBG = button.parentNode.querySelector('.card .read-button');
            if(e.target.value == book.name)
            {
                myLibrary[index].isRead();
                console.log(myLibrary[index].read);
                if (myLibrary[index].read){
                    getBG.style.backgroundColor="#5995DA";
                }
                else{
                    getBG.style.backgroundColor="red";
                }
            }
        });
    })
})

Book.prototype.isRead=function(){
    if (this.read == null)
    {
        this.read = true;
    }
    else if(this.read){
        this.read= false;
    }
    else{
        this.read= true;
    }
}

// Book.prototype.info = function()
// {
//     if (this.finish){
//         console.log(`${this.name}, ${this.pages}, already read`);
//     } else{
//         console.log(`${this.name}, ${this.pages} pages, not read yet`);
//     }
// }

// function isRead(name,pages){
//     this.name = name,
//     this.pages = pages
//     this.finish = true
// }

// function notRead(name,pages){
//     this.name = name,
//     this.pages = pages
//     this.finish = false 
// }

// isRead.prototype = Object.create(Book.prototype);
// notRead.prototype = Object.create(Book.prototype);

// const theHobbit = new isRead("J.R.R. Tolkien", 295);
// const ofMiceAndMen = new notRead("John Steinbeck", 107);

