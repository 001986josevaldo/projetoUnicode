let indiceSlide = 0;
let intervalo;

document.addEventListener("DOMContentLoaded", function () {
  mostrarSlide(indiceSlide);
  iniciarRotacao();
});

function mostrarSlide(n) {
  const slides = document.querySelectorAll(".slides");
  const bolinhas = document.querySelectorAll(".bolinha");

  slides.forEach(slide => slide.classList.remove("ativo"));
  bolinhas.forEach(bolinha => bolinha.classList.remove("ativa"));

  if (n >= slides.length) indiceSlide = 0;
  if (n < 0) indiceSlide = slides.length - 1;

  slides[indiceSlide].classList.add("ativo");
  bolinhas[indiceSlide].classList.add("ativa");
}

function mudarSlide(n) {
  indiceSlide += n;
  mostrarSlide(indiceSlide);
  reiniciarRotacao();
}

function irParaSlide(n) {
  indiceSlide = n;
  mostrarSlide(indiceSlide);
  reiniciarRotacao();
}

function iniciarRotacao() {
  intervalo = setInterval(() => {
    indiceSlide++;
    mostrarSlide(indiceSlide);
  }, 5000);
}

function reiniciarRotacao() {
  clearInterval(intervalo);
  iniciarRotacao();
}
