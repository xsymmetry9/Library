const myLibrary = [];

function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
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
        createButton.setAttribute('id',`${index}`)
        createButton.textContent ="Del";
        getCardId.appendChild(createButton);
    });
}
addBookToLibrary();

//Button Functionality 

var getForm = document.querySelector(".create-form");
getForm.addEventListener(("click"),()=>{
    const add= document.getElementById("add");
    add.style.display ="block";
});

// var addBookBtn = document.querySelector(".add-book");
// getForm.addEventListener(("click"), function(e){
//     console.log(e.value);
// });

var deleteCards = document.querySelectorAll(".delete-button");

function getBook(index){
    return myLibrary[index];
}
deleteCards.forEach((button) =>{ 
    button.addEventListener(("click"),() =>{
        button.parentNode.remove();
        console.log(myLibrary.indexOf(getBook(button.id)));        
    });

});


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

