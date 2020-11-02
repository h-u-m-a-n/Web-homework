
function enlarge(event, i) {
    document.body.style.overflow = 'hidden';
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.classList.add('appearance');
    img.style.touchAction = 'none';
    img.src = event.currentTarget.src;
    img.style.backgroundColor = "#fff";
    div.style.touchAction = 'none';
    div.style.position = 'absolute';
    div.style.top = scrollY + 'px';
    div.style.left = '0';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.backgroundColor = 'rgba(0,0,0, 0.91)';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.appendChild(img);



    document.body.appendChild(div);
    div.addEventListener('click', function () {
        document.body.style.overflow = 'auto';
        document.body.removeChild(div);
    });

    document.addEventListener('keydown', function (event) {
        const imgs = document.querySelectorAll('img');
        if (event.key === 'ArrowRight') {
            if (i + 1 < imgs.length) {
                div.removeChild(img);
                img.src = imgs[++i].src;
                img.classList.add('toRight');
                div.appendChild(img);

            }
        }
        else if (event.key === 'ArrowLeft') {
            if (i - 1 >= 0) {
                div.removeChild(img);
                img.src = imgs[--i].src;
                img.classList.add('toLeft');
                div.appendChild(img);
            }
        }

    })
}


const imgs = document.querySelectorAll('img');
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (event) {
        enlarge(event, i);
    });
}   