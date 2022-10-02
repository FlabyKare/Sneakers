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
const liTitle = document.querySelector(".li_title");
const liSize = document.querySelector(".li_size");
const chooseImg = document.querySelector(".choose_img");
const close = document.querySelector(".close");
const liPrice = document.querySelector(".li_price");
let bodyWidth = document.body.clientWidth;
const name = document.querySelector(".form_name");
const phone = document.querySelector(".form_tel");
const email = document.querySelector(".form_site");
const adress = document.querySelector(".form_adress");

let sneakersList = document.querySelectorAll(".li_container");
let price = document.querySelectorAll(".priceValue");
let sneakers = document.querySelector(".sneakers");
let inputCounter = document.querySelector(".quantity"),
   pricePopup = popup.querySelector(".priceValue");

if (bodyWidth < 576) {
   email.placeholder = "Мессенджер";
   adress.placeholder = "Ваш адресс (по г.Нальчик)";
}
function popupActive() {
   popup.classList.toggle("active");
}
popupBackBlack.addEventListener("click", () => {
   inputCounter.value = 1;

   popupActive();
});
close.addEventListener("click", () => {
   inputCounter.value = 1;
   popupActive();
});

// New code
let btnBuy = document.querySelectorAll("._js-btn-buy");

btnBuy.forEach((btn) => {
   btn.addEventListener("click", () => {
      generatePopup(btn.closest(".sneakers_item"));
      popupActive();
   });
});

function generatePopup(productHTML) {
   const title = productHTML.querySelector(".li_title").textContent,
      size = productHTML.querySelector(".li_size span").textContent,
      price = productHTML.querySelector(".priceValue").textContent,
      img = productHTML.querySelector("img").cloneNode();

   popup.querySelector(".li_title").value = title;
   popup.querySelector(".li_size").value = size;
   popup.querySelector(".li_price .priceValue").value = price;
   popup.querySelector(".li_price .priceValue").dataset.price = price;
   popup.querySelector(".choose_img").src = img.src;

   console.log(title, size, price, img);
}
function plus() {
   let price = pricePopup.dataset.price;
   inputCounter.value = +inputCounter.value + 1;
   pricePopup.value = price * +inputCounter.value + " рублей";
}
function minus() {
   let price = pricePopup.dataset.price;
   if (+inputCounter.value > 1) {
      inputCounter.value = +inputCounter.value - 1;
   }
   pricePopup.value = price * +inputCounter.value + " рублей";
}

// Отправка формы

// маска ввода телефона

window.addEventListener("DOMContentLoaded", function () {
   [].forEach.call(document.querySelectorAll(".tel"), function (input) {
      var keyCode;
      function mask(event) {
         event.keyCode && (keyCode = event.keyCode);
         var pos = this.selectionStart;
         if (pos < 3) event.preventDefault();
         var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
               return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
         i = new_value.indexOf("_");
         if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i);
         }
         var reg = matrix
            .substr(0, this.value.length)
            .replace(/_+/g, function (a) {
               return "\\d{1," + a.length + "}";
            })
            .replace(/[+()]/g, "\\$&");
         reg = new RegExp("^" + reg + "$");
         if (
            !reg.test(this.value) ||
            this.value.length < 5 ||
            (keyCode > 47 && keyCode < 58)
         )
            this.value = new_value;
         if (event.type == "blur" && this.value.length < 17) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
   });
});
