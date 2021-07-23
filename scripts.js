// just selecting
let principalContainer = document.getElementById(`principalContainer`);
let container = document.getElementById(`container`);



// styling, but not creating grids yet
container.style.height = `25vh`;
container.style.width = `25vw`;
container.style.border = `solid 4px white`;
container.style.display = `grid`;



// declaring variables for sizing
let promptGridTemplate;
let gridArea;



// variable for the divs created with createDivs
let childDivs;

// var for color selection
let selection;

// sizing function 
function size () {

    promptGridTemplate = Number( prompt(`¿Grid size?`) );
    gridArea = promptGridTemplate * promptGridTemplate;
    
    let amountOfAutos = new Array(promptGridTemplate).fill(`auto`);
    amountOfAutos = amountOfAutos.join(` `);
    amountOfAutos = amountOfAutos.toString();

    container.style.gridTemplateColumns = amountOfAutos;
    container.style.gridTemplateRows = amountOfAutos;

}   


// create divs for each grid cell
function createDivs () {

    for (i = 0; i < gridArea; i++) {

        childDivs = document.createElement(`div`);
        childDivs.classList.add(`colored`);
        if (selection == `random`) { childDivs.addEventListener(`mouseover`, (e)=> { e.target.style.background = randomColors(); } ); }
        else if (selection == `lightBlue`) { childDivs.addEventListener(`mouseover`, (e)=> { e.target.style.background = `lightBlue`; } ) }
        container.appendChild(childDivs);

    } 

}


// delete divs and grid cells
function clear () {

    while (container.firstChild) {

        container.removeChild(container.lastChild);

    }

    container.style.gridTemplateColumns = `none`;
    container.style.gridTemplateRows = `none`;

}


// clear and create all again but with other class setted to black
function resetColor () {

    while (container.firstChild) {

        container.removeChild(container.lastChild);

    }

    for (i = 0; i < gridArea; i++) {

        childDivs = document.createElement(`div`);
        childDivs.classList.add(`uncolored`);
        if (selection == `random`) { childDivs.addEventListener(`mouseover`, (e)=> { e.target.style.background = randomColors(); } ); }
        else if (selection == `lightBlue`) { childDivs.addEventListener(`mouseover`, (e)=> { e.target.style.background = `lightBlue`; } ) }
        container.appendChild(childDivs);

    }

}



let button1 = document.createElement(`button`);
button1.textContent = `Stablish size`;  
button1.addEventListener(`click`, ()=> { button1.textContent = `Resize`; clear(); size(); createDivs(); } ); // hacer todo en un boton resize
principalContainer.appendChild(button1);



let button2 = document.createElement(`button`);
button2.textContent = `Reset color`;
button2.addEventListener(`click`, ()=> { resetColor(); } );
principalContainer.appendChild(button2);


let button3 = document.createElement(`button`);
button3.textContent = `Lightblue`;
button3.addEventListener(`click`, ()=> { selection = `lightBlue`; resetColor(); } );
principalContainer.appendChild(button3);



let button4 = document.createElement(`button`);
button4.textContent = `Random`;
button4.addEventListener(`click`, ()=> { selection = `random`; resetColor(); } );
principalContainer.appendChild(button4);



function randomColors () {

    randomR = Math.floor( Math.random() * 255 ) + 1;
    randomG = Math.floor( Math.random() * 255 ) + 1;
    randomB = Math.floor( Math.random() * 255 ) + 1;

    rgb = `rgb(${randomR},${randomG},${randomB})`;

    return rgb;

} 
