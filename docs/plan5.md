# Plan 5 — Sections Reveal"

## Resumen del plan - Prompt

Quiero que cada section se vaya revelando cronológicamente, desde abajo, de forma fluida y suave.

---

## Respuesta inicial de la IA

1️⃣ HTML
No tienes que tocar nada. Solo asegúrate de que tus secciones son <section>:

<section class="section">
  ...
</section>
(O puedes usar directamente section sin clase.)
2️⃣ CSS base (muy importante)
section {
  will-change: transform, opacity;
}
No ocultes nada con CSS: GSAP se encarga.
3️⃣ JS — Reveal desde abajo
gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
"(prefers-reduced-motion: reduce)"
).matches;

function initSectionReveal() {
const sections = document.querySelectorAll("section");

if (prefersReducedMotion) return;

sections.forEach((section) => {
gsap.from(section, {
y: 60,
opacity: 0,
duration: 0.9,
ease: "power3.out",
scrollTrigger: {
trigger: section,
start: "top 85%",
toggleActions: "play none none none",
},
});
});
}

document.addEventListener("DOMContentLoaded", initSectionReveal);
🎯 Qué hace exactamente
y: 60 → aparece desde abajo
opacity: 0 → 1 → fade suave
start: "top 85%" → entra antes de que toque el centro
Se ejecuta una sola vez
Respeta accesibilidad (prefers-reduced-motion)

- Sin embargo, al realizar esto, el revelado funcionaba correctamente pero, el fondo se veía blanco. La solución que me dio fue,
  👉 NO animar la sección entera
  👉 Animar el contenido interno
  La sección se queda fija (negra), y solo el contenido entra desde abajo.

1️⃣ Estructura HTML (muy importante)
Cada section debe tener un wrapper interno:

<section class="section">
  <div class="section-inner">
    ...
  </div>
</section>

2️⃣ CSS
.section {
background: black;
overflow: hidden; /_ CLAVE _/
}

.section-inner {
will-change: transform, opacity;
}

3️⃣ JS — Animar solo el contenido
gsap.registerPlugin(ScrollTrigger);

function initSectionReveal() {
const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
const inner = section.querySelector(".section-inner");

    gsap.from(inner, {
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

});
}

document.addEventListener("DOMContentLoaded", initSectionReveal);

- Sin embargo, esto me descolocaba todo y tuve que probar otras soluciones. Decidí que quería animar las secciones, y no tener que meter el contenido en un wrapper interno, ya que era más complejo y lioso.
- Esta fue la solución: ScrollTrigger.batch("section", {
  onEnter: (batch) =>
  gsap.from(batch, {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  }),
  start: "top 85%",
  once: true,
  });

- Ahora me funcionaba, pero se producía un parpadeo. Esta fue la solución que hizo que yta no parpadease:
  gsap.utils.toArray("section").forEach((section) => {
  if (prefersReducedMotion) return;

  gsap.from(section, {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
  trigger: section,
  start: "top 85%",
  toggleActions: "play none none none", // se reproduce solo UNA vez
  markers: false,
  },
  });
  });

- Ya para finalizar, decidí que me excluyese el .hero, ya que este no necesitaba ningun efecto. Finalmente quedó así:
  gsap.utils.toArray("section:not(.hero)").forEach((section) => {
  if (prefersReducedMotion) return;

  gsap.from(section, {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
  trigger: section,
  start: "top 85%",
  toggleActions: "play none none none",
  markers: false,
  },
  });
  });
