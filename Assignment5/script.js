let x0 = null;
const imgs = document.querySelectorAll('img');
const div = document.createElement('div');
div.classList.add('modal');
div.classList.toggle('hidden');

function pointerMove(event, i) {
    const delta = event.clientX - x0;
    console.log(delta)
    const div = document.querySelector('.modal');
    const img = document.createElement('img'); 
    if (delta < -50 && i + 1 < imgs.length) {
        div.innerHTML = '';
        img.src = imgs[++i].src;
        img.classList.add('toLeft');
        img.classList.add('modal-picture');
        div.appendChild(img);
        img.addEventListener('pointerdown', function(event) {
            event.preventDefault();
            event.stopPropagation();
            x0 = event.clientX; 
            event.target.setPointerCapture(event.pointerId);

        });
        img.addEventListener('pointermove', function(event) {
            console.log('begin');
            if(x0){
                console.log('end');
                const delta = event.clientX - x0;
                const element = event.currentTarget;
                element.style.transform = 'translateX(' + delta + 'px)';
            }
        });
        img.addEventListener('pointerup', function(event){
            pointerMove(event, i);
        });
    }
    else if (delta > 50 && i - 1 >= 0) {
        div.innerHTML = '';
        img.src = imgs[--i].src;
        img.classList.add('toRight');
        img.classList.add('modal-picture');
        div.appendChild(img);
        img.addEventListener('pointerdown', function(event) {
            event.preventDefault();
            event.stopPropagation();
            x0 = event.clientX; 
        });
        img.addEventListener('pointermove', function(event) {
            console.log('begin');
            if(x0){
                console.log('end');
                const delta = event.clientX - x0;
                const element = event.currentTarget;
                element.style.transform = 'translateX(' + delta + 'px)';
            }
        });
        img.addEventListener('pointerup', function(event){
            pointerMove(event, i);
        });
    }
    x0 = null;
    
}

function enlarge(event, i) {
    x0=null;
    document.body.style.overflow = 'hidden';
    const img = document.createElement('img');
    img.classList.add('appearance');
    img.classList.add('modal-picture');
    img.src = event.currentTarget.src;
    div.classList.remove('hidden');
    div.appendChild(img);

    img.addEventListener('pointerdown', function(event) {
        event.preventDefault();
        event.stopPropagation();
        x0 = event.clientX; 
     });
     img.addEventListener('pointermove', function(event) {
        console.log('begin');
        if(x0){
            console.log('end');
            const delta = event.clientX - x0;
            const element = event.currentTarget;
            element.style.transform = 'translateX(' + delta + 'px)';
        }
    });
    img.addEventListener('pointerup', function(event){
         pointerMove(event, i);
    });

    document.body.appendChild(div);
    div.addEventListener('mousedown', function () {
        document.body.style.overflow = 'auto';
        div.classList.add('hidden');
        div.innerHTML = '';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            if (i + 1 < imgs.length) {
                div.removeChild(img);
                img.classList = '';
                img.src = imgs[++i].src;
                img.classList.add('toLeft');
                img.classList.add('modal-picture');
                div.appendChild(img);

            }
        }
        else if (event.key === 'ArrowLeft') {
            if (i - 1 >= 0) {
                div.removeChild(img);
                img.classList = '';
                img.src = imgs[--i].src;
                img.classList.add('toRight');
                img.classList.add('modal-picture');
                div.appendChild(img);
            }
        }
        x0 = null;
        img.addEventListener('pointerdown', function(event) {
            event.preventDefault();
            event.stopPropagation();
            x0 = event.clientX; 
            event.target.setPointerCapture(event.pointerId);
        });
        img.addEventListener('pointermove', function(event) {
            console.log('begin');
            if(x0){
                console.log('end');
                const delta = event.clientX - x0;
                const element = event.currentTarget;
                element.style.transform = 'translateX(' + delta + 'px)';
            }
        });
        img.addEventListener('pointerup', function(event){
            pointerMove(event, i);
        });
    });

    
}


for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (event) {
        enlarge(event, i);
    });
}   