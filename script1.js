const inputText = document.querySelector(".inputs input");
const Btn = document.querySelector(".inputs button");
const TextP = document.querySelector(".info-text");
let İnputDeger;

inputText.addEventListener("keyup", ()=>{
    İnputDeger = inputText.value;
    Btn.classList.add("active");
});

Btn.addEventListener("click", ()=>{
    let reverseİnput = İnputDeger.split("").reverse().join("");
    TextP.style.display = "block";
    TextP.innerHTML = İnputDeger +" - "+ reverseİnput;
});
