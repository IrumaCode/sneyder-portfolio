/**
    =======================================================================
    ANIMACIONES DE SCROLL (GSAP + ScrollTrigger)
    =======================================================================
    Los componentes declaran QUÉ animar con `data-anim="<tipo>"`;
    este módulo decide CÓMO. Así el marcado no depende de GSAP y la
    página sigue completa sin JS o con prefers-reduced-motion.

    Tipos disponibles:
    - title              h2 de sección: sube + subrayado que se expande
    - fade-up            párrafo que aparece subiendo
    - slide-in           entra desde la izquierda
    - stagger            los hijos directos aparecen en cascada
    - pop                los hijos directos aparecen escalando (grids de iconos)
    - counter            cuenta desde 0 hasta el número de su texto ("9+")
    - years-ruler        regla de años: la línea se dibuja con el scroll y los años se encienden
    - flip               los hijos entran volteándose como fichas (y su [data-flip-icon] rebota)
    - fusion             diagrama de Venn: los círculos [data-fusion] se unen con el scroll
    - hero-panel         parallax del panel del hero al salir de pantalla
    - progress           barra de progreso de lectura (scrub global)
    =======================================================================
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Punto de disparo: cuando el top del elemento cruza el 85% del viewport
const START = "top 85%";
const EASE = "power3.out";

const all = <T extends Element = HTMLElement>(selector: string) =>
    gsap.utils.toArray<T>(`[data-anim="${selector}"]`);

function revealOnce(target: gsap.TweenTarget, vars: gsap.TweenVars, trigger: Element): void {
    gsap.from(target, {
        ...vars,
        ease: vars.ease ?? EASE,
        scrollTrigger: { trigger, start: START, once: true }
    });
}

function animateTitles(): void {
    all("title").forEach((title) => {
        gsap.timeline({ scrollTrigger: { trigger: title, start: START, once: true } })
            .from(title, { autoAlpha: 0, y: 40, duration: 0.8, ease: EASE })
            .fromTo(title, { "--line-scale": 0 }, { "--line-scale": 1, duration: 0.8, ease: "power2.inOut" }, "-=0.4");
    });
}

function animateSimpleReveals(): void {
    all("fade-up").forEach((el) => revealOnce(el, { autoAlpha: 0, y: 30, duration: 0.8 }, el));
    all("slide-in").forEach((el) => revealOnce(el, { autoAlpha: 0, x: -40, duration: 0.7 }, el));

    all("stagger").forEach((group) => {
        revealOnce(group.children, { autoAlpha: 0, y: 50, duration: 0.8, stagger: 0.15 }, group);
    });

    all("pop").forEach((group) => {
        revealOnce(group.children, {
            autoAlpha: 0, scale: 0.6, y: 20, duration: 0.5, ease: "back.out(1.7)",
            stagger: { each: 0.06, from: "start" }
        }, group);
    });
}

function animateCounters(): void {
    all("counter").forEach((el) => {
        const original = el.textContent?.trim() ?? "";
        const target = parseInt(original, 10);
        if (Number.isNaN(target)) return;

        const suffix = original.replace(/^\d+/, "");
        const state = { value: 0 };
        const render = () => { el.textContent = `${Math.round(state.value)}${suffix}`; };
        render();

        gsap.to(state, {
            value: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: START, once: true },
            onUpdate: render
        });
    });
}

function animateFusion(): void {
    all("fusion").forEach((block) => {
        const left = block.querySelector("[data-fusion=\"left\"]");
        const right = block.querySelector("[data-fusion=\"right\"]");
        const badge = block.querySelector("[data-fusion=\"badge\"]");
        const result = block.querySelector("[data-fusion=\"result\"]");

        // Los círculos empiezan separados y se funden mientras se hace scroll
        gsap.timeline({
            scrollTrigger: { trigger: block, start: "top 80%", end: "center 55%", scrub: 0.8 }
        })
            .from(left, { xPercent: -45, rotation: -12, ease: "none" }, 0)
            .from(right, { xPercent: 45, rotation: 12, ease: "none" }, 0)
            .from(badge, { scale: 0, rotation: -180, ease: "back.out(2)", duration: 0.35 }, 0.65)
            .from(result, { autoAlpha: 0, y: 30, ease: "power2.out", duration: 0.35 }, 0.65);
    });
}

function animateTeaching(): void {
    all("years-ruler").forEach((ruler) => {
        const line = ruler.querySelector("[data-ruler-line]");
        const years = ruler.querySelectorAll("[data-ruler-year]");

        gsap.timeline({ scrollTrigger: { trigger: ruler, start: "top 85%", end: "top 45%", scrub: 0.6 } })
            .fromTo(line, { scaleX: 0 }, { scaleX: 1, ease: "none", duration: 1 }, 0)
            .from(years, { autoAlpha: 0.15, scale: 0.6, ease: "back.out(2)", duration: 0.2, stagger: 0.1 }, 0);
    });

    all("flip").forEach((group) => {
        const cards = Array.from(group.children);
        const timeline = gsap.timeline({ scrollTrigger: { trigger: group, start: START, once: true } });
        timeline.from(cards, {
            rotationX: -90,
            transformOrigin: "50% 0%",
            autoAlpha: 0,
            duration: 0.7,
            ease: "back.out(1.4)",
            stagger: { each: 0.12, grid: "auto", from: "start" }
        });
        timeline.from(group.querySelectorAll("[data-flip-icon]"), {
            scale: 0, rotation: -45, duration: 0.5, ease: "back.out(3)", stagger: 0.12
        }, 0.35);
    });
}

function animateHeroParallax(): void {
    const hero = document.getElementById("hero");
    if (!hero) return;

    gsap.to(all("hero-panel"), {
        yPercent: -12,
        scale: 0.94,
        autoAlpha: 0.35,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true }
    });
}

function animateProgressBar(): void {
    all("progress").forEach((bar) => {
        gsap.fromTo(bar, { scaleX: 0 }, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { start: 0, end: "max", scrub: 0.3 }
        });
    });
}

export function initScrollAnimations(): void {
    const mm = gsap.matchMedia();

    // Solo animamos si el usuario no pidió reducir el movimiento
    mm.add("(prefers-reduced-motion: no-preference)", () => {
        animateTitles();
        animateSimpleReveals();
        animateCounters();
        animateFusion();
        animateTeaching();
        animateHeroParallax();
        animateProgressBar();
    });

    // Cambiar idioma o tema altera alturas: recalculamos posiciones
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("languageChanged", refresh);
    window.addEventListener("themeChanged", refresh);
}
