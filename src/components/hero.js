import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { RESUME_URL } from "../constants/urls.js";

const FLOATING_BADGES = [
    { label: "C# / .NET", icon: "fa-solid fa-code", pos: "badge-1" },
    { label: "Bimser Synergy", icon: "fa-solid fa-network-wired", pos: "badge-2" },
    { label: "Bimser eBA", icon: "fa-solid fa-diagram-project", pos: "badge-3" },
    { label: "MSSQL & API", icon: "fa-solid fa-database", pos: "badge-4" },
    { label: "Blazor", icon: "fa-solid fa-laptop-code", pos: "badge-5" },
];

const badgeTemplate = (badge) => html`
  <div class="hero-badge glass ${badge.pos}" aria-hidden="true">
    <i class="${badge.icon}" aria-hidden="true"></i>
    <span>${badge.label}</span>
  </div>
`;

const heroTemplate = () => html`
  <div class="hero-bg" aria-hidden="true">
    <div class="hero-mesh"></div>
    <div class="hero-blob hero-blob-1"></div>
    <div class="hero-blob hero-blob-2"></div>
    <div class="hero-blob hero-blob-3"></div>
  </div>

  <div class="container hero-inner">
    <div class="hero-copy">
      <p class="hero-eyebrow" data-reveal>
        <span class="hero-status-dot"></span>
        Kurumsal çözümler ve süreç otomasyonuna açık
      </p>
      <h1 class="hero-title" data-reveal>
        Orhan Ufuk Güleç
      </h1>
      <p class="hero-role gradient-text-animated" data-reveal>Yazılım Geliştirici</p>
      <p class="hero-description" data-reveal>
        C#, .NET Core, Bimser Synergy & eBA platformları, BPM iş akışları ve MSSQL veritabanı mimarileriyle ölçeklenebilir kurumsal çözümler geliştiriyorum.
      </p>
      <div class="hero-cta-row" data-reveal>
        <a
          class="btn btn-primary magnetic ripple"
          href="${RESUME_URL}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
          Özgeçmiş
        </a>
        <a class="btn btn-secondary magnetic ripple" href="#experience">
          Deneyimler
        </a>
        <a class="btn btn-ghost underline-link magnetic" href="#contact">
          İletişim
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
      <p class="hero-resume-updated" data-reveal>Özgeçmiş güncellendi: Ağustos 2026</p>
    </div>

    <div class="hero-visual" data-reveal>
      <div class="hero-orbit">
        <div class="hero-orbit-core glass">
          <i class="fa-solid fa-code" aria-hidden="true"></i>
        </div>
        ${FLOATING_BADGES.map((badge) => badgeTemplate(badge))}
      </div>
    </div>
  </div>

  <a class="hero-scroll-cue underline-link" href="#about" aria-label="Hakkımda bölümüne kaydır">
    <span>Kaydır</span>
    <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
  </a>
`;

export function mountHero() {
    return mount("hero", heroTemplate());
}