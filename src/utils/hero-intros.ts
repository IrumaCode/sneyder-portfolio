/**
    =======================================================================
    INTROS DEL HERO (GSAP)
    =======================================================================
    - Classroom: el nombre se traza con marcador, el rol se escribe letra
      a letra, las líneas se "escriben" de izquierda a derecha, cae un
      post-it y se dibujan los garabatos.
    - Geek: se teclean comandos de terminal y se revela su salida.

    Se reproduce la intro del tema activo al cargar y al cambiar de tema.
    Sin JS o con prefers-reduced-motion el contenido se ve completo.
    =======================================================================
 */
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(TextPlugin, DrawSVGPlugin, SplitText);

const TYPE_SPEED_PER_CHAR = 0.06;
// Mayor que el contorno de cualquier letra: el trazo arranca oculto
const MARKER_DASH = 1400;

let current: gsap.core.Timeline | null = null;
let currentSplit: SplitText | null = null;

function reset(): void {
    current?.kill();
    currentSplit?.revert();
    current = null;
    currentSplit = null;
}

function playClassroomIntro(panel: HTMLElement): gsap.core.Timeline {
    const nameLines = panel.querySelectorAll<SVGTextElement>(".board-name text");
    const greeting = panel.querySelector("[data-board-greeting]");
    const role = panel.querySelector<HTMLElement>("[data-board-role]");
    const introLines = panel.querySelector("[data-board-intro]")?.children ?? [];
    const sticky = panel.querySelector("[data-board-sticky]");
    const doodles = panel.querySelectorAll("[data-board-doodle]");

    const timeline = gsap.timeline({
        delay: 0.2,
        onComplete: () => {
            currentSplit?.revert();
            currentSplit = null;
        },
    });

    gsap.set(nameLines, { strokeDasharray: MARKER_DASH, strokeDashoffset: MARKER_DASH, fillOpacity: 0 });

    timeline.from(greeting, { autoAlpha: 0, x: -24, duration: 0.5, ease: "power2.out" });

    nameLines.forEach((line, index) => {
        timeline.to(
            line,
            { strokeDashoffset: 0, duration: index === 0 ? 1.4 : 0.9, ease: "power1.inOut" },
            index === 0 ? ">" : "-=0.5",
        );
    });
    timeline.to(nameLines, { fillOpacity: 1, duration: 0.5 }, "-=0.3");

    if (role) {
        currentSplit = SplitText.create(role, { type: "chars" });
        timeline.from(currentSplit.chars, { autoAlpha: 0, y: 6, duration: 0.05, stagger: 0.025 }, "-=0.2");
    }

    // La primera doodle visible bajo el rol es el subrayado ondulado
    timeline.from(doodles, { drawSVG: "0%", duration: 0.6, stagger: 0.15, ease: "power1.inOut" }, "-=0.1");

    timeline.fromTo(
        introLines,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.8, stagger: 0.35, ease: "none", clearProps: "clipPath" },
        "-=0.8",
    );

    timeline.from(sticky, { autoAlpha: 0, y: -90, rotation: -25, duration: 1, ease: "bounce.out" }, "-=0.6");

    return timeline;
}

function playGeekIntro(panel: HTMLElement): gsap.core.Timeline {
    const steps = panel.querySelectorAll<HTMLElement>("[data-geek-step]");
    gsap.set(steps, { autoAlpha: 0 });

    const timeline = gsap.timeline({ delay: 0.2 });
    steps.forEach((step) => {
        const command = step.querySelector<HTMLElement>("[data-geek-type]");

        if (command) {
            const text = command.dataset.geekType ?? "";
            timeline.set(step, { autoAlpha: 1 });
            timeline.fromTo(command, { text: "" }, { text, duration: text.length * TYPE_SPEED_PER_CHAR, ease: "none" });
        } else if (step.hasAttribute("data-geek-glitch")) {
            timeline.fromTo(
                step,
                { autoAlpha: 0, skewX: 25, x: -20 },
                { autoAlpha: 1, skewX: 0, x: 0, duration: 0.5, ease: "steps(6)" },
            );
        } else {
            timeline.fromTo(step, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" });
        }
    });
    return timeline;
}

function playActiveIntro(): void {
    const isGeek = document.documentElement.getAttribute("data-theme") === "geek";
    const panel = document.querySelector<HTMLElement>(isGeek ? ".geek-panel" : ".classroom-panel");
    if (!panel) return;

    reset();
    current = isGeek ? playGeekIntro(panel) : playClassroomIntro(panel);
}

export function initHeroIntros(): void {
    // El cambio de idioma reemplaza el texto partido: descartamos el split sin revert()
    // para no restaurar el texto del idioma anterior
    window.addEventListener("languageChanged", () => {
        currentSplit = null;
    });

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Esperamos las fuentes: el trazo del marcador depende de la forma real de las letras
        document.fonts.ready.then(playActiveIntro);
        window.addEventListener("themeChanged", playActiveIntro);
        return () => {
            window.removeEventListener("themeChanged", playActiveIntro);
            reset();
        };
    });
}
