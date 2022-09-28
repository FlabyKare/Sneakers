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
// Попап

// Убавляем кол-во по клику
$(".quantity_inner .bt_minus").click(function () {
   let $input = $(this).parent().find(".quantity");
   let count = parseInt($input.val()) - 1;
   count = count < 1 ? 1 : count;
   $input.val(count);
});
// Прибавляем кол-во по клику
$(".quantity_inner .bt_plus").click(function () {
   let $input = $(this).parent().find(".quantity");
   let count = parseInt($input.val()) + 1;
   count =
      count > parseInt($input.data("max-count"))
         ? parseInt($input.data("max-count"))
         : count;
   $input.val(parseInt(count));
});
// Убираем все лишнее и невозможное при изменении поля
$(".quantity_inner .quantity").bind("change keyup input click", function () {
   if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, "");
   }
   if (this.value == "") {
      this.value = 1;
   }
   if (this.value > parseInt($(this).data("max-count"))) {
      this.value = parseInt($(this).data("max-count"));
   }
});

const popupBackBlack = document.querySelector(".popup_back_black");
const popup = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popup_wrapper");
const liTitle = document.querySelector(".li_title");
const liSize = document.querySelector(".li_size");
const chooseImg = document.querySelector(".choose_img");
const close = document.querySelector(".close");
const liPrice = document.querySelector(".li_price");

let sneakersList = document.querySelectorAll(".li_container");
let price = document.querySelectorAll(".priceValue");
let sneakers = document.querySelector(".sneakers");

function popupActive() {
   popup.classList.toggle("active");
}
popupBackBlack.addEventListener("click", () => {
   popupActive();
});
close.addEventListener("click", () => {
   popupActive();
});
for (let elemt of sneakersList) {
   elemt.children[4].addEventListener("click", () => {
      popupActive();
      liTitle.innerHTML = elemt.children[1].innerHTML;
      liSize.innerHTML = elemt.children[2].innerHTML;
      chooseImg.src = elemt.children[0].src;
      liPrice.innerHTML = elemt.children[3].innerHTML;











      
    //   chooseImg.addEventListener("click", () => {
    //      liPrice.innerHTML = `Price:<span> $<span class="priceValue">${
    //         +liPrice.innerHTML * 2
    //      }</span></span>`;

    //      console.log(liPrice.innerHTML);
    //   });
   });
}
let button = document.querySelectorAll(".choose_img");
let priceValue = document.querySelectorAll(".priceValue");

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

// Отправка сообщений на почту

//E-mail Ajax Send
$("form").submit(function () {
   //Change
   var th = $(this);
   $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
   }).done(function () {
      window.location.href = "pages/thanks.html";

      setTimeout(function () {
         // Done Functions
         th.window.location.href = "../index.html";
      }, 9000);
   });
   return false;
});
