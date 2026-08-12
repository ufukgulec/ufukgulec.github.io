import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { skills } from "../../user-data/data.js";

// Display-only grouping layered on top of the flat `skills` list in user-data/data.js
// (kept flat there so the JSON generator tool's multi-select keeps working).
const CATEGORIES = [
    { category: "Diller ve Çatýlar", icon: "fa-solid fa-code", match: ["C#", ".NET", "Blazor", "WPF"] },
    { category: "Veri ve Servisler", icon: "fa-solid fa-diagram-project", match: ["SQL", "Entity Framework", "WebSockets", "REST API"] },
    { category: "Mimari ve Altyapý", icon: "fa-solid fa-layer-group", match: ["Docker", "Ubuntu VPS", "Nginx Proxy Manager", "Microservices"] },
    { category: "Araçlar ve Kalite", icon: "fa-solid fa-vial", match: ["Git", "Visual Studio", "Postman", "Linux"] },
    { category: "Entegrasyonlar", icon: "fa-solid fa-robot", match: ["Microsoft Graph API", "Logo API", "SAP", "SMTP"] },
];

function groupSkills() {
    const remaining = new Set(skills);
    const groups = CATEGORIES.map(({ category, icon, match }) => {
        const items = match.filter((name) => remaining.has(name));
        items.forEach((name) => remaining.delete(name));
        return { category, icon, items };
    }).filter((group) => group.items.length);

    if (remaining.size) {
        groups.push({ category: "Diðer", icon: "fa-solid fa-star", items: [...remaining] });
    }
    return groups;
}

const skillGroup = (group, index) => html`
  <div class="skill-group glass glass-interactive glow-card" data-reveal style="--reveal-index: ${index}">
    <div class="skill-group-head">
      <span class="skill-group-icon"><i class="${group.icon}" aria-hidden="true"></i></span>
      <h3>${group.category}</h3>
    </div>
    <ul class="skill-chip-list">
      ${group.items.map((item) => html`<li class="chip skill-chip">${item}</li>`)}
    </ul>
  </div>
`;

const skillsTemplate = () => html`
  <div class="container">
    <div class="section-heading">
      <p class="section-eyebrow" data-reveal>Yetenek Seti</p>
      <h2 class="section-title" id="skills-title" data-reveal>
        Yetenekler ve <span class="gradient-text">Teknolojiler</span>
      </h2>
      <p class="section-subtitle" data-reveal>
        Karmaþýk kurumsal gereksinimleri güvenilir ve performanslý arka uç sistemlerine dönüþtürürken kullandýðým teknolojiler.
      </p>
    </div>
    <div class="skill-grid">
      ${groupSkills().map((group, i) => skillGroup(group, i))}
    </div>
  </div>
`;

export function mountSkills() {
    return mount("skills", skillsTemplate());
}