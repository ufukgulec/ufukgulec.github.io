import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";

const NAV_LINKS = [
    { id: "about", label: "Hakkımda" },
    { id: "experience", label: "Kariyer" },
    { id: "skills", label: "Yetenekler" },
    { id: "projects", label: "Projeler" },
    { id: "github", label: "GitHub" },
    { id: "blog", label: "Yazılar" },
    { id: "contact", label: "İletişim" },
];

const linkItem = (link, mobile = false) => html`
  <li>
    <a
      href="#${link.id}"
      class="nav-link underline-link${mobile ? " nav-link-mobile" : ""}"
      data-nav-link="${link.id}"
    >
      ${link.label}
    </a>
  </li>
`;

const navTemplate = () => html`
  <header class="site-nav glass" id="siteNav">
    <div class="container nav-inner">
      <a href="#hero" class="nav-logo underline-link" aria-label="Ufuk Güleç — başa dön">
        Ufuk<span class="gradient-text">.</span>
      </a>

      <nav class="nav-links" aria-label="Birincil">
        <ul>
          ${NAV_LINKS.map((link) => linkItem(link))}
        </ul>
      </nav>

      <div class="nav-actions">
        <button
          type="button"
          class="nav-icon-btn magnetic ripple"
          id="themeToggle"
          aria-label="Renk temasını değiştir"
          title="Temayı değiştir"
        >
          <i class="fa-solid fa-moon" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="nav-icon-btn magnetic ripple"
          id="commandPaletteToggle"
          aria-label="Komut paletini aç"
          title="Komut paleti (⌘K)"
        >
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="nav-mobile-toggle magnetic ripple"
          id="navMobileToggle"
          aria-label="Menüyü aç"
          aria-expanded="false"
          aria-controls="navMobileMenu"
        >
          <i class="fa-solid fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <div class="nav-mobile-menu" id="navMobileMenu" aria-hidden="true">
      <ul>
        ${NAV_LINKS.map((link) => linkItem(link, true))}
      </ul>
    </div>
  </header>
`;

export function mountNav() {
    return mount("nav-root", navTemplate());
}

export { NAV_LINKS };