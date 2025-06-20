document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nome = document.getElementById("nomeCompleto");
  const curso = document.getElementById("curso");
  const email = document.getElementById("emailInstitucional");

  function mostrarErro(campo, mensagem) {
    let erro = campo.nextElementSibling;
    if (!erro || !erro.classList.contains("erro")) {
      erro = document.createElement("span");
      erro.className = "erro";
      erro.style.color = "red";
      erro.style.fontSize = "0.9em";
      campo.parentNode.appendChild(erro);
    }
    erro.textContent = mensagem;
  }

  function limparErro(campo) {
    const erro = campo.parentNode.querySelector(".erro");
    if (erro) erro.remove();
  }

  function validarNome() {
    if (nome.value.trim() === "") {
      mostrarErro(nome, "Por favor, preencha seu nome completo.");
      return false;
    }
    limparErro(nome);
    return true;
  }

  function validarCurso() {
    if (curso.value.trim() === "") {
      mostrarErro(curso, "Por favor, informe seu curso.");
      return false;
    }
    limparErro(curso);
    return true;
  }

  function validarEmail() {
    const emailVal = email.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(emailVal)) {
      mostrarErro(email, "Informe um e-mail institucional válido.");
      return false;
    }
    limparErro(email);
    return true;
  }

  // Validação em tempo real
  nome.addEventListener("input", validarNome);
  curso.addEventListener("input", validarCurso);
  email.addEventListener("input", validarEmail);

  // Validação ao enviar o formulário
  form.addEventListener("submit", function (event) {
    const valido =
      validarNome() && validarCurso() && validarEmail();

    if (!valido) {
      event.preventDefault(); // Impede o envio do formulário
    }
  });
});
