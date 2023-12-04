// preloader
const preloader = document.getElementById("preloader");
setTimeout(() => {
  preloader.classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 1500);

// NavBar
let label = document.querySelector(".label");
let menu = document.querySelector("#menu");
let open = 0;
let aTags = document.querySelectorAll("#menu li a");
let Nav = document.querySelector("nav");

aTags.forEach((c) => {
  c.addEventListener("click", () => {
    if (open != 0) {
      menu.style.right = "-100%";
      document.body.classList.remove("overflow-y-hidden");
      label.classList.remove("label-switch");
      Nav.classList.add("bg-gredient");
      open--;
    }
  });
});
label.addEventListener("click", () => {
  if (open == 0) {
    menu.style.right = 0;
    document.body.classList.add("overflow-y-hidden");
    label.classList.add("label-switch");
    Nav.classList.remove("bg-gredient");
    open++;
  } else {
    menu.style.right = "-100%";
    document.body.classList.remove("overflow-y-hidden");
    label.classList.remove("label-switch");
    Nav.classList.add("bg-gredient");
    open--;
  }
});

// BackToTop
let toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
});

// Slider
$(".slider-1").slick({
  dots: false,
  infinite: true,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "Linear",
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
        autoplay: true,
        speed: 3000,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        cssEase: "Linear",
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "Linear",
        speed: 1000,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        cssEase: "Linear",
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        cssEase: "Linear",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        cssEase: "Linear",
      },
    },
  ],
});

$(".slider-2").slick({
  autoplay: true,
  centerMode: true,
  centerPadding: "500px",
  slidesToShow: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "270px",
      },
    },

    {
      breakpoint: 992,
      settings: {
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "200px",
      },
    },
    {
      breakpoint: 850,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
});
// Accordion
let box = document.querySelectorAll(".box");
box.forEach((row) => {
  row.addEventListener("click", () => {
    const x = document.querySelector(".active");
    row.classList.toggle("active");
    x && x.classList.remove("active");
  });
});
