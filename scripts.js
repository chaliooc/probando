// styling the principal container (body)
const container = document.getElementById(`container`);
container.style.display = `grid`;
container.style.placeContent = `center`;
container.style.height = `100vh`;
container.style.width = `100vw`;

// creating a div
const div = document.createElement(`div`);
div.style.height = `400px`;
div.style.width = `400px`;
div.style.border = `solid 2px red`;
container.appendChild(div);

// buttons and titles
const titulo = document.createElement(`h1`);
titulo.textContent = `Library`;
div.appendChild(titulo);

const boton1 = document.createElement(`button`);
boton1.textContent = `1`;
div.appendChild(boton1);

const boton2 = document.createElement(`button`);
boton2.textContent = `2`;
div.appendChild(boton2);

const boton3 = document.createElement(`button`);
boton3.textContent = `3`;
div.appendChild(boton3);

// books constructor
function Book (name,author,pages,readed) {
    
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readed = readed;

    function info () {

    }
}

let book1 = new Book (`La piramide roja`,`Rick Riordan`,`400`,`have readed it`);