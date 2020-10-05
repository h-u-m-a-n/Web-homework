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

let followButs = document.getElementsByClassName("button");

for(let i = 0; i < followButs.length; i++) {

    followButs[i].addEventListener("click", 
    function() {
        followButs[i].style.color = "black";
        followButs[i].innerHTML = "Following";
        followButs[i].style.fontWeight = "600";
    });
}

//clone

// let article = document.querySelector(".posts");


// let doc = document.documentElement;
// let pos = 0;
// let pos1 = 25;
// window.onscroll = function(){
//     let clone = article.cloneNode(true);
//     pos1 = doc.scrollTop;
//     console.log(pos);
    
//     console.log("pos1="+pos1);
//     if(pos1-pos > 1000){
//         article.after(clone);
//         pos = doc.scrollTop;
        
//     }
    
// }

let article = document.querySelector(".posts");


let doc = document.documentElement;

window.onscroll = function(){
    let clone = article.cloneNode(true);
    let max = document.documentElement.scrollHeight;
    let pos = document.documentElement.scrollTop;
    console.log(max);
    console.log("pos = "  + pos);
    
    if(max < 15000 && max - pos < 800){
        article.after(clone);
        pos = doc.scrollTop;
        
    }
    
}