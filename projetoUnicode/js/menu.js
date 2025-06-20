document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("ativo");
    }
  });
});

// Botão "voltar ao topo"
document.addEventListener("DOMContentLoaded", function () {
  const btnTopo = document.getElementById("btnTopo");

  window.addEventListener("scroll", () => {
    // Mostrar botão após 25% da altura da página
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    btnTopo.style.display = scrollPercent > 0.25 ? "block" : "none";
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});