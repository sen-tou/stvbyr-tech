document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('#toggle-main-menu');
    const menu = document.querySelector('#main-menu');
    const onSvg = toggleButton.querySelector('svg:first-of-type');
    const offSvg = toggleButton.querySelector('svg:nth-of-type(2)');

    toggleButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(onSvg.classList);
        onSvg.classList.toggle('block');
        onSvg.classList.toggle('hidden');

        offSvg.classList.toggle('block');
        offSvg.classList.toggle('hidden');

        menu.classList.toggle('block');
        menu.classList.toggle('hidden');
    });
});
