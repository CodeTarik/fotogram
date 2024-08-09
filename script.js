let photosAdded = false;        //servers as a flag

let photos = [];
    photos.push(
        './img/san-francisco.jpg', 
        './img/colosseum.jpg', 
        './img/bridge-7930004_1280.jpg', 
        './img/tower-103417_1280.jpg'
    );
    render();


function render() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    photos.forEach(photo => {
        let img = document.createElement('img');
        img.src = photo;
        img.alt = 'Photo';
        img.onclick = function(){
            showModal(photo);
        }
        gallery.appendChild(img);
        }
    );
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

document.querySelector('.more_btn').addEventListener('click', () =>  {
    if (!photosAdded){
    photos.push(
        './img/city-4807268_1280.jpg', 
        './img/usa-2661636_1280.jpg',
        './img/ny.jpg',
        './img/bangkok.jpg',
        './img/shang.jpg',
        './img/osaka.jpg',
        './img/bridge.jpg'
    );
    render();
    photosAdded = true;
    }
});


function showModal(photo){
<<<<<<< HEAD
    let modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    modal.style.display = "block";
    modalImg.src = photo;

    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
}

const modal = document.getElementById('myModal');
modal.onclick = function(event) {
    if (event.target !== document.getElementById('img01')) {
        modal.style.display = "none";
    }
}





        
=======
    let modal = document.getElementById('gallery');
    const modalImg = document.getElementById('img01');
    modal.style.display = "block";
    modalImg.src = photo;
    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() { 
    modal.style.display = "none";
    }


const modal = document.getElementById('gallery');
    modal.onclick = function(event) {
    if (event.target !== document.getElementById('img01')) {
    modal.style.display = "none";
    }
    }
    }

>>>>>>> 4151be36028e4d82f56c59730dea415ac93952a4
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        const file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}
includeHTML();

