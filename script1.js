const inputText = document.querySelector(".inputs input");
const Btn = document.querySelector(".inputs button");
const TextP = document.querySelector(".info-text");
let İnputDeger;

Btn.addEventListener("click", ()=>{
    TextP.style.display = "block";
    TextP.innerHTML = İnputDeger;
});

inputText.addEventListener("keyup", ()=>{
    İnputDeger = inputText.value;
    Btn.classList.add("active");
});
