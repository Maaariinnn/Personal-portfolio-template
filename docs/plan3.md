# Plan 2 — Solución hover en social links"

## Resumen del plan - Prompt

Quiero que a la hora de hacer hover sobre el social link, no me aprezca la palabra en azul, y que no se produzca ese breve desplazamiento hacia arriba:

<div class="social-links"> <a href="https://maaariinnn.github.io/DISENO_WEB/sow/">Instagram</a> <a href="https://maaariinnn.github.io/DISENO_WEB/sow/">Linkedin</a> <a href="https://maaariinnn.github.io/DISENO_WEB/sow/">Behance</a> <a href="https://maaariinnn.github.io/DISENO_WEB/sow/">Github</a> <a href="https://maaariinnn.github.io/DISENO_WEB/sow/">Pinterest</a> </div> </div> este es el css:.social-links { display: flex; flex-direction: column; grid-column: span 6; } .social-links a { font-size: clamp(1.75rem, 4vw, 2.5rem); width: fit-content; color: var(--color-light); font-weight: var(--font-bold); text-decoration: none; position: relative; } .social-links a:after { content: ""; position: absolute; background-color: red; height: 3px; width: 0%; left: 0; bottom: -6px; transition: 0.5s; } .social-links a:hover:after { width: 100%; }

---

## Respuesta inicial de la IA

El problema no estaba en la animación del subrayado, sino en **estilos por defecto de Bootstrap y del propio elemento `<a>`**.

#### Causas identificadas

1. **Color azul al hover**  
   Bootstrap aplica reglas globales como:
   ```css
   a:hover,
   a:focus {
     color: var(--bs-link-hover-color);
   }
   ```

Esta fue la solución que arreglaba el problema:
.social-links {
display: flex;
flex-direction: column;
grid-column: span 6;
}

.social-links a {
display: inline-block;-----------
width: fit-content;

font-size: clamp(1.75rem, 4vw, 2.5rem);
font-weight: var(--font-bold);
line-height: 1.1;

color: var(--color-light) !important;
text-decoration: none !important;

position: relative;
}

.social-links a:hover,
.social-links a:focus {
color: var(--color-light) !important;
}

.social-links a::after {
content: "";
position: absolute;
left: 0;
bottom: -6px;
height: 3px;
width: 0%;
background-color: red;
transition: width 0.4s ease;
}

.social-links a:hover::after {
width: 100%;
}

Sin embargo, probando, me di cuenta que el breve desplazamiento de la plabra lo creaba el display:inline-block.

Además, decidí meter cada elemento <a> dentro de un <li>; y fue esta la solución que encontré para que al hacer hover se subrayase, no cambiase de color y que se mantuviese en el sitio la palabra.
