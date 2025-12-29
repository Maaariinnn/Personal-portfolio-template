# Plan 4 — Solución para el Above The Fold en cualquier navegador"

## Resumen del plan - Prompt

Para el above the fold, (el hero en el html) yo tengo un texto (2026 Portfolio) que no se ve, ya que en el navegador la barra de búsqueda lo tapa. Como puedo recalcular esa distancia, para que el texto esté a la distancia indicada teniendo en cuenta esa barra del navegador (la altura de cada barra de navegador es diferente según el navegador y el móvil o tablet).

---

## Respuesta inicial de la IA

Esto es un problema real de diseño “above the fold”, sobre todo en mobile.
La respuesta corta es: NO debes usar 100vh tal cual para el hero.
La solución correcta hoy en día es usar las nuevas unidades dinámicas del viewport.
Voy por partes, de forma clara y documentable.

- SOLUCIÓN MODERNA (la correcta en 2025)
  Usa Dynamic Viewport Units:
  👉 100dvh (dynamic viewport height)
  .hero {
  min-height: 100dvh;
  }
  ¿Qué hace?
  dvh sí tiene en cuenta la barra del navegador
  Se recalcula automáticamente cuando la barra aparece/desaparece
  Funciona distinto según dispositivo → justo lo que necesitas

  ⚠️ Fallback (por compatibilidad total)
  Aunque ya está muy bien soportado, puedes hacer esto:
  .hero {
  min-height: 100vh;
  min-height: 100dvh;
  }
  El navegador que entienda dvh usará la segunda línea.
