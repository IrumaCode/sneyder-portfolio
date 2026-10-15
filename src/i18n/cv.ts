/**
 * Contenido del CV (página /cv y /en/cv, y los PDF descargables).
 * Fuente: cv.md del autor. Por privacidad NO incluye teléfono ni correo:
 * el único contacto visible es LinkedIn.
 * Los textos con <strong> se renderizan como HTML (data-i18n lo soporta).
 */
export const cvContent = {
    es: {
        seoTitle: "CV · Sneyder Leguía Arrieta | Programador Full Stack",
        seoDescription:
            "Currículum de Sneyder Leguía Arrieta, programador Full Stack con experiencia en ERP del sector salud, PHP/Symfony, MariaDB, integraciones REST y 8 años como formador en desarrollo web.",
        eyebrow: "Currículum",
        role: "Programador Full Stack",
        location: "Montería, Colombia",
        download: "Descargar PDF",
        pdfUrl: "/cv/sneyder-leguia-arrieta-cv-es.pdf",
        linkedinLabel: "Perfil de LinkedIn",
        back: "Volver al portfolio",
        sections: {
            profile: "Perfil profesional",
            experience: "Experiencia profesional",
            stack: "Stack técnico",
            education: "Educación",
            certifications: "Certificaciones",
            more: "Más sobre mí",
        },
        profile: [
            "Programador Full Stack con más de 2 años de trayectoria en análisis, desarrollo, implementación y mantenimiento de un ERP crítico de inventario farmacéutico y dispensación de medicamentos en Offimedicas S.A., empresa del sector salud. Convierto los requerimientos de los usuarios en entregables que cumplen el alcance definido, con foco en el cumplimiento de tiempos y el soporte a los procesos de la compañía.",
            "He implementado el módulo de Glosas y Devoluciones y su integración con la API SIIFA, por lo que conozco de cerca la facturación y la gestión de glosas del sector salud. Manejo SQL con solidez sobre MariaDB, tengo base en C# y arquitectura orientada a objetos, y trabajo con frameworks de componentes como React y Vue.js, lo que facilita mi adaptación a Angular y al ecosistema .NET.",
            "Aplico de forma consistente principios SOLID, Clean Code y patrones de diseño (MVC, Service Layer, Repository). Mi experiencia como docente formador complementa este perfil con comunicación técnica, documentación y trabajo colaborativo en metodologías ágiles.",
        ],
        jobs: [
            {
                title: "Desarrollador Full Stack",
                company: "Offimedicas S.A.",
                place: "Bucaramanga, Colombia",
                period: "Mayo 2024 – Actualidad",
                bullets: [
                    "Análisis, desarrollo, implementación y mantenimiento de <strong>Mesmeric</strong>, el ERP crítico de Offimedicas para gestión de inventario farmacéutico y dispensación de medicamentos. Trabajo sobre el sistema legado en PHP/Symfony (Twig, CSS, JavaScript y jQuery) con incorporación progresiva de Go, PHP (Swoole) y Bun para procesamiento asíncrono.",
                    "Implementación del módulo de <strong>Glosas y Devoluciones</strong> y de su integración con la API REST <strong>SIIFA</strong> (MinSalud/SISPRO): autenticación JWT, consulta y sincronización de glosas, envío de respuestas individuales y masivas, gestión de aceptación o rechazo y trazabilidad de cada operación, con arquitectura por capas y patrón Strategy.",
                    "Diseño de un <strong>servicio de exportación masiva</strong> con C y Bun FFI que transforma 1.000.000 de registros a Excel en menos de 1 minuto y genera PDF masivos, procesos que con PHP no eran viables por timeout.",
                    "Desarrollo y optimización de consultas SQL sobre MariaDB (con DBeaver), incluyendo procedimientos almacenados y reemplazo de subconsultas correlacionadas por JOINs materializados, para mejorar el rendimiento de reportes de facturación de alto volumen.",
                    "Construcción, consumo y mantenimiento de APIs RESTful para integración con plataformas de facturación electrónica, pasarelas de pago y sistemas de proveedores externos, garantizando interoperabilidad entre módulos del ERP.",
                    "Refactorización de módulos legacy aplicando SOLID, Clean Code y patrones MVC, Service Layer y Repository, reduciendo deuda técnica y facilitando el soporte y la evolución del sistema.",
                    "Desarrollo de interfaces dinámicas con Twig, JavaScript y jQuery bajo arquitectura MVC/MVVM para dashboards de seguimiento de pedidos e inventarios, además de una app móvil con React Native para gestión de entregas en campo.",
                    "Incorporación de herramientas de IA (GitHub Copilot, Claude, Antigravity CLI) en el flujo de desarrollo para acelerar refactorización, generación de pruebas y documentación técnica.",
                ],
            },
            {
                title: "Formador en Informática y Tecnología enfocado hacia el Desarrollo Web",
                company: "Ministerio de Educación",
                place: "Montería, Colombia",
                period: "Febrero 2016 – Febrero 2024",
                bullets: [
                    "Formé a <strong>más de 1000 estudiantes</strong> en desarrollo web y programación aplicada, fortaleciendo habilidades de comunicación técnica, síntesis y transferencia de conocimiento.",
                    "Lideré proyectos colaborativos con metodologías ágiles (Scrum/Kanban), desarrollando capacidad de trabajo en equipo, mentoría y adaptación a entornos multidisciplinarios.",
                    "Elaboré material didáctico técnico, una habilidad blanda que hoy aplico en documentación de procesos y acompañamiento de equipos de trabajo.",
                ],
            },
        ],
        stack: [
            {
                label: "Bases de datos",
                items: [
                    "SQL (MariaDB, MySQL)",
                    "Procedimientos almacenados",
                    "Optimización de consultas",
                    "Diseño relacional",
                    "DBeaver",
                ],
            },
            {
                label: "Backend",
                items: [
                    "C#",
                    "PHP",
                    "Symfony",
                    "Twig",
                    "Laravel",
                    "Go",
                    "PHP (Swoole)",
                    "C y Bun FFI",
                    "APIs RESTful (SIIFA, JWT)",
                    "SOLID",
                    "Clean Code",
                    "Repository · Service Layer · DDD · Arquitectura Hexagonal",
                ],
            },
            {
                label: "Frontend",
                items: [
                    "JavaScript (ES6+)",
                    "jQuery",
                    "React",
                    "React Native",
                    "Vue.js",
                    "MVC/MVVM",
                    "HTML5",
                    "CSS3",
                    "SASS",
                    "Bootstrap",
                    "Diseño responsivo",
                ],
            },
            {
                label: "Herramientas",
                items: ["Git", "GitHub", "GitHub Copilot", "Claude (Anthropic)", "Antigravity CLI", "Scrum / Kanban"],
            },
        ],
        education: [
            {
                degree: "Licenciatura en Informática y Medios Audiovisuales",
                school: "Universidad de Córdoba",
                place: "Montería, Colombia",
                period: "2011 – 2015",
            },
        ],
        certifications: [
            { name: "Iniciación al Desarrollo con IA", issuer: "Big School", year: "2026" },
            { name: "Vue.js De cero a experto", issuer: "Udemy", year: "2022" },
            { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2022" },
            { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2021" },
            { name: "JavaScript ES5", issuer: "Udemy", year: "2021" },
        ],
        more: [
            {
                label: "Sector salud",
                text: "Inventario farmacéutico, dispensación de medicamentos, facturación, glosas y devoluciones e integración con SIIFA (MinSalud).",
            },
            {
                label: "Habilidades blandas",
                text: "Comunicación con usuarios, soporte y acompañamiento, documentación, trabajo en equipo y adaptabilidad.",
            },
            { label: "Idiomas", text: "Español nativo · Inglés intermedio." },
        ],
    },
    en: {
        seoTitle: "CV · Sneyder Leguía Arrieta | Full Stack Developer",
        seoDescription:
            "Resume of Sneyder Leguía Arrieta, Full Stack Developer with experience in healthcare ERP systems, PHP/Symfony, MariaDB, REST integrations and 8 years as a web development instructor.",
        eyebrow: "Resume",
        role: "Full Stack Developer",
        location: "Montería, Colombia",
        download: "Download PDF",
        pdfUrl: "/cv/sneyder-leguia-arrieta-cv-en.pdf",
        linkedinLabel: "LinkedIn profile",
        back: "Back to portfolio",
        sections: {
            profile: "Professional summary",
            experience: "Professional experience",
            stack: "Tech stack",
            education: "Education",
            certifications: "Certifications",
            more: "More about me",
        },
        profile: [
            "Full Stack Developer with over 2 years of experience in the analysis, development, deployment and maintenance of a mission-critical ERP for pharmaceutical inventory and medication dispensing at Offimedicas S.A., a healthcare company. I turn user requirements into deliverables that meet the defined scope, focused on deadlines and on supporting the company's processes.",
            "I built the Claims and Returns (Glosas y Devoluciones) module and its integration with the SIIFA API, so I know healthcare billing and claims management first-hand. I have solid SQL skills on MariaDB, a foundation in C# and object-oriented architecture, and I work with component frameworks such as React and Vue.js, which makes it easy for me to adapt to Angular and the .NET ecosystem.",
            "I consistently apply SOLID principles, Clean Code and design patterns (MVC, Service Layer, Repository). My background as an instructor adds technical communication, documentation and collaborative work in agile teams.",
        ],
        jobs: [
            {
                title: "Full Stack Developer",
                company: "Offimedicas S.A.",
                place: "Bucaramanga, Colombia",
                period: "May 2024 – Present",
                bullets: [
                    "Analysis, development, deployment and maintenance of <strong>Mesmeric</strong>, Offimedicas' mission-critical ERP for pharmaceutical inventory and medication dispensing. I work on the legacy PHP/Symfony system (Twig, CSS, JavaScript and jQuery) while progressively introducing Go, PHP (Swoole) and Bun for asynchronous processing.",
                    "Built the <strong>Claims and Returns</strong> module and its integration with the <strong>SIIFA</strong> REST API (Colombian Ministry of Health/SISPRO): JWT authentication, claim lookup and synchronization, single and bulk responses, acceptance or rejection handling and full traceability of every operation, using a layered architecture and the Strategy pattern.",
                    "Designed a <strong>bulk export service</strong> with C and Bun FFI that turns 1,000,000 records into Excel in under 1 minute and generates bulk PDFs, processes that were not viable in PHP due to timeouts.",
                    "Wrote and optimized SQL queries on MariaDB (with DBeaver), including stored procedures and replacing correlated subqueries with materialized JOINs to speed up high-volume billing reports.",
                    "Built, consumed and maintained RESTful APIs to integrate with e-invoicing platforms, payment gateways and third-party supplier systems, ensuring interoperability across ERP modules.",
                    "Refactored legacy modules applying SOLID, Clean Code and the MVC, Service Layer and Repository patterns, reducing technical debt and making the system easier to support and evolve.",
                    "Developed dynamic interfaces with Twig, JavaScript and jQuery on an MVC/MVVM architecture for order and inventory tracking dashboards, plus a React Native mobile app for field delivery management.",
                    "Brought AI tools (GitHub Copilot, Claude, Antigravity CLI) into the development workflow to speed up refactoring, test generation and technical documentation.",
                ],
            },
            {
                title: "Computer Science and Technology Instructor focused on Web Development",
                company: "Ministry of Education",
                place: "Montería, Colombia",
                period: "February 2016 – February 2024",
                bullets: [
                    "Trained <strong>more than 1,000 students</strong> in web development and applied programming, strengthening technical communication, synthesis and knowledge transfer skills.",
                    "Led collaborative projects with agile methodologies (Scrum/Kanban), building teamwork, mentoring and the ability to adapt to multidisciplinary environments.",
                    "Created technical teaching materials, a skill I now apply to process documentation and team support.",
                ],
            },
        ],
        stack: [
            {
                label: "Databases",
                items: [
                    "SQL (MariaDB, MySQL)",
                    "Stored procedures",
                    "Query optimization",
                    "Relational design",
                    "DBeaver",
                ],
            },
            {
                label: "Backend",
                items: [
                    "C#",
                    "PHP",
                    "Symfony",
                    "Twig",
                    "Laravel",
                    "Go",
                    "PHP (Swoole)",
                    "C and Bun FFI",
                    "RESTful APIs (SIIFA, JWT)",
                    "SOLID",
                    "Clean Code",
                    "Repository · Service Layer · DDD · Hexagonal Architecture",
                ],
            },
            {
                label: "Frontend",
                items: [
                    "JavaScript (ES6+)",
                    "jQuery",
                    "React",
                    "React Native",
                    "Vue.js",
                    "MVC/MVVM",
                    "HTML5",
                    "CSS3",
                    "SASS",
                    "Bootstrap",
                    "Responsive design",
                ],
            },
            {
                label: "Tools",
                items: ["Git", "GitHub", "GitHub Copilot", "Claude (Anthropic)", "Antigravity CLI", "Scrum / Kanban"],
            },
        ],
        education: [
            {
                degree: "Bachelor's Degree in Computer Science and Audiovisual Media",
                school: "Universidad de Córdoba",
                place: "Montería, Colombia",
                period: "2011 – 2015",
            },
        ],
        certifications: [
            { name: "Introduction to AI-Assisted Development", issuer: "Big School", year: "2026" },
            { name: "Vue.js: From Zero to Expert", issuer: "Udemy", year: "2022" },
            { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2022" },
            { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2021" },
            { name: "JavaScript ES5", issuer: "Udemy", year: "2021" },
        ],
        more: [
            {
                label: "Healthcare domain",
                text: "Pharmaceutical inventory, medication dispensing, billing, claims and returns, and SIIFA (Ministry of Health) integration.",
            },
            {
                label: "Soft skills",
                text: "User communication, support and guidance, documentation, teamwork and adaptability.",
            },
            { label: "Languages", text: "Spanish (native) · English (intermediate)." },
        ],
    },
} as const;
