const btnClick = document.querySelector(".btn");
const shareIcons = document.querySelector(".icons-container");

btnClick.addEventListener("click", () =>{
    shareIcons.classList.toggle("active");
    btnClick.classList.toggle("active-btn");
});