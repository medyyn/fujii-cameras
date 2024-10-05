const controlSilver = document.querySelector(".control-silver");
const controlBlack = document.querySelector(".control-black");
const imageSilver = document.querySelector(".image-silver");
const imageBlack = document.querySelector(".image-black");
const imageText = document.querySelector(".content-wrapper h2");
imageSilver.computedStyleMap.display = "none";

controlSilver.addEventListener("click",() =>{
    imageSilver.classList.remove("hidden");
    imageSilver.style.display = "block";
    imageSilver.classList.add("shown");
    imageBlack.classList.add("hidden");
    imageBlack.classList.remove("shown");
    h2.classList.toggle("shown");
});
controlBlack.addEventListener("click", () =>{
    imageSilver.classList.add("hidden");
    imageSilver.classList.remove("shown");
    imageBlack.classList.remove("hidden");
    imageBlack.classList.add("shown");
    h2.classList.toggle("shown");
});