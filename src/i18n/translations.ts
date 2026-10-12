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

// Definimos los idiomas disponibles
export type Language = 'es' | 'en';

export const languages: Record<Language, { flag: string; name: string }> = {
    es: { flag: '🇪🇸', name: 'Español' },
    en: { flag: '🇺🇸', name: 'English'}
};

// Idioma por defecto
export const defaultLang: Language = 'es';

// Fecha de inicio como desarrollador (Offimedicas) y periodo docente.
// Los años se calculan en build a partir de aquí.
export const careerDates = {
    devStart: '2024-05-22',
    teachingYears: 8
} as const;

// Todas las traducciones del sitio
export const translations = {
    es: {
        // Controles de interfaz (aria-labels)
        ui: {
            themeToLight: 'Cambiar a modo claro (Classroom)',
            themeToDark: 'Cambiar a modo oscuro (Geek)',
            languageGroup: 'Selector de idioma',
            scrollHint: 'Desplázate hacia abajo para ver más contenido',
            heroLabel: 'Presentación personal',
            skipToContent: 'Saltar al contenido',
            mainNav: 'Navegación principal',
            openMenu: 'Abrir menú',
            home: 'Inicio'
        },

        nav: {
            experience: 'Experiencia',
            projects: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto'
        },

        // Hero section
        hero: {
            greeting: '¡Hola! Soy',
            role: 'Desarrollador Full Stack | Especialista Frontend',
            intro: [
                'Licenciado en Informática y Medios Audiovisuales',
                '8 años formando desarrolladores',
                'Apasionado por crear experiencias digitales que educan y sorprenden'
            ],
            stickyNote: 'Tarea de hoy: construir algo increíble',
            // Contenido para tema geek (terminal / retro gaming)
            geekRole: 'FULL STACK DEV // FRONTEND MAIN',
            geekIntro: [
                'Developer de día, geek a tiempo completo',
                'Convierto café en commits y bugs en jefes finales derrotados',
                'Main frontend, multiclase backend: 8 años ayudando a otros a subir de nivel'
            ]
        },

        // Experiencia Section
        experience: {
            title: 'Experiencia',
            current: {
                badge: 'ACTUAL',
                title: 'Desarrollador Full Stack',
                company: 'Offimedicas S.A.',
                period: 'Mayo 2024 – Presente',
                description: 'Desarrollo de sistemas de gestión farmacéutica utilizando React, React Native, PHP/Symfony y MySQL. Implementación de dashboards interactivos, APIs RESTful y aplicaciones móviles para optimizar procesos logísticos y de dispensación.',
                highlights: ['React & React Native', 'PHP/Symfony', 'MySQL', 'REST APIs']
            },
            fusion: {
                eyebrow: 'Dos trayectorias, un perfil',
                devLabel: 'años construyendo software',
                teachLabel: 'años enseñando a programar',
                result: 'Un desarrollador que sabe explicar lo que construye'
            },
            teaching: {
                title: 'Lo que me dejaron 8 años en el aula',
                role: 'Docente en Desarrollo Web e Informática',
                org: 'Ministerio de Educación e instituciones de formación técnica',
                period: 'Febrero 2016 – Enero 2024',
                rulerLabel: 'años en el aula',
                skills: [
                    { icon: '🗣️', title: 'Comunicación técnica', description: 'Traduzco conceptos complejos en explicaciones claras para equipos, clientes y usuarios.' },
                    { icon: '🧭', title: 'Mentoría', description: 'Acompañé a estudiantes desde su primera línea de código; hoy lo aplico en code reviews y onboarding.' },
                    { icon: '👥', title: 'Liderazgo de equipos', description: 'Coordiné proyectos colaborativos con metodologías ágiles, roles claros y entregas iterativas.' },
                    { icon: '🧩', title: 'Pensamiento estructurado', description: 'Diseñar currículos me enseñó a dividir problemas grandes en pasos pequeños y verificables.' },
                    { icon: '🤝', title: 'Empatía', description: 'Entender cómo aprende cada persona me ayuda a diseñar interfaces pensando en quien las usa.' },
                    { icon: '🔄', title: 'Aprendizaje continuo', description: 'Actualizar contenidos al ritmo de la tecnología se volvió un hábito diario.' }
                ]
            }
        },

        projects: {
            title: 'Proyectos Destacados',
            viewRepo: 'Repositorio',
            viewDemo: 'Ver demo',
            comingSoon: 'Muy pronto',
            privateBadge: 'Privado · En producción',
            privateNote: 'Código privado de la empresa: sin repositorio público',
            // Etiqueta de cada proyecto según el tema
            labels: {
                featuredClassroom: 'Proyecto principal',
                featuredGeek: 'MAIN QUEST',
                classroom: 'Tarea',
                geek: 'SIDE QUEST'
            },
            featured: {
                title: 'Mesmeric ERP',
                subtitle: 'Sistema de inventarios y dispensación de medicamentos e insumos',
                company: 'Offimedicas S.A.',
                description: 'ERP empresarial legacy con el que Offimedicas gestiona el inventario y la dispensación de medicamentos e insumos. Es el sistema que mantengo y modernizo día a día sobre Symfony, MariaDB, jQuery y Bootstrap.',
                rolesTitle: 'Mi rol',
                roles: [
                    'Mantenimiento evolutivo y correctivo en producción',
                    'Refactorización de código heredado',
                    'Diseño y desarrollo de nuevos módulos'
                ],
                tech: ['PHP', 'Symfony', 'MariaDB', 'jQuery', 'Bootstrap', 'JavaScript']
            },
            items: [
                {
                    title: 'Mi Calificación - Sistema de Gestión de Notas',
                    description: 'CRUD completo para gestión académica donde docentes pueden subir, editar y descargar consolidados de calificaciones. Sistema de autenticación con roles diferenciados: estudiantes solo visualizan mientras profesores tienen control total. Integración con n8n para notificaciones automáticas cuando las notas están disponibles.',
                    tech: ['Vue.js', 'TypeScript', 'C# / .NET', 'PostgreSQL', 'n8n'],
                    repo: '',
                    demo: '',
                    status: 'coming-soon'
                },
                {
                    title: 'Comparador de Motos - MotoCompare',
                    description: 'Plataforma interactiva para comparar especificaciones técnicas de motocicletas: potencia, torque, precio, cilindrada y más. Implementación de GraphQL para consultas flexibles y optimizadas. Visualización de datos con gráficos comparativos y filtros avanzados por categoría, marca y rango de precio.',
                    tech: ['React', 'GraphQL', 'Node.js', 'Chart.js', 'PostgreSQL'],
                    repo: '',
                    demo: '',
                    status: 'coming-soon'
                },
                {
                    title: 'GymFlow - Gestión Inteligente de Gimnasio',
                    description: 'Sistema de reservas para evitar saturación del gimnasio. Los usuarios notifican su hora de llegada en tiempo real. Incluye dashboard administrativo, sistema de pagos con Stripe (modo demo), visualización de ocupación en vivo con Socket.io, y gestión completa de membresías.',
                    tech: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Stripe', 'PostgreSQL'],
                    repo: '',
                    demo: '',
                    status: 'coming-soon'
                }
            ]
        },

        // Skills Section
        skills: {
            title: 'Habilidades & Tecnologías',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                databases: 'Bases de Datos',
                tools: 'Herramientas & DevOps',
                ai: 'Agentes de IA'
            }
        },

        // Contact Section
        contact: {
            title: '¿Colaboramos?',
            subtitle: 'Siempre abierto a nuevos desafíos y proyectos épicos. ¡Hagamos algo increíble juntos!',
            emailButton: 'Correo',
            emailLabel: 'Enviar un correo',
            copyEmail: 'Copiar correo',
            copied: '¡Correo copiado!',
            linkedinLabel: 'Perfil de LinkedIn',
            githubLabel: 'Perfil de GitHub',
            builtWith: 'Hecho con Astro, Tailwind CSS y GSAP'
        }
    },
    en: {
        // UI controls (aria-labels)
        ui: {
            themeToLight: 'Switch to light mode (Classroom)',
            themeToDark: 'Switch to dark mode (Geek)',
            languageGroup: 'Language selector',
            scrollHint: 'Scroll down to see more content',
            heroLabel: 'Personal introduction',
            skipToContent: 'Skip to content',
            mainNav: 'Main navigation',
            openMenu: 'Open menu',
            home: 'Home'
        },

        nav: {
            experience: 'Experience',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact'
        },

        // Hero Section
        hero: {
            greeting: "Hi! I'm",
            role: 'Full Stack Developer | Frontend Specialist',
            intro: [
                "Bachelor's in Computer Science and Audiovisual Media",
                '8 years training developers',
                'Passionate about creating digital experiences that educate and amaze'
            ],
            stickyNote: "Today's homework: build something amazing",
            // Content for geek theme (terminal / retro gaming)
            geekRole: 'FULL STACK DEV // FRONTEND MAIN',
            geekIntro: [
                'Developer by day, full-time geek',
                'Turning coffee into commits and bugs into defeated final bosses',
                'Frontend main, backend multiclass: 8 years helping others level up'
            ]
        },

        // Experience Section
        experience: {
            title: 'Experience',
            current: {
                badge: 'CURRENT',
                title: 'Full Stack Developer',
                company: 'Offimedicas S.A.',
                period: 'May 2024 – Present',
                description: 'Development of pharmaceutical management systems using React, React Native, PHP/Symfony and MySQL. Implementation of interactive dashboards, RESTful APIs and mobile applications to optimize logistics and dispensing processes.',
                highlights: ['React & React Native', 'PHP/Symfony', 'MySQL', 'REST APIs']
            },
            fusion: {
                eyebrow: 'Two paths, one profile',
                devLabel: 'years building software',
                teachLabel: 'years teaching code',
                result: 'A developer who can explain what he builds'
            },
            teaching: {
                title: 'What 8 years in the classroom taught me',
                role: 'Web Development & Computer Science Instructor',
                org: 'Ministry of Education and technical training institutions',
                period: 'February 2016 – January 2024',
                rulerLabel: 'years in the classroom',
                skills: [
                    { icon: '🗣️', title: 'Technical communication', description: 'I turn complex concepts into clear explanations for teams, clients and users.' },
                    { icon: '🧭', title: 'Mentoring', description: 'I guided students from their very first line of code; today I apply it in code reviews and onboarding.' },
                    { icon: '👥', title: 'Team leadership', description: 'I coordinated collaborative projects with agile methods, clear roles and iterative deliveries.' },
                    { icon: '🧩', title: 'Structured thinking', description: 'Designing curricula taught me to break big problems into small, verifiable steps.' },
                    { icon: '🤝', title: 'Empathy', description: 'Understanding how each person learns helps me design interfaces for the people who use them.' },
                    { icon: '🔄', title: 'Continuous learning', description: 'Keeping content up to date with technology became a daily habit.' }
                ]
            }
        },

        // Projects Section
        projects: {
            title: 'Featured Projects',
            viewRepo: 'Repository',
            viewDemo: 'Live demo',
            comingSoon: 'Coming Soon',
            privateBadge: 'Private · In production',
            privateNote: 'Private company code: no public repository',
            // Per-theme project label
            labels: {
                featuredClassroom: 'Main project',
                featuredGeek: 'MAIN QUEST',
                classroom: 'Assignment',
                geek: 'SIDE QUEST'
            },
            featured: {
                title: 'Mesmeric ERP',
                subtitle: 'Inventory and dispensing system for medicines and medical supplies',
                company: 'Offimedicas S.A.',
                description: 'Legacy enterprise ERP that Offimedicas uses to manage the inventory and dispensing of medicines and medical supplies. It is the system I maintain and modernize every day on Symfony, MariaDB, jQuery and Bootstrap.',
                rolesTitle: 'My role',
                roles: [
                    'Evolutionary and corrective maintenance in production',
                    'Refactoring legacy code',
                    'Designing and building new modules'
                ],
                tech: ['PHP', 'Symfony', 'MariaDB', 'jQuery', 'Bootstrap', 'JavaScript']
            },
            items: [
                {
                    title: 'My Grading - Grade Management System',
                    description: 'Complete CRUD for academic management where teachers can upload, edit and download grade reports. Authentication system with differentiated roles: students only view while teachers have full control. Integration with n8n for automatic notifications when grades are available.',
                    tech: ['Vue.js', 'TypeScript', 'C# / .NET', 'PostgreSQL', 'n8n'],
                    repo: '',
                    demo: '',
                    status: 'coming-soon'
                },
                {
                    title: 'Motorcycle Comparator - MotoCompare',
                    description: 'Interactive platform to compare motorcycle technical specifications: power, torque, price, displacement and more. GraphQL implementation for flexible and optimized queries. Data visualization with comparative charts and advanced filters by category, brand and price range.',
                    tech: ['React', 'GraphQL', 'Node.js', 'Chart.js', 'PostgreSQL'],
                    repo: '',
                    demo: '',
                    status: 'coming-soon'
                },
                {
                    title: 'GymFlow - Smart Gym Management',
                    description: 'Reservation system to avoid gym overcrowding. Users notify their arrival time in real-time. Includes administrative dashboard, Stripe payment system (demo mode), live occupancy visualization with Socket.io, and complete membership management.',
                    tech: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Stripe', 'PostgreSQL'],
                    repo: '',
                    demo: '',
                    status: 'coming-soon'
                }
            ]
        },

        // Skills Section
        skills: {
            title: 'Skills & Technologies',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                databases: 'Databases',
                tools: 'Tools & DevOps',
                ai: 'AI Agents'
            }
        },

        // Contact Section
        contact: {
            title: "Let's Work Together?",
            subtitle: 'Always open to new challenges and collaboration opportunities',
            emailButton: 'Email',
            emailLabel: 'Send an email',
            copyEmail: 'Copy email',
            copied: 'Email copied!',
            linkedinLabel: 'LinkedIn profile',
            githubLabel: 'GitHub profile',
            builtWith: 'Built with Astro, Tailwind CSS & GSAP'
        }
    }
} as const;

export function t(lang: Language) {
    return translations[lang];
}

// Años completos transcurridos desde una fecha ISO (se evalúa en build)
export function yearsSince(isoDate: string, now: Date = new Date()): number {
    const start = new Date(isoDate);
    let years = now.getFullYear() - start.getFullYear();
    const beforeAnniversary =
        now.getMonth() < start.getMonth() ||
        (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
    if (beforeAnniversary) years--;
    return Math.max(years, 0);
}
