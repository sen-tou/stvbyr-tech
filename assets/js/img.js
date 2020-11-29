const imgs = document.querySelectorAll('img');

imgs.forEach(img => {
    
    const headerContainer = img.closest('.content-header');
    img.style.display = 'none';
    if (headerContainer) {
        headerContainer.style.backgroundImage = 'url("' + (img.currentSrc ? img.currentSrc : img.src) + '")';
    }
});
