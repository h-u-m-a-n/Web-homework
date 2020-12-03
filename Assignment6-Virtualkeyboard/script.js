const rows = [
   ['ESCAPE', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
   ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACKSPACE'],
   ['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
   ['CAPSLOCK', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER'],
   ['SHIFT', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',' , '.', '/'],
   ['CONTROL', 'WIN', 'ALT', 'SPACE', 'CONTEXTMENU']
];
const rowsAlt = [
   [],
   ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'BACKSPACE'],
   ['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
   ['CAPSLOCK', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'ENTER'],
   ['SHIFT', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<' , '>', '?']
]

const special = ['Shift', 'Control', 'Alt', 'CapsLock'];
const keyboard = document.querySelector('.keyboard');



for(let i = 0; i < rows.length; i++){
   const row = document.createElement('div');
   row.classList.add('row', 'row'+i);
   for(let j = 0; j < rows[i].length; j++){
      const key = document.createElement('div');
      switch(true){
         case (i===1 && j===rows[1].length-1): ;
         case (i===2 && j===0): ; 
         case (i===3 && j===0): ;
         case (i===3 && j===rows[3].length-1): key.classList.add('keyboard', 'wide'); break;
         case (i===4 && j===0): ;
         case (i===4 && j===rows[4].length-1): key.classList.add('keyboard', 'veryWide'); break;
         case (i===5 && j===3): key.classList.add('keyboard', 'spacebar'); break;
         case (i===5 && j===4): key.classList.add('keyboard', 'veryWide'); break;
         case (i===5 && j===rows[5].length-1): key.classList.add('keyboard', 'veryWide'); break;
         default: key.classList.add('keyboard', 'standard'); break;
      }
      
      key.textContent = rows[i][j];
      row.appendChild(key);

   }
   keyboard.appendChild(row);
}

function getIndexes(key) {
   if(key === ' ')
      key = 'SPACE';
   else if(key === 'OS')
      key = 'WIN';
   for(let i = 0; i < rows.length; i++){
      if(rows[i].indexOf(key) != -1)
         return [i, rows[i].indexOf(key), 0];
   }
   for(let i = 0; i < rowsAlt.length; i++){
      if(rowsAlt[i].indexOf(key) != -1)
         return [i, rowsAlt[i].indexOf(key), 1];
   }
}

const rowDOM = document.querySelectorAll('.row');
window.addEventListener('keydown', function(event) {
   console.log('\'' + event.key + '\'');
   const key = event.key;
   
   console.log(event.getModifierState(key));
   

   const indexes = getIndexes(key.toUpperCase());
   if(key === 'Shift'){
      for(let i = 0; i < rowsAlt.length; i++){
         for(let j = 0; j < rowsAlt[i].length; j++){
            rowDOM[i].childNodes[j].textContent = rowsAlt[i][j];
         }
      }
   }
   console.log(indexes);
   
   rowDOM[indexes[0]].childNodes[indexes[1]].style.opacity = 0.5;

});

window.addEventListener('keyup', function(event) {
   const key = event.key;
   const indexes = getIndexes(key.toUpperCase());
   if(key === 'Shift'){
      for(let i = 0; i < rowsAlt.length; i++){
         for(let j = 0; j < rowsAlt[i].length; j++){
            rowDOM[i].childNodes[j].textContent = rows[i][j];
         }
      }
   }
   if(event.getModifierState(key)){
      rowDOM[indexes[0]].childNodes[indexes[1]].style.opacity = 0.5;
   }
   if(!event.getModifierState(key)){
      rowDOM[indexes[0]].childNodes[indexes[1]].style.opacity = 1;
   }
});