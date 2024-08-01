let photos = [];

window.onload = async function() {
    await includeHTML();
    photos.push(
        './img/san-francisco.jpg', 
        './img/colosseum.jpg', 
        './img/bridge-7930004_1280.jpg', 
        './img/tower-103417_1280.jpg'
    );
    render();
};

function render() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    photos.forEach(photo => {
        let img = document.createElement('img');
        img.src = photo;
        img.alt = 'Photo';
        gallery.appendChild(img);
    });
}

document.querySelector('.more_btn').addEventListener('click', () => {
    photos.push(
        './img/city-4807268_1280.jpg', 
        './img/usa-2661636_1280.jpg'
    );
    render();
});

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

