# Plan 7 — Recuperar Parallax y Animaciones tras Añadir Video en Hero

## Resumen de la Feature

**Objetivo:** Solucionar el bloqueo de animaciones y efectos parallax tras añadir un video como fondo del hero.

**Decisión final implementada:**

- Ajustar correctamente el `z-index` del video.
- Mantener el video como fondo visual sin interferir con el DOM.
- Restaurar funcionalidad de GSAP y ScrollTrigger.

---

## Prompt usado con IA

Al incluir un video en el hero-bg, el resto de efectos
y el parallax no funcionan. Toda la web se vuelve estática.
¿Cómo puedo solucionarlo?

---

## Respuesta inicial de la IA

- El `<video>` estaba interfiriendo con el orden de capas.
- GSAP no detectaba correctamente los elementos animados.
- Solución: colocar el video detrás del contenido con `z-index`.

---

## Solución final implementada

```css
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Clave: detrás del contenido */
}
```
