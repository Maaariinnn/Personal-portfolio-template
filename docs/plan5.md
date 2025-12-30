# Plan 5 — Reveal Secuencial de Secciones al Hacer Scroll

## Resumen de la Feature

**Objetivo:** Revelar las secciones del sitio de forma progresiva y fluida desde abajo al hacer scroll, mejorando la narrativa visual sin romper el layout ni la accesibilidad.

**Decisión final implementada:**

- Animar directamente cada `<section>` con GSAP + ScrollTrigger.
- Excluir `.hero` del efecto.
- Evitar wrappers internos para mantener HTML limpio.
- Respetar `prefers-reduced-motion`.

---

## Prompt usado con IA

Quiero que cada section se vaya revelando cronológicamente, desde abajo, de forma fluida y suave.

---

## Respuesta inicial de la IA

- Propuesta inicial: animar cada `<section>` con `gsap.from()`.
- Uso de `ScrollTrigger`.
- Respeto por accesibilidad con `prefers-reduced-motion`.

---

## Problemas encontrados

1. Animar la sección completa causaba parpadeos.
2. Usar wrappers internos (`.section-inner`) complicaba el HTML.
3. ScrollTrigger.batch generaba inconsistencias visuales.

---

## Solución final implementada

```js
gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {
  gsap.utils.toArray("section:not(.hero)").forEach((section) => {
    gsap.from(section, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}
```
