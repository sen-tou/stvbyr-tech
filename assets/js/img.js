document.addEventListener('DOMContentLoaded', () => {
    // home header
    const image = document.querySelector('#home-header picture img');
    const container = document.querySelector('#home-header');

    substituteImageForBackground(image, container);
});

function substituteImageForBackground(image, container) {
    if(!image || !container) {
        return;
    }
    const setCurrentSrc = () => {
        image.style.display = 'none';
        container.style.backgroundImage = `url("${
            image.currentSrc ? image.currentSrc : image.src
        }")`;
    };

    setCurrentSrc();
    image.addEventListener('load', setCurrentSrc);
}
