# Plan 2 — Efecto Scroll Reveal de Texto en "About Me"

## Resumen de la Feature

**Objetivo:** Revelar el texto de la sección "About Me" palabra por palabra a medida que el usuario hace scroll, pasando de gris claro a blanco, respetando accesibilidad (`prefers-reduced-motion`).

**Decisión final implementada:**

- Uso de **GSAP + ScrollTrigger**
- Texto dividido en `<span>` por palabra mediante JS (`splitTextIntoWords`)
- Animación con `stagger` de 0.15 segundos
- Compatibilidad con usuarios que prefieren reducir movimiento: el texto aparece directamente blanco.
- CSS mantiene espacios y posición (`white-space: pre; display: inline-block`)

---

## Prompt usado con IA

Quiero crear un efecto en el que al hacer scroll, en la sección de About Me (description-about-me), el texto se vaya revelando palabra por palabra. Inicialmente gris claro y a medida que hago scroll se vuelve blanco. HTML ya está definido. Incluye accesibilidad y smooth animation.

---

---

## Respuesta inicial de la IA

- Detectar `prefers-reduced-motion` para accesibilidad.
- Dividir texto en palabras mediante JS (`span.word`).
- Aplicar CSS inicial: color gris claro, transición suave en color.
- Crear animación con **GSAP** que cambia color palabra por palabra al hacer scroll.
- Propuesta de stagger: 0.05 a 0.15 seg.
- Problemas detectados: texto se descolocaba sin `white-space: pre` y `display: inline-block`.

---

## Problemas encontrados

1. El texto se descolocaba al dividirlo en spans.
2. La velocidad del revelado no era visualmente óptima con el primer valor de `stagger`.

---

## Solución final implementada

```js
// Detecta usuarios con preferencia de reducir movimiento
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Función para dividir texto en palabras
function splitTextIntoWords(element) {
  const text = element.textContent;
  element.textContent = "";

  text.split(/(\s+)/).forEach((token) => {
    if (token.trim() === "") {
      element.appendChild(document.createTextNode(token));
    } else {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = token;
      element.appendChild(span);
    }
  });
}

// Inicialización del efecto scroll
document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".description-about-me");
  splitTextIntoWords(element);

  if (!prefersReducedMotion) {
    const words = document.querySelectorAll(".description-about-me .word");
    gsap.to(words, {
      color: "#ffffff",
      ease: "none",
      stagger: { each: 0.15 },
      scrollTrigger: {
        trigger: ".description-about-me",
        start: "top 70%",
        end: "bottom 40%",
        scrub: true,
      },
    });
  } else {
    // Si reduce motion → texto aparece directamente blanco
    document.querySelectorAll(".description-about-me .word").forEach((word) => {
      word.style.color = "#ffffff";
    });
  }
});
```
