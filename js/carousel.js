// const track = document.querySelector('.carousel__track');
// const slides = Array.from(track.children);
// const nextButton = document.querySelector('.section__carousel__button--right');
// const prevButton = document.querySelector('.section__carousel__button--left');
// const dotsNav = document.querySelector('.carousel__nav');
// const dots = Array.from(dotsNav.children);

// const slideWidth = slides[1].getBoundingClientRect().width;

// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// }

// slides.forEach(setSlidePosition);

// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//     currentSlide.classList.remove('current__slide');
//     targetSlide.classList.add('current__slide');
// }

// const updateDots = (currentDot, targetDot) => {
//     currentDot.classList.remove('current__slide');
//     targetDot.classList.add('current__slide');
// }

// const hideShowArrows = (targetIndex, prevButton, nextButton) => {
//     if(targetIndex === 0) {
//         prevButton.classList.add('is__hidden');
//         nextButton.classList.remove('is__hidden');
//     }else if(targetIndex === slides.length - 1) {
//         prevButton.classList.remove('is__hidden');
//         nextButton.classList.add('is__hidden');
//     }else {
//         prevButton.classList.remove('is__hidden');
//         nextButton.classList.remove('is__hidden');
//     }
// }

// nextButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current__slide');
//     const nextSlide = currentSlide.nextElementSibling;
//     const currentDot = dotsNav.querySelector('.current__slide');
//     const nextDot = currentDot.nextElementSibling;
//     const nextIndex = slides.findIndex(slide => slide === nextSlide);
//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);
//     hideShowArrows(nextIndex, prevButton, nextButton);
// })

// prevButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current__slide');
//     const previousSlide = currentSlide.previousElementSibling
//     const currentDot = dotsNav.querySelector('.current__slide');
//     const nextDot = currentDot.previousElementSibling;
//     const previousIndex = slides.findIndex(slide => slide === previousSlide);
//     moveToSlide(track, currentSlide, previousSlide);
//     updateDots(currentDot, nextDot);
//     hideShowArrows(previousIndex, prevButton, nextButton);
// })

// dotsNav.addEventListener('click', e => {
//     const targetDot = e.target.closest('button');
//     if(!targetDot) return;

//     const currentSlide = track.querySelector('.current__slide');
//     const currentDot = dotsNav.querySelector('.current__slide');
//     const targetIndex = dots.findIndex(dot => dot === targetDot);
//     const targetSlide = slides[targetIndex];

//     moveToSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot);
//     hideShowArrows(targetIndex, prevButton, nextButton);

// })
