/**
 * Datos de perfil compartidos: los usan el contacto y los datos estructurados (JSON-LD).
 * Un solo lugar para el nombre y los enlaces públicos.
 */
export const profile = {
    name: "Sneyder Leguía Arrieta",
    email: "zsneyder@gmail.com",
    links: {
        linkedin: "https://www.linkedin.com/in/sneyderla/",
        github: "https://github.com/IrumaCode",
    },
    employer: "Offimedicas S.A.",
    knowsAbout: [
        "React",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "PHP",
        "Symfony",
        "Node.js",
        "C#",
        ".NET",
        "MySQL",
        "MariaDB",
        "PostgreSQL",
        "Astro",
        "Tailwind CSS",
        "Web Development",
        "Teaching",
    ],
} as const;
