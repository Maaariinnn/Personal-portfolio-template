// ==========================================================================
// 1. GSAP SETUP
// ==========================================================================

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// ==========================================================================
// 2. HERO ANIMATIONS
// ==========================================================================

function initHeroAnimations() {
  if (prefersReducedMotion) return;

  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTl
    // First: Main title slides up and fades in
    .from(".hero-title", {
      y: 100, // Start 100px below final position
      opacity: 0, // Start invisible
      duration: 1, // Take 1 second to animate
    })
    // Second: Subtitle follows (overlaps by 0.6s for smooth flow)
    .from(
      ".hero-subtitle",
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.6" // Start 0.6s before title animation ends
    )
    // Third: CTA buttons (overlaps by 0.4s)
    .from(
      ".hero-cta",
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.4"
    )
    // Fourth: Scroll indicator (just fades in, overlaps by 0.2s)
    .from(
      ".scroll-indicator",
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.2"
    );

  gsap.to(".shape-1", {
    x: 50, // Move 50px right
    y: -30, // Move 30px up
    duration: 8, // Over 8 seconds
    repeat: -1, // Loop forever
    yoyo: true, // Reverse each loop
    ease: "sine.inOut", // Smooth organic movement
  });

  gsap.to(".shape-2", {
    x: -40,
    y: 40,
    duration: 10, // Different duration = doesn't sync with shape-1
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".shape-3", {
    x: 30,
    y: 20,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".hero-bg", {
    yPercent: 30, // Move down 30% of its height
    ease: "none", // Linear movement — matches scroll exactly
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true, // Link to scroll position
    },
  });

  // Floating shapes also have parallax (slower than background)
  gsap.to(".floating-shapes", {
    yPercent: 20, // Moves less than background (less parallax)
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

// ==========================================================================
// 3. SCROLL REVEAL ANIMATIONS
// ==========================================================================

gsap.registerPlugin(ScrollTrigger);

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
// Animacion de ScrollTrigger para las tarjetas de proyecto
gsap.utils.toArray(".project.reveal").forEach((card) => {
  gsap.fromTo(
    card,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%", // empieza cuando la card entra en el viewport
        toggleActions: "play none none none", // solo se reproduce al entrar
        markers: false, // poner true para debug
      },
    }
  );
});

// Animacion de ScrollTrigger palabra por palabra en Focus Words
gsap.from(".focus-words p", {
  y: 20,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  stagger: 0.3, // cada p aparece tras la anterior
  scrollTrigger: {
    trigger: ".focus-words",
    start: "top 80%",
    toggleActions: "play none none none",
    once: true,
  },
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!prefersReducedMotion) {
    gsap.from("footer", {
      y: 50, // empieza 50px más abajo
      opacity: 0, // empieza invisible
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "footer", // elemento que activa la animación
        start: "top 90%", // cuando la parte superior del footer llega al 90% del viewport
        toggleActions: "play none none none", // se reproduce solo una vez
      },
    });
  }

  // Animación de cada link dentro de social-links
  const socialLinks = document.querySelectorAll(".social-links li a");
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  if (!prefersReducedMotion) {
    gsap.from(".social-links li", {
      x: -50, // empieza 50px a la izquierda
      opacity: 0, // empieza invisible
      duration: 0.8, // duración de cada animación
      ease: "power2.out",
      stagger: 0.4, // entra uno tras otro
      scrollTrigger: {
        trigger: ".social-links",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }
});

// ==========================================================================
// 4. SKILL BARS ANIMATION
// ==========================================================================

gsap.registerPlugin(ScrollTrigger);

function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar");

  skillBars.forEach((bar) => {
    const targetWidth = bar.dataset.width + "%";

    if (prefersReducedMotion) {
      bar.style.width = targetWidth;
      return;
    }

    gsap.to(bar, {
      width: targetWidth,
      duration: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bar,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSkillBars();
});

function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar");

  skillBars.forEach((bar) => {
    // Read target width from data attribute
    const targetWidth = bar.dataset.width + "%";

    // Accessibility: Show final state immediately if motion is reduced
    if (prefersReducedMotion) {
      bar.style.width = targetWidth;
      return; // Skip animation setup for this element
    }

    gsap.to(bar, {
      width: targetWidth,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bar,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });
}

// ==========================================================================
// 5. PROJECT CARDS STAGGER ANIMATION
// ==========================================================================

function initProjectCards() {
  if (prefersReducedMotion) return;

  ScrollTrigger.batch(".project-card", {
    onEnter: (batch) =>
      gsap.from(batch, {
        y: 60, // Start 60px below
        opacity: 0, // Start invisible
        duration: 0.8,
        stagger: 0.15, // 0.15s delay between each card
        ease: "power2.out",
      }),
    start: "top 90%", // Trigger when card top hits 90% of viewport
    once: true, // Only animate once (no re-triggering on scroll back)
  });
}

// ==========================================================================
// 6. NAVBAR BACKGROUND ON SCROLL
// ==========================================================================
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  ScrollTrigger.create({
    start: "top -100",

    onUpdate: (self) => {
      if (self.scroll() > 100) {
        navbar.classList.add("scrolled"); // Add solid background
      } else {
        navbar.classList.remove("scrolled"); // Remove (transparent)
      }
    },
  });
}

// ==========================================================================
// 7. Smooth Scroll for Anchor Links
// ==========================================================================

const togglerIcon = document.querySelector(".navbar-toggler i");

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  togglerIcon.classList.toggle("bi-list");
  togglerIcon.classList.toggle("bi-x");
});

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();

        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
        }

        const navHeight = document.querySelector(".navbar").offsetHeight;

        gsap.to(window, {
          duration: 0.8,
          scrollTo: { y: target, offsetY: navHeight },
          ease: "power2.inOut",
        });
      }
    });
  });
}

