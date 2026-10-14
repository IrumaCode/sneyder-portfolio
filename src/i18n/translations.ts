/**
     =======================================================================
    SISTEMA DE TRADUCCIONES
    =======================================================================

    Centralizar todas las traducciones tiene ventajas:
    - Un solo lugar para modificar textos
    - facil de mantener y escalar
    - TypeScript nos avisa si falta alguna traducción

    DRY: Don't Repeat Yourself
    En vez de data-espanol="Texto" en cada componente,
    tenemos un objeto organizado.
    =======================================================================
 */

import { cvContent } from "./cv";

// Definimos los idiomas disponibles
export type Language = "es" | "en";

export const languages: Record<Language, { flag: string; name: string }> = {
    es: { flag: "🇪🇸", name: "Español" },
    en: { flag: "🇺🇸", name: "English" },
};

// Idioma por defecto
export const defaultLang: Language = "es";

// Fecha de inicio como desarrollador (Offimedicas) y periodo docente.
// Los años se calculan en build a partir de aquí.
export const careerDates = {
    devStart: "2024-05-22",
    teachingYears: 8,
} as const;

// Todas las traducciones del sitio
export const translations = {
    es: {
        // Metadatos SEO de la página
        seo: {
            title: "Sneyder Leguía | Desarrollador Full Stack",
            description:
                "Portfolio de Sneyder Leguía, desarrollador Full Stack especializado en React, Vue.js, PHP y Symfony, con 8 años de experiencia formando desarrolladores.",
            ogLocale: "es_CO",
        },

        // Página del CV (/cv)
        cv: cvContent.es,

        // Página 404
        notFound: {
            seoTitle: "404 · Página no encontrada | Sneyder Leguía",
            classroomTitle: "Esta lección no está en el temario",
            classroomText: "La página que buscas fue borrada de la pizarra o nunca existió. Volvamos a clase.",
            geekError: "No such file or directory",
            geekText: "Error 404: esta ruta no existe en el sistema.",
            back: "Volver al inicio",
        },

        // Controles de interfaz (aria-labels)
        ui: {
            themeToLight: "Cambiar a modo claro (Classroom)",
            themeToDark: "Cambiar a modo oscuro (Geek)",
            languageSwitch: "Ver en inglés",
            scrollHint: "Desplázate hacia abajo para ver más contenido",
            heroLabel: "Presentación personal",
            skipToContent: "Saltar al contenido",
            mainNav: "Navegación principal",
            openMenu: "Abrir menú",
            home: "Inicio",
        },

        nav: {
            experience: "Experiencia",
            projects: "Proyectos",
            skills: "Habilidades",
            contact: "Contacto",
            cv: "CV",
        },

        // Hero section
        hero: {
            greeting: "¡Hola! Soy",
            role: "Desarrollador Full Stack | Especialista Frontend",
            intro: [
                "Licenciado en Informática y Medios Audiovisuales",
                "8 años formando desarrolladores",
                "Apasionado por crear experiencias digitales que educan y sorprenden",
            ],
            stickyNote: "Tarea de hoy: construir algo increíble",
            // Contenido para tema geek (terminal / retro gaming)
            geekRole: "FULL STACK DEV // FRONTEND MAIN",
            geekIntro: [
                "Developer de día, geek a tiempo completo",
                "Convierto café en commits y bugs en jefes finales derrotados",
                "Main frontend, multiclase backend: 8 años ayudando a otros a subir de nivel",
            ],
        },

        // Experiencia Section
        experience: {
            title: "Experiencia",
            current: {
                badge: "ACTUAL",
                title: "Desarrollador Full Stack",
                company: "Offimedicas S.A.",
                period: "Mayo 2024 – Presente",
                description:
                    "Análisis, desarrollo y mantenimiento de Mesmeric, el ERP crítico de inventario farmacéutico y dispensación de medicamentos: integración con la API SIIFA (MinSalud), exportación de 1.000.000 de registros a Excel en menos de 1 minuto con C y Bun FFI, y optimización de SQL sobre MariaDB.",
                highlights: ["PHP/Symfony", "MariaDB", "APIs REST · SIIFA", "C + Bun FFI", "React Native"],
            },
            fusion: {
                eyebrow: "Dos trayectorias, un perfil",
                devLabel: "años construyendo software",
                teachLabel: "años enseñando a programar",
                result: "Un desarrollador que sabe explicar lo que construye",
            },
            teaching: {
                title: "Lo que me dejaron 8 años en el aula",
                role: "Formador en Informática y Tecnología (Desarrollo Web)",
                org: "Ministerio de Educación",
                period: "Febrero 2016 – Febrero 2024",
                rulerLabel: "años en el aula",
                skills: [
                    {
                        icon: "🗣️",
                        title: "Comunicación técnica",
                        description:
                            "Traduzco conceptos complejos en explicaciones claras para equipos, clientes y usuarios.",
                    },
                    {
                        icon: "🧭",
                        title: "Mentoría",
                        description:
                            "Formé a más de 1000 estudiantes desde su primera línea de código; hoy lo aplico en code reviews y onboarding.",
                    },
                    {
                        icon: "👥",
                        title: "Liderazgo de equipos",
                        description:
                            "Coordiné proyectos colaborativos con metodologías ágiles, roles claros y entregas iterativas.",
                    },
                    {
                        icon: "🧩",
                        title: "Pensamiento estructurado",
                        description:
                            "Diseñar currículos me enseñó a dividir problemas grandes en pasos pequeños y verificables.",
                    },
                    {
                        icon: "🤝",
                        title: "Empatía",
                        description:
                            "Entender cómo aprende cada persona me ayuda a diseñar interfaces pensando en quien las usa.",
                    },
                    {
                        icon: "🔄",
                        title: "Aprendizaje continuo",
                        description: "Actualizar contenidos al ritmo de la tecnología se volvió un hábito diario.",
                    },
                ],
            },
        },

        projects: {
            title: "Proyectos Destacados",
            viewRepo: "Repositorio",
            viewDemo: "Ver demo",
            comingSoon: "Muy pronto",
            privateBadge: "Privado · En producción",
            privateNote: "Código privado de la empresa: sin repositorio público",
            upcomingTitle: "Próximos proyectos",
            upcomingIntro: "Proyectos personales en preparación. Cada uno se publicará con su repositorio y demo.",
            // Etiqueta de cada proyecto según el tema
            labels: {
                featuredClassroom: "Proyecto principal",
                featuredGeek: "MAIN QUEST",
                classroom: "Tarea",
                geek: "SIDE QUEST",
            },
            featured: {
                title: "Mesmeric ERP",
                subtitle: "Sistema de inventarios y dispensación de medicamentos e insumos",
                company: "Offimedicas S.A.",
                description:
                    "ERP empresarial legacy con el que Offimedicas gestiona el inventario y la dispensación de medicamentos e insumos. Es el sistema que mantengo y modernizo día a día sobre Symfony, MariaDB, jQuery y Bootstrap.",
                rolesTitle: "Logros clave",
                roles: [
                    "Módulo de Glosas y Devoluciones integrado con la API SIIFA (MinSalud): JWT, sincronización y respuestas masivas",
                    "Exportación masiva con C y Bun FFI: 1.000.000 de registros a Excel en menos de 1 minuto",
                    "Optimización de SQL en MariaDB para reportes de facturación de alto volumen",
                    "Refactorización de módulos legacy con SOLID, Service Layer y Repository",
                ],
                tech: ["PHP", "Symfony", "Twig", "MariaDB", "jQuery", "C + Bun FFI", "Go"],
            },
            items: [
                {
                    title: "Mi Calificación - Sistema de Gestión de Notas",
                    summary: "Gestión de notas con roles docente/estudiante y avisos automáticos con n8n.",
                    description:
                        "CRUD completo para gestión académica donde docentes pueden subir, editar y descargar consolidados de calificaciones. Sistema de autenticación con roles diferenciados: estudiantes solo visualizan mientras profesores tienen control total. Integración con n8n para notificaciones automáticas cuando las notas están disponibles.",
                    tech: ["Vue.js", "TypeScript", "C# / .NET", "PostgreSQL", "n8n"],
                    repo: "",
                    demo: "",
                    status: "coming-soon",
                },
                {
                    title: "Comparador de Motos - MotoCompare",
                    summary: "Comparador de especificaciones de motos con GraphQL y gráficos comparativos.",
                    description:
                        "Plataforma interactiva para comparar especificaciones técnicas de motocicletas: potencia, torque, precio, cilindrada y más. Implementación de GraphQL para consultas flexibles y optimizadas. Visualización de datos con gráficos comparativos y filtros avanzados por categoría, marca y rango de precio.",
                    tech: ["React", "GraphQL", "Node.js", "Chart.js", "PostgreSQL"],
                    repo: "",
                    demo: "",
                    status: "coming-soon",
                },
                {
                    title: "GymFlow - Gestión Inteligente de Gimnasio",
                    summary: "Reservas de gimnasio con ocupación en tiempo real (Socket.io) y pagos con Stripe.",
                    description:
                        "Sistema de reservas para evitar saturación del gimnasio. Los usuarios notifican su hora de llegada en tiempo real. Incluye dashboard administrativo, sistema de pagos con Stripe (modo demo), visualización de ocupación en vivo con Socket.io, y gestión completa de membresías.",
                    tech: ["React", "TypeScript", "Node.js", "Socket.io", "Stripe", "PostgreSQL"],
                    repo: "",
                    demo: "",
                    status: "coming-soon",
                },
            ],
        },

        // Skills Section
        skills: {
            title: "Habilidades & Tecnologías",
            categories: {
                frontend: "Frontend",
                backend: "Backend",
                databases: "Bases de Datos",
                tools: "Herramientas & DevOps",
                ai: "Agentes de IA",
            },
        },

        // Contact Section
        contact: {
            title: "¿Colaboramos?",
            subtitle: "Siempre abierto a nuevos desafíos y proyectos épicos. ¡Hagamos algo increíble juntos!",
            emailButton: "Correo",
            cvButton: "Ver CV",
            emailLabel: "Enviar un correo",
            copyEmail: "Copiar correo",
            copied: "¡Correo copiado!",
            linkedinLabel: "Perfil de LinkedIn",
            githubLabel: "Perfil de GitHub",
            builtWith: "Hecho con Astro, Tailwind CSS y GSAP",
        },
    },
    en: {
        // Page SEO metadata
        seo: {
            title: "Sneyder Leguía | Full Stack Developer",
            description:
                "Portfolio of Sneyder Leguía, a Full Stack Developer specialized in React, Vue.js, PHP and Symfony, with 8 years of experience training developers.",
            ogLocale: "en_US",
        },

        // Resume page (/en/cv)
        cv: cvContent.en,

        // 404 page
        notFound: {
            seoTitle: "404 · Page not found | Sneyder Leguía",
            classroomTitle: "This lesson is not in the syllabus",
            classroomText:
                "The page you are looking for was erased from the whiteboard or never existed. Back to class.",
            geekError: "No such file or directory",
            geekText: "Error 404: this path does not exist on the system.",
            back: "Back to home",
        },

        // UI controls (aria-labels)
        ui: {
            themeToLight: "Switch to light mode (Classroom)",
            themeToDark: "Switch to dark mode (Geek)",
            languageSwitch: "View in English",
            scrollHint: "Scroll down to see more content",
            heroLabel: "Personal introduction",
            skipToContent: "Skip to content",
            mainNav: "Main navigation",
            openMenu: "Open menu",
            home: "Home",
        },

        nav: {
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
            cv: "Resume",
        },

        // Hero Section
        hero: {
            greeting: "Hi! I'm",
            role: "Full Stack Developer | Frontend Specialist",
            intro: [
                "Bachelor's in Computer Science and Audiovisual Media",
                "8 years training developers",
                "Passionate about creating digital experiences that educate and amaze",
            ],
            stickyNote: "Today's homework: build something amazing",
            // Content for geek theme (terminal / retro gaming)
            geekRole: "FULL STACK DEV // FRONTEND MAIN",
            geekIntro: [
                "Developer by day, full-time geek",
                "Turning coffee into commits and bugs into defeated final bosses",
                "Frontend main, backend multiclass: 8 years helping others level up",
            ],
        },

        // Experience Section
        experience: {
            title: "Experience",
            current: {
                badge: "CURRENT",
                title: "Full Stack Developer",
                company: "Offimedicas S.A.",
                period: "May 2024 – Present",
                description:
                    "Analysis, development and maintenance of Mesmeric, the mission-critical ERP for pharmaceutical inventory and medication dispensing: SIIFA API integration (Ministry of Health), exporting 1,000,000 records to Excel in under 1 minute with C and Bun FFI, and SQL optimization on MariaDB.",
                highlights: ["PHP/Symfony", "MariaDB", "REST APIs · SIIFA", "C + Bun FFI", "React Native"],
            },
            fusion: {
                eyebrow: "Two paths, one profile",
                devLabel: "years building software",
                teachLabel: "years teaching code",
                result: "A developer who can explain what he builds",
            },
            teaching: {
                title: "What 8 years in the classroom taught me",
                role: "Computer Science & Technology Instructor (Web Development)",
                org: "Ministry of Education",
                period: "February 2016 – February 2024",
                rulerLabel: "years in the classroom",
                skills: [
                    {
                        icon: "🗣️",
                        title: "Technical communication",
                        description: "I turn complex concepts into clear explanations for teams, clients and users.",
                    },
                    {
                        icon: "🧭",
                        title: "Mentoring",
                        description:
                            "I trained more than 1,000 students from their very first line of code; today I apply it in code reviews and onboarding.",
                    },
                    {
                        icon: "👥",
                        title: "Team leadership",
                        description:
                            "I coordinated collaborative projects with agile methods, clear roles and iterative deliveries.",
                    },
                    {
                        icon: "🧩",
                        title: "Structured thinking",
                        description:
                            "Designing curricula taught me to break big problems into small, verifiable steps.",
                    },
                    {
                        icon: "🤝",
                        title: "Empathy",
                        description:
                            "Understanding how each person learns helps me design interfaces for the people who use them.",
                    },
                    {
                        icon: "🔄",
                        title: "Continuous learning",
                        description: "Keeping content up to date with technology became a daily habit.",
                    },
                ],
            },
        },

        // Projects Section
        projects: {
            title: "Featured Projects",
            viewRepo: "Repository",
            viewDemo: "Live demo",
            comingSoon: "Coming Soon",
            privateBadge: "Private · In production",
            privateNote: "Private company code: no public repository",
            upcomingTitle: "Up next",
            upcomingIntro: "Personal projects in the works. Each one will ship with its repository and live demo.",
            // Per-theme project label
            labels: {
                featuredClassroom: "Main project",
                featuredGeek: "MAIN QUEST",
                classroom: "Assignment",
                geek: "SIDE QUEST",
            },
            featured: {
                title: "Mesmeric ERP",
                subtitle: "Inventory and dispensing system for medicines and medical supplies",
                company: "Offimedicas S.A.",
                description:
                    "Legacy enterprise ERP that Offimedicas uses to manage the inventory and dispensing of medicines and medical supplies. It is the system I maintain and modernize every day on Symfony, MariaDB, jQuery and Bootstrap.",
                rolesTitle: "Key achievements",
                roles: [
                    "Claims and Returns module integrated with the SIIFA API (Ministry of Health): JWT, sync and bulk responses",
                    "Bulk export with C and Bun FFI: 1,000,000 records to Excel in under 1 minute",
                    "SQL optimization on MariaDB for high-volume billing reports",
                    "Refactoring of legacy modules with SOLID, Service Layer and Repository",
                ],
                tech: ["PHP", "Symfony", "Twig", "MariaDB", "jQuery", "C + Bun FFI", "Go"],
            },
            items: [
                {
                    title: "My Grading - Grade Management System",
                    summary: "Grade management with teacher/student roles and automatic n8n notifications.",
                    description:
                        "Complete CRUD for academic management where teachers can upload, edit and download grade reports. Authentication system with differentiated roles: students only view while teachers have full control. Integration with n8n for automatic notifications when grades are available.",
                    tech: ["Vue.js", "TypeScript", "C# / .NET", "PostgreSQL", "n8n"],
                    repo: "",
                    demo: "",
                    status: "coming-soon",
                },
                {
                    title: "Motorcycle Comparator - MotoCompare",
                    summary: "Motorcycle spec comparator with GraphQL and comparative charts.",
                    description:
                        "Interactive platform to compare motorcycle technical specifications: power, torque, price, displacement and more. GraphQL implementation for flexible and optimized queries. Data visualization with comparative charts and advanced filters by category, brand and price range.",
                    tech: ["React", "GraphQL", "Node.js", "Chart.js", "PostgreSQL"],
                    repo: "",
                    demo: "",
                    status: "coming-soon",
                },
                {
                    title: "GymFlow - Smart Gym Management",
                    summary: "Gym booking with real-time occupancy (Socket.io) and Stripe payments.",
                    description:
                        "Reservation system to avoid gym overcrowding. Users notify their arrival time in real-time. Includes administrative dashboard, Stripe payment system (demo mode), live occupancy visualization with Socket.io, and complete membership management.",
                    tech: ["React", "TypeScript", "Node.js", "Socket.io", "Stripe", "PostgreSQL"],
                    repo: "",
                    demo: "",
                    status: "coming-soon",
                },
            ],
        },

        // Skills Section
        skills: {
            title: "Skills & Technologies",
            categories: {
                frontend: "Frontend",
                backend: "Backend",
                databases: "Databases",
                tools: "Tools & DevOps",
                ai: "AI Agents",
            },
        },

        // Contact Section
        contact: {
            title: "Let's Work Together?",
            subtitle: "Always open to new challenges and collaboration opportunities",
            emailButton: "Email",
            cvButton: "View resume",
            emailLabel: "Send an email",
            copyEmail: "Copy email",
            copied: "Email copied!",
            linkedinLabel: "LinkedIn profile",
            githubLabel: "GitHub profile",
            builtWith: "Built with Astro, Tailwind CSS & GSAP",
        },
    },
} as const;

