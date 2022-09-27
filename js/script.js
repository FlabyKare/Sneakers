// Preloader

window.onload = function () {
   document.body.classList.add("loaded_hiding");
   window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
   }, 500);
};

// Плавная прогрузка Элементов

function onEntry(entry) {
   entry.forEach((change) => {
      if (change.isIntersecting) {
         change.target.classList.add("element-show");
      }
   });
}

let options = {
   threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
   observer.observe(elm);
}

// Слайдер

$(".sneakers_slider").slick({
   infinite: false,
   slidesToShow: 4,
   slidesToScroll: 2,
   arrows: true,
   dots: true,
   rows: 2,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
         },
      },
      {
         breakpoint: 930,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         },
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
         },
      },
      {
         breakpoint: 655,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
         },
      },
   ],
});

// let sneakersList = document.querySelectorAll(".sneakers_item");

// function popupInnerInfo() {
//    this.addEventListener("click", () => {
//       console.log(this.children[1].id);
//    });
// }

// for (let elemt of sneakersList) {
//    elemt.addEventListener("click", () => console.log(elemt.children[0].id));
// }
