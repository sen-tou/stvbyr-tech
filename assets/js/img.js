const imgs = document.querySelectorAll('img');

imgs.forEach(img => {
    
    const headerContainer = img.closest('.content-header');
    
    if (headerContainer) {
        img.style.display = 'none';
        headerContainer.style.backgroundImage = 'url("' + (img.currentSrc ? img.currentSrc : img.src) + '")';
    }
});
