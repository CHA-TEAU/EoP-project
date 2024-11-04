const overlay = document.getElementById('overlay');
const additionalInfo = document.getElementById('infoContent');
const infoText = document.getElementById('info-text');
const infoImage = document.getElementById('info-image');



function showInfo(info, image) {
    infoText.innerHTML = `<p>${info}</p>`;
    infoImage.src = image; 
    overlay.classList.remove('hidden'); 
}


document.querySelectorAll('.tile__card').forEach(card => {
    card.addEventListener('click', function() {
        const info = this.getAttribute('data-info'); 
        const image = this.getAttribute('data-image'); 
        showInfo(info, image);
    });
});

overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
        overlay.classList.add('hidden'); 
    }
});