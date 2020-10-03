let buttonRight = document.querySelector('.button-right');
let buttonLeft = document.querySelector('.button-left');

let maxScrollLeft = document.querySelector('.stories ul').scrollWidth - document.querySelector('.stories ul').clientWidth;



buttonRight.onclick = function () {
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame(){
        if(pos==50){
            clearInterval(id);
        }
        else{
            pos++;
            document.querySelector('.stories ul').scrollLeft += 5;
        }
        if(document.querySelector('.stories ul').scrollLeft > maxScrollLeft - 25){
            buttonRight.style.display = "none";
        }
    }

    buttonLeft.style.display = "block";


    


};
buttonLeft.onclick = function () {
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame(){
        if(pos==50){
            clearInterval(id);
        }
        else{
            pos++;
            document.querySelector('.stories ul').scrollLeft -= 5;
        }
        if(document.querySelector('.stories ul').scrollLeft < 25){
            buttonLeft.style.display = "none";
        }
        
    }

   
    buttonRight.style.display = "block";

    
};

