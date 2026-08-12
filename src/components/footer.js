import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { contact, footer } from "../../user-data/data.js";

const copyrightText = footer.find((item) => item.label === "copyright-text")?.data?.[0] ?? "";

const footerTemplate = () => html`
  <div class="container footer-inner">
    <div class="footer-brand">
      <p class="footer-logo">OUG<span class="gradient-text">.</span></p>
      <p class="footer-tagline">${copyrightText}</p>
    </div>

    <ul class="footer-links">
      ${contact.map(
    (item) => html`
          <li>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="underline-link">
              ${item.label}
            </a>
          </li>
        `
)}
    </ul>

    <div class="footer-meta">
      <p class="footer-visitors">
        <span class="visitor-label">Ziyaretçi</span>
        <span id="visitorCount" class="visitor-number">—</span>
      </p>
      <p class="footer-flex">Saf JS ve lit-html ile geliştirilmiştir. Framework kullanılmamıştır.</p>
    </div>
  </div>
`;

export function mountFooter() {
    return mount("footer", footerTemplate());
}