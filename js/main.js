const tabItem =document.querySelectorAll(".tabs__btn-item");
const tabContent =document.querySelectorAll(".tabs__contant-item");

tabItem.forEach(function(element){
  element.addEventListener("click", open);
});

function open(evt) {
  const tabTatget=evt.currentTarget;
  const button=tabTatget.dataset.button;

  tabItem.forEach(function(item){
  item.classList.remove("tabs__btn-item--active");
})
tabTatget.classList.add("tabs__btn-item--active");

tabContent.forEach(function(item){
  item.classList.remove("tabs__contant-item-active")
});
document.querySelector(`#${button}`).classList.add
("tabs__contant-item-active");
}

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

