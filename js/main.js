// 1. CRONÔMETRO
const timerElement = document.querySelector(".top-bar-timer strong");
let tempoRestante = 23 * 3600 + 59 * 60 + 59;

function atualizarCronometro() {
  const horas = Math.floor(tempoRestante / 3600);
  const minutos = Math.floor((tempoRestante % 3600) / 60);
  const segundos = tempoRestante % 60;

  const h = String(horas).padStart(2, "0");
  const m = String(minutos).padStart(2, "0");
  const s = String(segundos).padStart(2, "0");

  if (timerElement) {
    if (tempoRestante > 0) {
      timerElement.innerText = `${h}h : ${m}m : ${s}s`;
      tempoRestante--;
    } else {
      timerElement.parentElement.innerText = "OFERTA EXPIRADA!";
    }
  }
}

atualizarCronometro();
setInterval(atualizarCronometro, 1000);

// 2. LÓGICA DO MODAL (POP-UP)
const modalOverlay = document.getElementById("checkout-modal");
const closeBtn = document.querySelector(".modal-close-btn");
const iframeCheckout = document.getElementById("kiwify-iframe");
// Seleciona todos os botões que possuem o atributo data-checkout-btn
const checkoutButtons = document.querySelectorAll("[data-checkout-btn]");

// Insira o link real do Kiwify do cliente aqui
const linkKiwify = "https://pay.kiwify.com.br/PLACEHOLDER";

// Adiciona o evento de clique em todos os botões da página
checkoutButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Impede que o navegador siga o href="#"

    // Injeta o link no iframe apenas quando a pessoa clica para abrir
    if (
      iframeCheckout.src === "" ||
      iframeCheckout.src.includes("about:blank")
    ) {
      iframeCheckout.src = linkKiwify;
    }

    // Adiciona a classe que torna o modal visível
    modalOverlay.classList.add("active");
  });
});

// Fechar o Modal clicando no X
closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});

// Fechar o Modal clicando no fundo escuro fora do quadrado branco
modalOverlay.addEventListener("click", function (event) {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});
