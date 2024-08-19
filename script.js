let photosAdded = false;  // Flag für das Hinzufügen von Fotos

let photos = [
    './img/san-francisco.jpg', 
    './img/colosseum.jpg', 
    './img/bridge-7930004_1280.jpg', 
    './img/tower-103417_1280.jpg'
];
render();

function render() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    photos.forEach(photo => {
        let img = document.createElement('img');
        img.src = photo;
        img.alt = 'Foto'; // Überlege, beschreibenderen Alt-Text zu verwenden
        img.onclick = () => showModal(photo);
        gallery.appendChild(img);
    });
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

document.querySelector('.more_btn').addEventListener('click', () => {
    if (!photosAdded) {
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

function showModal(photo) {
    // Überprüfen, ob das Modal bereits existiert
    let modal = document.getElementById('myModal');
    if (!modal) {
        modal = createModal();
    }

    const modalImg = document.getElementById('img01');
    modal.style.display = "flex";
    modalImg.src = photo;

    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    prev.onclick = showPrevPhoto;
    next.onclick = showNextPhoto;

}

function createModal() {
    // Modal HTML erstellen
    const modalHTML = `
        <div id="myModal" class="modal" style="display: none;">
            <span class="close">&times;</span>
            <span class="arrow" id="prev">&#10094;</span>
            <img id="img01" class="modal-content" />
            <span class="arrow" id="next">&#10095;</span>
            <div id="caption"></div>
        </div>
    `;

    // Modal zu body hinzufügen
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = modalHTML;
    document.body.appendChild(modalDiv);

    // Modal Klick-Event für Schließen hinzufügen
    const modal = document.getElementById('myModal');
    modal.onclick = function(event) {
        if (event.target !== document.getElementById('img01')) {
            modal.style.display = "none";
        }
    };

    return modal;
}

function showPrevPhoto() {
    currentPhotoIndex = (currentPhotoIndex > 0) ? currentPhotoIndex - 1 : photos.length - 1;
    updateModalImage();
}

function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex < photos.length - 1) ? currentPhotoIndex + 1 : 0;
    updateModalImage();
}

function updateModalImage() {
    const modalImg = document.getElementById('img01');
    modalImg.src = photos[currentPhotoIndex];
}



async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let element of includeElements) {
        const file = element.getAttribute("w3-include-html");
        try {
            let resp = await fetch(file);
            if (resp.ok) {
                element.innerHTML = await resp.text();
            } else {
                element.innerHTML = 'Seite nicht gefunden';
            }
        } catch (error) {
            console.error('Fehler beim Einfügen von HTML:', error);
            element.innerHTML = 'Inhalt konnte nicht geladen werden';
        }
    }
}
includeHTML();