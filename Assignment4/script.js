const X = "img\\cross.svg";
const O = "img\\zero.svg";
const winInd = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];




const blocks = document.querySelectorAll('.inner');

const boxes = [];
const freeBoxes = [];
for(const box of blocks){
    freeBoxes.push(box);
    boxes.push(box);
}

const allX = [];
const all0 = [];


function restart(text) {
    
    let a = alert(text);
    if(a === undefined)
        window.location.reload(false); 
}

function checkWin(owner) {
    let data = [];
    if(owner === 'x')
        data = allX;
    else
        data = all0;
    data.sort();
    console.log(data);
    for(let i = 0; i < winInd.length; i++){
        let is = true;
        let winArray = winInd[i];
        
        for(let j = 0; j < winInd[i].length; j++){
            let temp = data.indexOf(winArray[j]-1);
            if(temp === -1){
                is = false;
            }
        }
        if(is){
            restart(owner + " is winner");
            return;
        }
    }
    if(freeBoxes.length === 0){
        restart('nobody won');
    }

}

function assignSpace(space, owner) {
    const image = document.createElement('img');
    image.src = (owner==='x') ? X : O;
    space.appendChild(image);
    const indexToRemove = freeBoxes.indexOf(space);
    freeBoxes.splice(indexToRemove, 1);
    freeBoxes.splice()
    space.removeEventListener('click', changeToX);
    checkWin(owner);
    
}

function changeToX(event) {
    allX.push(boxes.indexOf(event.currentTarget));
    assignSpace(event.currentTarget, 'x');
    
    computerChoose0();
}

function computerChoose0() {
    const index = Math.floor(Math.random()*freeBoxes.length);
    const freeSpacce = freeBoxes[index];
    all0.push(boxes.indexOf(freeSpacce));
    assignSpace(freeSpacce, 'o');
}




for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', changeToX);
}