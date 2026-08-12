import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { URLs } from "../constants/urls.js";

const coffeeTemplate = () => html`
  <div class="container coffee-inner">
    <div class="coffee-card glass glow-card" data-reveal>
      <span class="coffee-icon">
        <i class="fa-solid fa-mug-saucer" aria-hidden="true"></i>
      </span>
      <div class="coffee-copy">
        <h2 class="coffee-title" id="coffee-title">Sitemi Beðendiniz mi?</h2>
        <p class="coffee-subtitle">
          Buradaki içerikler iþinize yaradýysa, zaman kazandýrdýysa veya sadece incelemekten keyif aldýysanýz,
          bir kahve ýsmarlayarak sonraki projelerim için destek olabilirsiniz.
        </p>
      </div>
      <a
        href="${URLs.buyMeACoffee}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary magnetic ripple coffee-btn"
        aria-label="Kahve ýsmarla"
      >
        <i class="fa-solid fa-mug-hot" aria-hidden="true"></i>
        Kahve Ismarla
      </a>
    </div>
  </div>
`;

export function mountCoffee() {
    return mount("coffee", coffeeTemplate());
}