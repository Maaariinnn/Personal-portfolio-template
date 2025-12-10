## Resumen del plan - Prompt

Genérame un plan de desarrollo claro y preciso para la tarea final de la asignatura de maquetación web con hojas de estilo. Este proyecto consiste en la creación de una plantilla de portfolio. estos son algunos de los requisitos necesarios del brief: Requisitos comunes (todos los niveles) Independientemente de tu nivel, todo proyecto debe incluir: 1. Repositorio y control de versiones Repositorio en GitHub con nombre claro y descriptivo (por ejemplo, portfolio-template-2025) Mensajes de commit significativos siguiendo un estilo tipo Conventional Commits .gitignore completo (excluye node_modules/, .DS_Store, configuraciones de IDE, etc.) Tag de Git para la entrega final: v1.0.0 GitHub Release creado a partir del tag con notas de versión 2. Despliegue Hosting en GitHub Pages con URL pública y accesible Página 404 personalizada con navegación de vuelta a inicio HTTPS activado (automático en GitHub Pages) Verificación del despliegue (todos los assets cargan, sin enlaces rotos) 3. Documentación README.md con: Enlace al despliegue en la primera línea Descripción y propósito del proyecto Stack tecnológico utilizado Instrucciones de configuración para desarrollo local Guía de personalización Capturas de pantalla o GIF de demo Créditos y agradecimientos LICENSE en la raíz (elige MIT, Apache 2.0 o CC BY-NC-SA 4.0 — recomendada: MIT) Política de uso de agentes de IA: si utilizas asistentes de IA, incluye una sección clara en el README describiendo cuándo y cómo se ha usado la IA. Crítico: toda interacción con IA debe seguir un flujo en dos fases: Fase 1: Planificación — Solicitar a la IA un plan de desarrollo Fase 2: Implementación — Solo después de documentar el plan, pasar a código docs/plan1.md, plan2.md, plan3.md...: para cada feature o tarea en la que uses IA, crea un archivo de plan independiente: docs/plan1.md — Primera feature/tarea (ej. «Componente de navegación responsive») docs/plan2.md — Segunda feature/tarea (ej. «Animaciones con GSAP ScrollTrigger») docs/plan3.md — Tercera feature/tarea (ej. «Integración de formulario de contacto») Cada plan debe contener: Tu prompt/pregunta a la IA La respuesta completa de la IA (el plan) Notas breves sobre qué se implementó del plan Nunca te saltes la fase de planificación — implementar sin plan documentado vacía de sentido el desarrollo estructurado Higiene profesional de commits y pull requests: usa títulos descriptivos, resúmenes claros y auto‑reviews que documenten tu proceso y decisiones. Antes de usar un agente de IA para implementar: haz siempre un commit de tu estado (pre‑IA) con un mensaje claro (por ejemplo, feat(nav): before applying AI planning). Esto preserva tu trabajo original y crea un historial transparente de lo que cambió con ayuda de IA.

## Respuesta de la IA

## Fase 1: Planificación de la plantilla

**Objetivo:** Definir la arquitectura, layout y diseño general del portfolio.

**Tareas:**

- Definir secciones de la plantilla:
  - Header (logo y navegación)
  - Hero / presentación
  - Sobre mí / Bio
  - Proyectos / Portfolio
  - Habilidades / Tecnologías
  - Testimonios / Blog (opcional)
  - Contacto
  - Footer
- Crear wireframe o boceto simple (papel o digital).
- Documentar planificación de IA en `docs/plan1.md`:
  - Prompt usado a la IA para definir layout
  - Respuesta de la IA
  - Notas sobre decisiones finales implementadas

**Buenas prácticas:** planificar antes de codificar, documentar decisiones, flujo “Planificación → Implementación”.

---

## Fase 2: Maquetación HTML base

**Objetivo:** Construir la estructura semántica HTML de la plantilla.

**Tareas:**

- Crear `index.html` con todas las secciones definidas.
- Usar etiquetas semánticas: `header`, `nav`, `main`, `section`, `footer`.
- Añadir placeholders para textos, imágenes y botones.

## Fase 3: Hojas de estilo CSS

**Objetivo:** Diseñar la apariencia visual y responsiva de la plantilla.

**Tareas:**

- Crear `style.css` en `/assets/css/`.
- Aplicar diseño básico:
  - Tipografía con `clamp()`
  - Paleta de colores coherente
  - Layout responsive con Flexbox/Grid
  - Espaciados y márgenes consistentes
- Media queries para mobile, tablet y desktop.

---

## Fase 4: Funcionalidades interactivas

**Objetivo:** Añadir dinamismo y mejorar la experiencia de usuario.

**Tareas:**

- Navegación responsive con toggle (hamburger menu).
- Smooth scroll a secciones.
- Animaciones básicas (fade-in, hover effects, parallax opcional con GSAP).
- Formularios de contacto front-end funcionales.
- Documentar cada feature en `docs/plan2.md`, `docs/plan3.md`, etc.

## Fase 5: Página 404 y accesibilidad

**Objetivo:** Cumplir requisitos de despliegue y accesibilidad.

**Tareas:**

- Crear `404.html` con navegación de vuelta al inicio.
- Verificar uso correcto de `alt` en imágenes, etiquetas ARIA, contraste de colores

## Fase 6: Documentación

**Objetivo:** Preparar README completo y notas de IA.

**Tareas:**

- README.md con:

  - Enlace al deployment
  - Descripción del proyecto
  - Stack tecnológico
  - Guía de instalación y personalización
  - Capturas o GIF de demo
  - Créditos y agradecimientos
  - Uso de IA documentado (planificación de features)

  ***

## Fase 7: Control de versiones y despliegue

**Objetivo:** Entregar versión final en GitHub Pages con buenas prácticas.

**Tareas:**

- Verificar assets y enlaces.
- Crear tag y GitHub Release:
