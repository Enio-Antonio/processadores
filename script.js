"use strict";

function alertarRedesSocias() {
    alert("Ainda não está disponível!");
}

function alertarTrouxa() {
     alert("Trouxa");
}

function downloadFile(filename, url) {
    let element = document.createElement('a');
    element.setAttribute('href', url);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

const botaoDownload = document.getElementById("download");

const instagram = document.getElementById("instagram");

const twitter = document.getElementById("twitter");

botaoDownload.addEventListener("click",() => {downloadFile('intel_i9.txt', './intel_i9.txt')});

instagram.addEventListener("click", alertarRedesSocias);

twitter.addEventListener("click", alertarRedesSocias);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".parte_direita");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})