export function t(lang: Language) {
    return translations[lang];
}

// Idioma de la ruta actual (Astro.currentLocale) con fallback al idioma por defecto
export function getLang(locale: string | undefined): Language {
    return locale === "en" ? "en" : defaultLang;
}

// Textos del idioma de la ruta: const t = useTranslations(Astro.currentLocale)
export function useTranslations(locale: string | undefined) {
    return translations[getLang(locale)];
}

// Ruta de la página de inicio para cada idioma
export const homePaths: Record<Language, string> = { es: "/", en: "/en/" };

// Ruta del CV para cada idioma
export const cvPaths: Record<Language, string> = { es: "/cv/", en: "/en/cv/" };

// Páginas que existen en ambos idiomas: alimentan hreflang y el cambio de idioma sin recargar
export const localizedRoutes: readonly Record<Language, string>[] = [homePaths, cvPaths];

// Par de rutas al que pertenece una URL (tolera la barra final ausente)
export function findLocalizedRoute(pathname: string): Record<Language, string> | undefined {
    const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
    return localizedRoutes.find((route) => route.es === path || route.en === path);
}

// Años completos transcurridos desde una fecha ISO (se evalúa en build)
export function yearsSince(isoDate: string, now: Date = new Date()): number {
    const start = new Date(isoDate);
    let years = now.getFullYear() - start.getFullYear();
    const beforeAnniversary =
        now.getMonth() < start.getMonth() || (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
    if (beforeAnniversary) years--;
    return Math.max(years, 0);
}
