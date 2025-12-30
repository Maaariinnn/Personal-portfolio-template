# Plan 4 — Corrección del Above The Fold en Hero (Viewport Dinámico)

## Resumen de la Feature

**Objetivo:** Garantizar que el contenido principal del hero (Above The Fold) sea visible en todos los navegadores y dispositivos, evitando que la barra del navegador o UI del sistema tape el texto.

**Decisión final implementada:**

- Sustituir `100vh` por **Dynamic Viewport Units (`100dvh`)**.
- Mantener fallback con `100vh` para compatibilidad.
- Solución responsive y moderna, especialmente efectiva en mobile.

---

## Prompt usado con IA

Para el above the fold (hero), el texto no se ve porque la barra del navegador lo tapa.
¿Cómo puedo recalcular la altura para que tenga en cuenta la barra del navegador,
teniendo en cuenta que varía según navegador y dispositivo?

---

## Respuesta inicial de la IA

- No usar `100vh` directamente en mobile.
- Usar **Dynamic Viewport Units**:
  - `100dvh` tiene en cuenta la UI del navegador.
  - Se recalcula automáticamente cuando la barra aparece/desaparece.
- Añadir fallback para navegadores antiguos.

---

## Problemas encontrados

1. `100vh` ignora la barra del navegador en mobile.
2. El texto quedaba oculto parcialmente en el hero.

---

## Solución final implementada

```css
.hero {
  min-height: 100vh; /* Fallback */
  min-height: 100dvh; /* Dynamic Viewport Height */
}
```
