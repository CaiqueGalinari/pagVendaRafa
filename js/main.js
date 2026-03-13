// ==========================================
// 1. LÓGICA DO MODAL (POP-UP DE CHECKOUT)
// ==========================================
const modalOverlay = document.getElementById("checkout-modal");
const closeBtn = document.querySelector(".modal-close-btn");
const iframeCheckout = document.getElementById("kiwify-iframe");
const checkoutButtons = document.querySelectorAll("[data-checkout-btn]");

// Link de pagamento do cliente
const linkKiwify = "https://pay.kiwify.com.br/PLACEHOLDER";

// Função para abrir o modal
if (checkoutButtons.length > 0 && modalOverlay && iframeCheckout) {
  checkoutButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Impede a tela de pular para o topo

      // Injeta o link no iframe apenas no momento do clique para poupar carregamento inicial
      if (
        iframeCheckout.src === "" ||
        iframeCheckout.src.includes("about:blank")
      ) {
        iframeCheckout.src = linkKiwify;
      }

      modalOverlay.classList.add("active");
    });
  });
}

// Fechar o modal ao clicar no botão 'X'
if (closeBtn && modalOverlay) {
  closeBtn.addEventListener("click", function () {
    modalOverlay.classList.remove("active");
  });
}

// Fechar o modal ao clicar no fundo escuro fora do conteúdo
if (modalOverlay) {
  modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });
}

// ==========================================
// 2. EFEITO PARALLAX DO FUNDO
// ==========================================
const bgParallax = document.querySelector(".bg-parallax");

if (bgParallax) {
  window.addEventListener("scroll", () => {
    // Captura o quanto a tela foi rolada para baixo
    const scrollPosition = window.scrollY;

    // Move a imagem de fundo para cima a 40% da velocidade da rolagem (-0.4)
    // O que faz com que a ilusão de profundidade seja criada
    bgParallax.style.transform = `translateY(${-(scrollPosition * 0.15)}px)`;
  });
}
