const symbols = [[33, 48], [58,65], [91,97], [123, 127]];
const numbers = [48,58];
const lettersB = [65, 91];
const lettersS = [97, 123];

const password =  document.querySelector('input[type=text]');
const bt = document.querySelector('#generate');
console.log(bt);

function isSymbol(num) {
    for(let i = 0; i < symbols.length; i++){
        if(num >= symbols[i][0] && num < symbols[i][1])
            return true;
    }
    return false;
}

function isNumber(num) {
    return num >= numbers[0] && num < numbers[1];
}

function isUppercaseLetter(num) {
    return num >= lettersB[0] && num < lettersB[1];
}

function isLowercaseLetter(num) {
    return num >= lettersS[0] && num < lettersS[1];
}

bt.addEventListener('click', function(event) {
    const length = document.querySelector('input[type=number]').value;
    if(length<=0)
        return;
    const all = [];
    const checkboxes = document.querySelectorAll('input[type=checkbox]')

    if(checkboxes[0].checked){
        all.push(isSymbol);
    }
    if(checkboxes[1].checked){
        all.push(isNumber);
    }
    if(checkboxes[2].checked)
        all.push(isUppercaseLetter);
    if(checkboxes[3].checked)
        all.push(isLowercaseLetter);

    if(all.length ===0){
        alert("Please select at least one option");
        return;
    }
    let res = '';
    for(let i = 0; i < length; i++){
        let num = Math.floor(Math.random()*(127-33))+33;
        let is = false;
        for(let i = 0; i < all.length; i++){
            is = is || all[i](num);
        }
        if(is)
            res += String.fromCharCode(num);
        else i--;

        
    }
    password.value = res;
});

const copyBt = document.querySelector('#copy');
copyBt.addEventListener('click', function(){
    password.select();
    password.setSelectionRange(0, 99999);
    document.execCommand("copy");
    bt.focus();
    alert("Copied the text: " + password.value);
});