import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { projects } from "../../user-data/data.js";

const projectCard = (item, index) => html`
  <article class="project-card glass glass-interactive glow-card tilt" data-reveal style="--reveal-index: ${index}">
    <div class="project-card-head">
      <span class="project-icon">
        <i class="${item.icon}" aria-hidden="true"></i>
      </span>
      <h3>${item.title}</h3>
    </div>
    <p class="project-description">${item.description}</p>
    <div class="project-tags">
      ${item.tags.map((tag) => html`<span class="chip">${tag}</span>`)}
    </div>
    <div class="project-links">
      ${item.demo
        ? html`<a class="btn btn-primary magnetic ripple" href="${item.demo}" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Canlý Önizleme
          </a>`
        : ""}
      <a class="btn btn-secondary magnetic ripple" href="${item.repo}" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github" aria-hidden="true"></i> Kaynak Kodu
      </a>
    </div>
  </article>
`;

const projectsTemplate = () => html`
  <div class="container">
    <div class="section-heading">
      <p class="section-eyebrow" data-reveal>Öne Çýkan Çalýþmalar</p>
      <h2 class="section-title" id="projects-title" data-reveal>
        Yan <span class="gradient-text">Projeler</span>
      </h2>
      <p class="section-subtitle" data-reveal>Ana iþimin dýþýnda geliþtirip hayata geçirdiðim projeler.</p>
    </div>
    <div class="project-grid">
      ${projects.map((item, i) => projectCard(item, i))}
    </div>
  </div>
`;

export function mountProjects() {
    return mount("projects", projectsTemplate());
}