// src/utils/tema.js

export function aplicarTemaGuardado() {
  const html = document.documentElement;
  const icono = document.getElementById("theme-icon");
  const tema = localStorage.getItem("tema");

  if (tema === "dark") {
    html.classList.add("dark");
    if (icono) icono.textContent = "🌜";
  } else {
    html.classList.remove("dark");
    if (icono) icono.textContent = "🌞";
  }
}

export function alternarTema() {
  const html = document.documentElement;
  const icono = document.getElementById("theme-icon");
  const isDark = html.classList.contains("dark");

  html.classList.toggle("dark");
  localStorage.setItem("tema", isDark ? "light" : "dark");

  if (icono) {
    icono.textContent = isDark ? "🌞" : "🌜";
  }
}
