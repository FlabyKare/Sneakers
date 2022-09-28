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
const popupBackBlack = document.querySelector(".popup_back_black");
const popup = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popup_wrapper");
const close = document.querySelector(".close");

function popupActive() {
   popup.classList.toggle("active");
}
popupBackBlack.addEventListener("click", () => {
   popupActive();
});
close.addEventListener("click", () => {
   popupActive();
});

let sneakersList = document.querySelectorAll(".li_container");
let price = document.querySelectorAll(".priceValue");
let sneakers = document.querySelector(".sneakers");
for (let elemt of sneakersList) {
   elemt.children[4].addEventListener("click", () => {
      popupActive();
      popupWrapper.children[2].innerHTML = elemt.children[1].innerHTML;
      popupWrapper.children[3].innerHTML = elemt.children[2].innerHTML;
      popupWrapper.children[4].src = elemt.children[0].src;
      popupWrapper.children[5].innerHTML = elemt.children[3].innerHTML;
      popupWrapper.children[4].addEventListener("click", () => {
         document.querySelectorAll(".choose_img").forEach((btn) =>
            btn.addEventListener("click", () => {
               const priceValue = btn
                  .closest(".popup_wrapper")
                  .querySelector(".priceValue");
               popupWrapper.children[5].innerHTML = `Price:<span> $<span class="priceValue">${(popupWrapper.children[5].innerHTML =
                  +priceValue.textContent * 2)}</span></span>`;
               console.log(popupWrapper.children[5].innerHTML);
            })
         );
      });
   });
   elemt.children[0].addEventListener("click", () => {
      popupActive();
      popupWrapper.children[2].innerHTML = elemt.children[1].innerHTML;
      popupWrapper.children[3].innerHTML = elemt.children[2].innerHTML;
      popupWrapper.children[4].src = elemt.children[0].src;
      popupWrapper.children[5].innerHTML = elemt.children[3].innerHTML;
      popupWrapper.children[4].addEventListener("click", () => {
         document.querySelectorAll(".choose_img").forEach((btn) =>
            btn.addEventListener("click", () => {
               const priceValue = btn
                  .closest(".popup_wrapper")
                  .querySelector(".priceValue");
               popupWrapper.children[5].innerHTML = `Price:<span> $<span class="priceValue">${(+priceValue.textContent * 2)}</span></span>`;
               console.log(popupWrapper.children[5].innerHTML);
            })
         );
      });
   });
}
// sneakers.children[1].innerHTML = elemt.children[1].innerHTML;
function priceDouble() {
   document.querySelectorAll(".btn_form .btn").forEach((btn) =>
      btn.addEventListener("click", () => {
         const priceValue = btn
            .closest(".li_container")
            .querySelector(".priceValue");
         console.log(+priceValue.textContent * 2);
      })
   );
}
