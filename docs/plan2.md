# Plan X — Efecto Scroll Reveal de Texto en "About Me"

## Resumen del plan - Prompt

Quiero crear un efecto en el que al hacer scroll, en la sección de About Me, específicamente el `description-about-me`, se vaya revelando palabra por palabra. Por ejemplo, está todo en gris clarito, y a medida que voy haciendo scroll el texto pasa a ser blanco palabra por palabra. (Aquí le introduje todo mi HTML)

---

## Respuesta inicial de la IA

La IA propuso un enfoque completo utilizando **GSAP + ScrollTrigger**:

- Detectar `prefers-reduced-motion` para accesibilidad.
- Dividir el texto en palabras mediante JS (`span.word`).
- Aplicar CSS inicial gris claro y usar `transition` en `color`.
- Crear animación con GSAP que, al hacer scroll, cambia el color palabra por palabra a blanco.
- Ejemplo de JS:

```js
if (!prefersReducedMotion) {
  const words = document.querySelectorAll(".description-about-me .word");

  gsap.to(words, {
    color: "#ffffff",
    ease: "none",
    stagger: { each: 0.05 },
    scrollTrigger: {
      trigger: ".description-about-me",
      start: "top 70%",
      end: "bottom 40%",
      scrub: true
    }
  });
}

.description-about-me span.word {
  color: rgba(255,255,255,0.35);
  transition: color 0.2s linear;
  will-change: color;
}



- Esto daba algunos problemas sobre todo porque el texto se me descolocaba.
- Este fue la solucion:
    - white-space: pre mantiene exactamente los espacios
    - inline-block
    - function splitTextIntoWords(element) {
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

- Para modificar la velocidad del revelado, jugué con el valor de:
 stagger: {
      each: 0.05,
    },

-----

## Implementación final
if (!prefersReducedMotion) {
  const words = document.querySelectorAll(".description-about-me .word");

  gsap.to(words, {
    color: "#ffffff",
    ease: "none",
    stagger: {
      each: 0.05,
    },
    scrollTrigger: {
      trigger: ".description-about-me",
      start: "top 70%",
      end: "bottom 40%",
      scrub: true,
    },
  });
} else {
  // Si reduce motion → texto normal
  document.querySelectorAll(".description-about-me .word").forEach((word) => {
    word.style.color = "#ffffff";
  });
}

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

if (!prefersReducedMotion) {
  const words = document.querySelectorAll(".description-about-me .word");

  gsap.to(words, {
    color: "#ffffff",
    ease: "none",
    stagger: {
      each: 0.15,
    },
    scrollTrigger: {
      trigger: ".description-about-me",
      start: "top 70%",
      end: "bottom 40%",
      scrub: true,
    },
  });
} else {
  document.querySelectorAll(".description-about-me .word").forEach((word) => {
    word.style.color = "#ffffff";
  });
}
```
