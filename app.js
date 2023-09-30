//initial grid

const container = document.querySelector('#container');
const gridSize = document.querySelector('#size');

function newGrid(input) {
    let newDiv;
    let size = 640 / input;
    let total = input * input;
for (let i = 0; i < total; i++) {
    newDiv = document.createElement('div')
    container.append(newDiv);
    newDiv.style.width = size;
    newDiv.style.height = size;
    newDiv.setAttribute("id", "grid")
}}

newGrid(gridSize.value);

let divs = document.querySelectorAll('#grid');

for (let div of divs) {
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = 'black';
        
})
}


//color picker
const color = document.querySelector('#color');

color.addEventListener('input', function (e){
   rainbowReset();
for (let div of divs) {
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = e.srcElement.value;
        
})
}
})
    
//rainbow button   
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
const rainbow = document.querySelector('#rainbow');


function rainbowButton(){
     rainbow.style.backgroundImage = "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red)";
    rainbow.style.color = "white";
    eraserReset();
    for (let div of divs) {
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = makeRandColor();
})
}
rainbow.addEventListener('click', rainbowReset);
}

function rainbowReset(){
    rainbow.removeEventListener('click', rainbowReset);
    rainbow.style.background = "white";
    rainbow.style.color = "black";
    for (let div of divs) {
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = color.value;
})
}

}
  
rainbow.addEventListener('click', rainbowButton);

//eraser button
const eraser = document.querySelector('#eraser');

function eraserButton() {
      eraser.style.backgroundColor = "pink";
      rainbowReset();
    for (let div of divs) {
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = "white";
})
}
eraser.addEventListener('click', eraserReset);
}

function eraserReset(){
    eraser.removeEventListener('click', eraserReset);
    eraser.style.background="white";
    for (let div of divs) {
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = color.value;
})
}
}

eraser.addEventListener('click', eraserButton);


//clear button
const clear = document.querySelector('#clear');
function clearButton(){
    for (let i=0; i<divs.length; i++){
    divs[i].style.backgroundColor = 'white';
    }
    for (let div of divs) {
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = color.value;
})
}
eraserReset();
rainbowReset();
};
clear.addEventListener('click', clearButton);

//size slider


function deleteGrid(){
   const clear = document.getElementById("#container");
   container.innerHTML='';
    newGrid(gridSize.value);
    let gridLabel = document.querySelector('label');
    gridLabel.innerText = `Grid Size ${gridSize.value} x ${gridSize.value}`
    const divs2 = document.querySelectorAll('#grid');
    for (let div of divs2) {
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = color.value;
        
})
}
}

gridSize.addEventListener('input', function(){
    deleteGrid();
    rainbowReset();
    eraserReset();
     divs = document.querySelectorAll('#grid');
});