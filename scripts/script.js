const menuIcon = document.querySelector(".menuIcon");
const cancelIcon = document.querySelector(".material-symbols-outlined");
const sideBar = document.querySelector(".sideBar");

menuIcon.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

cancelIcon.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
