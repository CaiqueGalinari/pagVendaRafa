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
