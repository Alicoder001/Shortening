let toggle = document.querySelector(".header__toggle");
let nav = document.querySelector(".header__nav");
toggle.addEventListener("click", () => {
	nav.classList.toggle("scroll");
});
