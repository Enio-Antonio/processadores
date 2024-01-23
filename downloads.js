"use strict";

function alertarRedesSocias() {
    alert("Ainda não está disponível!");
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

const instagram = document.getElementById("instagram");

const twitter = document.getElementById("twitter");

const intel = document.getElementById("intel");

const amd = document.getElementById("amd");

instagram.addEventListener("click", alertarRedesSocias);

twitter.addEventListener("click", alertarRedesSocias);

intel.addEventListener('click', () => {downloadFile('intel_i9.txt', './intel_i9.txt')});

amd.addEventListener('click', () => {downloadFile('amd_r9', './amd_r9.txt')});


//  Parte do menu dinâmico 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".parte_direita");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})