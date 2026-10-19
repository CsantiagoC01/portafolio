const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "UX/UI",
  "Responsive Design",
];

const projects = [
  {
    title: "Dashboard de ventas",
    category: "Frontend",
    description:
      "Panel de administración para seguimiento de métricas, KPIs y ventas en tiempo real con diseño claro y responsive.",
    tech: ["React", "Chart.js", "CSS"],
    link: "#",
    demo: "Ver proyecto",
  },
  {
    title: "Landing page de marca",
    category: "Landing Page",
    description:
      "Sitio promocional para una marca con enfoque en conversión, storytelling visual y diseño atractivo para móviles y desktop.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    demo: "Ver proyecto",
  },
  {
    title: "Sistema de tareas",
    category: "UX/UI",
    description:
      "Aplicación para gestionar tareas, prioridades, recordatorios y seguimiento de progreso con una experiencia intuitiva.",
    tech: ["Figma", "UX", "JavaScript"],
    link: "#",
    demo: "Ver proyecto",
  },
  {
    title: "Portfolio personal",
    category: "Frontend",
    description:
      "Portafolio moderno para destacar proyectos, experiencia y habilidades con navegación fluida y diseño limpio.",
    tech: ["HTML", "CSS", "JS"],
    link: "#",
    demo: "Ver proyecto",
  },
  {
    title: "E-commerce MVP",
    category: "Landing Page",
    description:
      "Versión mínima de una tienda online para validar flujo de compra, catálogo y pagos con enfoque en usabilidad.",
    tech: ["React", "API", "UX"],
    link: "#",
    demo: "Ver proyecto",
  },
  {
    title: "Herramienta de seguimiento",
    category: "UX/UI",
    description:
      "Producto orientado a monitoreo de actividades y reportes con interfaz simple, clara y enfocada en la productividad.",
    tech: ["Design System", "JS", "CSS"],
    link: "#",
    demo: "Ver proyecto",
  },
];

const skillsGrid = document.getElementById("skills-grid");
const projectsGrid = document.getElementById("projects-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");

function renderSkills() {
  skillsGrid.innerHTML = skills
    .map(
      (skill) => `
        <div class="skill-pill">${skill}</div>
      `
    )
    .join("");
}

function renderProjects(filter = "all") {
  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  projectsGrid.innerHTML = filteredProjects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-visual">${project.category}</div>
          <div class="project-body">
            <div class="project-meta">
              <span class="project-tag">${project.category}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-list">
              ${project.tech.map((item) => `<span class="tech-item">${item}</span>`).join("")}
            </div>
            <div class="project-links">
              <a href="${project.link}" aria-label="Ver proyecto ${project.title}">${project.demo}</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name");
  formResponse.textContent = `Gracias ${name}, tu mensaje ha sido enviado.`;
  contactForm.reset();
});

renderSkills();
renderProjects();
