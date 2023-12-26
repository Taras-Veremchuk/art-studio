const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider-image');
const bottom = document.querySelector('.bottom');

let slideNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement('div');
  div.className = 'slider-button';
  bottom.append(div);
}

const buttons = document.querySelectorAll('.slider-button');
buttons[0].style.backgroundColor = '#ECB6B6';

const resetBg = () => {
  buttons.forEach(button => {
    button.style.backgroundColor = 'transparent';
  });
};

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    resetBg();
    slider.style.transform = `translateX(-${index * 800}px)`;
    slideNumber = index +1;
    button.style.backgroundColor = '#ECB6B6';
  });
});


const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber += 1;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumber = length;
};

const changeColor = ()=>{
  resetBg()
  buttons[slideNumber -1].style.backgroundColor = '#ECB6B6';
}

right.addEventListener('click', () => {
  if (slideNumber < length) {
    nextSlide();
  } else {
    getFirstSlide();
  }
 changeColor()
});

left.addEventListener('click', () => {
  if (slideNumber > 1) {
    prevSlide();
  } else {
    getLastSlide();
  }
 changeColor()
});


// OLD SLIDER

// console.log("Slider script")
// $(document).ready(function () {
//   $('.slick-carousel').slick({
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     // autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           infinite: true,
//           arrows: true,
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           infinite: true,
//           arrows: true,
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });
// });
