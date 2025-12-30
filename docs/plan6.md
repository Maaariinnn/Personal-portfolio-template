# Plan 6 — Reveal Secuencial de Social Links desde la Izquierda

## Resumen de la Feature

**Objetivo:** Animar los enlaces sociales para que aparezcan secuencialmente desde la izquierda al hacer scroll, reforzando jerarquía visual y dinamismo.

**Decisión final implementada:**

- Estructura HTML con `<ul>` y `<li>` para control y accesibilidad.
- Animación GSAP con `stagger`.
- Activación mediante ScrollTrigger.
- Respeto a `prefers-reduced-motion`.

---

## Prompt usado con IA

Quiero que cada palabra de los social links aparezca
desde la izquierda en orden al hacer scroll, de manera secuencial.

---

## Respuesta inicial de la IA

- Estructurar HTML con `<ul>` y `<li>`.
- Animar cada `<li>` con GSAP usando `x` y `opacity`.
- Aplicar `stagger` para secuencia fluida.

---

## Solución final implementada

```js
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!prefersReducedMotion) {
    gsap.from(".social-links li", {
      x: -50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".social-links",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }
});
```
