let scrolltop = document.querySelector(".scroll-top");
let skillsSection = document.querySelector(".skills");
let allSpans = document.querySelectorAll(".grid-skills span");
window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 50) {
    allSpans.forEach(function (ele) {
      ele.style.width = ele.dataset.width;
    });
  }
  if (this.scrollY >= 800) {
    scrolltop.classList.add("show");
  } else {
    scrolltop.classList.remove("show");
  }
};

// Validate form
let userName = document.querySelector(".name");
document.forms[0].onsubmit = function (event) {
  let namevalid = false;
  let emailvalid = false;
  if (userName.value !== "") {
    namevalid = true;
  }
  if (userName.value !== "") {
    emailvalid = true;
  }
  if (namevalid === false || emailvalid === false) {
    event.preventDefault();
  }
};

scrolltop.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};
