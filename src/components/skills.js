import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { skills } from "../../user-data/data.js";

const CATEGORIES = [
    {
        category: "Diller ve Frameworkler",
        icon: "fa-solid fa-code",
        match: ["C#", ".NET Core", ".NET Framework", "Blazor", "WPF", "JavaScript", "HTML/CSS"]
    },
    {
        category: "BPM ve Kurumsal Platformlar",
        icon: "fa-solid fa-network-wired",
        match: ["Bimser Synergy", "Bimser eBA", "İş Akış Yönetimi", "Form Tasarımı", "Süreç Otomasyonu"]
    },
    {
        category: "Veritabanı ve Servisler",
        icon: "fa-solid fa-database",
        match: ["MSSQL", "T-SQL", "Entity Framework", "REST API", "XML / UBL", "WebSockets"]
    },
    {
        category: "Mimari ve Altyapı",
        icon: "fa-solid fa-layer-group",
        match: ["Clean Architecture", "Docker", "Ubuntu VPS", "Nginx Proxy Manager"]
    }
];

function groupSkills() {
    const remaining = new Set(skills);
    const groups = CATEGORIES.map(({ category, icon, match }) => {
        const items = match.filter((name) => remaining.has(name));
        items.forEach((name) => remaining.delete(name));
        return { category, icon, items };
    }).filter((group) => group.items.length);

    if (remaining.size) {
        groups.push({ category: "Diğer", icon: "fa-solid fa-star", items: [...remaining] });
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
        Karmaşık kurumsal gereksinimleri güvenilir ve performanslı arka uç sistemlerine dönüştürürken kullandığım teknolojiler.
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