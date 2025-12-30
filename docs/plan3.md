# Plan 3 — Solución Hover en Social Links

## Resumen de la Feature

**Objetivo:** Corregir el comportamiento de los enlaces sociales al hacer hover, evitando que cambien de color a azul y que se desplacen ligeramente hacia arriba.

**Decisión final implementada:**

- Cada `<a>` fue envuelto dentro de un `<li>` dentro de `<ul>` para mejorar layout.
- CSS ajustado para mantener posición y color: `display: inline-block; color: var(--color-light) !important; text-decoration: none !important`.
- Subrayado animado con `::after` para efecto visual limpio.
- Compatibilidad con hover y focus (accesibilidad para teclado).

---

## Prompt usado con IA

Quiero que a la hora de hacer hover sobre el social link, no me aparezca la palabra en azul y que no se produzca ese breve desplazamiento hacia arriba. HTML y CSS actuales ya definidos.

---

## Respuesta inicial de la IA

- El problema era causado por **estilos por defecto de Bootstrap**:

  ```css
  a:hover,
  a:focus {
    color: var(--bs-link-hover-color);
  }
  ```

- Propuesta: usar !important y ajustar display para evitar desplazamiento.

## Problemas encontrados

1. Display:inline-block causaba desplazamiento hacia arriba al hacer hover.
2. Color azul aplicado por estilos globales de Bootstrap.

---

## Solución final implementada

```css
// Detecta usuarios con preferencia de reducir movimiento
.social-links {
  display: flex;
  flex-direction: column;
  grid-column: span 6;
}

.social-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-links li a {
  display: inline-block;
  width: fit-content;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: var(--font-bold);
  line-height: 1.1;
  color: var(--color-light) !important;
  text-decoration: none !important;
  position: relative;
}

.social-links li a:hover,
.social-links li a:focus {
  color: var(--color-light) !important;
}

.social-links li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  height: 3px;
  width: 0%;
  background-color: red;
  transition: width 0.4s ease;
}

.social-links li a:hover::after {
  width: 100%;
}
```
