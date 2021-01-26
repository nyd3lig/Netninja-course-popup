const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close")

button.addEventListener("click", () => {
    popup.style.display = "block";
})

popup.addEventListener("click", (e) => {
    console.log(e.target.getAttribute("class"))
    if(e.target.getAttribute("class") === "popup-wrapper" || e.target.getAttribute("class") === "popup-close"){
        popup.style.display = "none";
    }
})