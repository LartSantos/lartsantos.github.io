// ===== 1. Menu hambúrguer =====
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  // Abre ou fecha o menu e avisa o leitor de tela com aria-expanded
  const aberto = menu.classList.toggle("aberto");
  btnMenu.setAttribute("aria-expanded", aberto);
  btnMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

// Fecha o menu depois de clicar em um link (no celular)
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    btnMenu.setAttribute("aria-expanded", "false");
  });
});

// ===== 2. Saudação dinâmica (muda conforme o horário) =====
const hora = new Date().getHours();
let saudacao = "Boa noite!";
if (hora < 12) saudacao = "Bom dia!";
else if (hora < 18) saudacao = "Boa tarde!";
document.getElementById("saudacao").textContent = saudacao + " Eu sou";

// ===== 3. Modo claro / escuro =====
const btnTema = document.getElementById("btnTema");
const html = document.documentElement;

function aplicarTema(tema) {
  if (tema === "claro") {
    html.setAttribute("data-tema", "claro");
    btnTema.textContent = "☀️";
  } else {
    html.removeAttribute("data-tema");
    btnTema.textContent = "🌙";
  }
}

// Lembra a escolha da pessoa (try/catch evita erro se o navegador bloquear)
let temaSalvo = "escuro";
try { temaSalvo = localStorage.getItem("tema") || "escuro"; } catch (e) {}
aplicarTema(temaSalvo);

btnTema.addEventListener("click", () => {
  const novo = html.getAttribute("data-tema") === "claro" ? "escuro" : "claro";
  aplicarTema(novo);
  try { localStorage.setItem("tema", novo); } catch (e) {}
});

// ===== 4. Ano automático no rodapé =====
document.getElementById("ano").textContent = new Date().getFullYear();
