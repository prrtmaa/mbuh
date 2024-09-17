const navbarNav=document.querySelector(".navbar-nav");
document.querySelector("#hamberger-menu").onclick=()=> {
  navbarNav.classList.toggle("active");
};

const hamberger=document.queryselector("#hamberger-menu");

document.addEventListener("click", function(e) {
  if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
