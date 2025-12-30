# Plan 7 — Recuperar el control de parallax y los efectos

## Resumen del plan - Prompt

Al haber incluido un video en el hero-bg, el resto de efectos y el parallax no funcionan. ahora toda la web es estática.

---

## Respuesta inicial de la IA

Ah, ahora entiendo. Esto pasa porque cuando pones un <video> dentro del hero como fondo, puede estar cubriendo todos los elementos o cambiando la estructura del DOM, y eso afecta a GSAP y ScrollTrigger. Básicamente, tus animaciones no se ven porque el video está sobre los elementos que deberían animarse o porque los selectores ya no apuntan correctamente a lo que quieres animar.

- La solución está en el z-index: -1. De tal forma que mi css quedó así:

.hero-video {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
z-index: -1; /_ muy importante, detrás del contenido _/
}
