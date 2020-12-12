document.addEventListener('DOMContentLoaded', () => {
    const headerImg = document.querySelector('#header-img');
    const headerContainer = headerImg.closest('header');
    if (headerContainer) {
        headerImg.style.display = 'none';
        headerContainer.style.backgroundImage = 'url("' + (headerImg.currentSrc ? headerImg.currentSrc : headerImg.src) + '")';
    }
});
