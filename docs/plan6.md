# Plan 6 — Social Links Reveal desde la izquierda de forma secuencial"

## Resumen del plan - Prompt

Quiero que cada palabra de los social links aparezca desde la izquierda en orden al hacer scroll, de manera secuencial.

---

## Respuesta inicial de la IA

- Primero sstructuré el HTML correctamente: <ul> conteniendo los <li> con los links dentro de .social-links.
- Usé GSAP con ScrollTrigger para animar cada <li> desde la izquierda con stagger:

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
