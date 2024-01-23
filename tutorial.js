function alertarRedesSocias() {
    alert("Ainda não está disponível!");
}

const instagram = document.getElementById("instagram");

const twitter = document.getElementById("twitter");

instagram.addEventListener("click", alertarRedesSocias);

twitter.addEventListener("click", alertarRedesSocias);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".parte_direita");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})