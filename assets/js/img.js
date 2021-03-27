// document.addEventListener('DOMContentLoaded', () => {
//     const headerImgs = document.querySelectorAll('header img:first-of-type');

//     headerImgs.forEach((headerImg) => {
//         const headerContainer = headerImg.closest('header');

//         const setCurrentSrc = function () {
//             if (headerContainer) {
//                 headerImg.style.display = 'none';
//                 headerContainer.style.backgroundImage =
//                     'url("' +
//                     (headerImg.currentSrc
//                         ? headerImg.currentSrc
//                         : headerImg.src) +
//                     '")';
//             }
//         };

//         setCurrentSrc();
//         headerImg.addEventListener('load', setCurrentSrc);
//     });
// });