// ==========================================================================
// 8. Initialize Everything
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimations();
  initScrollReveals();
  initSkillBars();
  initProjectCards();
  initNavbarScroll();
  initSmoothScroll();

  console.log("🚀 Grade 2 Demo: Bootstrap + GSAP animations initialized");

  // Refresh ScrollTrigger after all images load
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});

// ==========================================================================
// 9. Cleanup (for SPA environments)
// ==========================================================================

window.cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf("*");
};

// ScrollTrigger palabra por palabra en About Me
function splitTextIntoWords(element) {
  const text = element.textContent;
  const words = text.split(" ");
  element.innerHTML = words
    .map((word) => `<span class="word">${word}&nbsp;</span>`)
    .join("");
}

const aboutText = document.querySelector(".description-about-me p");

splitTextIntoWords(aboutText);

// 1.Accesibilidad
// const prefersReducedMotion = window.matchMedia(
//   "(prefers-reduced-motion: reduce)"
// ).matches;

// 2.Animacion principal
if (!prefersReducedMotion) {
  const words = document.querySelectorAll(".description-about-me .word");

  gsap.to(words, {
    color: "#ffffff",
    ease: "none",
    stagger: {
      each: 0.05,
    },
    scrollTrigger: {
      trigger: ".description-about-me",
      start: "top 70%",
      end: "bottom 40%",
      scrub: true,
    },
  });
} else {
  // Si reduce motion → texto normal
  document.querySelectorAll(".description-about-me .word").forEach((word) => {
    word.style.color = "#ffffff";
  });
}

// split de texto SIN romper la maquetación.
// Esto mantiene exactamente el mismo flujo que el texto original.

function splitTextIntoWords(element) {
  const text = element.textContent;
  element.textContent = "";

  text.split(/(\s+)/).forEach((token) => {
    if (token.trim() === "") {
      element.appendChild(document.createTextNode(token));
    } else {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = token;
      element.appendChild(span);
    }
  });
}

if (!prefersReducedMotion) {
  const words = document.querySelectorAll(".description-about-me .word");

  gsap.to(words, {
    color: "#ffffff",
    ease: "none",
    stagger: {
      each: 0.15,
    },
    scrollTrigger: {
      trigger: ".description-about-me",
      start: "top 70%",
      end: "bottom 40%",
      scrub: true,
    },
  });
} else {
  document.querySelectorAll(".description-about-me .word").forEach((word) => {
    word.style.color = "#ffffff";
  });
}

// Forzar reproducción con JS si falla
const video = document.getElementById("heroVideo");
video.play().catch(() => {
  // fallback: muestra un poster o espera click
  console.log("Autoplay bloqueado, espera interacción del usuario");
});
